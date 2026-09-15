'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  CheckCircle2,
  XCircle,
  Clock3,
  ExternalLink,
  Search,
  RefreshCw,
  Upload,
  UserRound,
  Mail,
  BriefcaseBusiness,
  MessageSquare,
  Image as ImageIcon,
  Loader2,
  Pencil,
  Link2,
  Trash2,
  Home,
  LogOut,
} from 'lucide-react';

// ------------------------------------------------------------
// Types
// ------------------------------------------------------------

type Status = 'pending' | 'approved' | 'disapproved';

type HireRequest = {
  id: number;
  name: string;
  linkedin_profile: string;
  email: string;
  domain: string;
  comment: string | null;
  profile_image: string | null;
  status: Status;
  admin_note: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
};

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  subject: string;
  inquiry_type: string;
  message: string;
  created_at: string;
};

type EditForm = {
  name: string;
  email: string;
  domain: string;
  linkedin_profile: string;
  comment: string;
  admin_note: string;
  status: Status;
  profile_image: string;
};

type AuthState = 'checking' | 'authed' | 'unauthed';

// ------------------------------------------------------------
// Page
// ------------------------------------------------------------

export default function HireRequestsPage() {
  const router = useRouter();

  const [authState, setAuthState] = useState<AuthState>('checking');

  // Hire requests
  const [requests, setRequests] = useState<HireRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // Contact messages
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [contactsLoading, setContactsLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | Status>('all');

  const [contactSearch, setContactSearch] = useState('');

  const [selectedRequest, setSelectedRequest] =
    useState<HireRequest | null>(null);

  const [form, setForm] = useState<EditForm | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');

  // ----------------------------------------------------------
  // Auth helpers
  // ----------------------------------------------------------

  const getLocalToken = (): string | null => {
    if (typeof window === 'undefined') return null;

    try {
      return localStorage.getItem('admin_token');
    } catch {
      return null;
    }
  };

  const buildAuthHeaders = (): HeadersInit | undefined => {
    const token = getLocalToken();

    return token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined;
  };

  const handleUnauthorized = () => {
    try {
      localStorage.removeItem('admin_token');
    } catch {
      /* ignore */
    }

    setAuthState('unauthed');
    setLoading(false);
    setContactsLoading(false);
    setRefreshing(false);
  };

  // ----------------------------------------------------------
  // Fetch Hire Requests
  // ----------------------------------------------------------

  const fetchRequests = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError('');

      const res = await fetch('/api/admin/hire-requests', {
        method: 'GET',
        headers: buildAuthHeaders(),
        credentials: 'include',
        cache: 'no-store',
      });

      if (res.status === 401 || res.status === 403) {
        handleUnauthorized();
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.message || data?.error || 'Unable to load hire requests.'
        );
      }

      setRequests(data.requests || []);
      setAuthState('authed');
    } catch (err) {
      console.error('fetchRequests failed:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load hire requests.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // ----------------------------------------------------------
  // Fetch Contact Messages
  // ----------------------------------------------------------

  const fetchContactMessages = async () => {
    try {
      setContactsLoading(true);

      const res = await fetch('/api/admin/contact-messages', {
        method: 'GET',
        headers: buildAuthHeaders(),
        credentials: 'include',
        cache: 'no-store',
      });

      if (res.status === 401 || res.status === 403) {
        handleUnauthorized();
        return;
      }

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            'Unable to load contact messages.'
        );
      }

      setContactMessages(data.messages || []);
      setAuthState('authed');
    } catch (err) {
      console.error('fetchContactMessages failed:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load contact messages.'
      );
    } finally {
      setContactsLoading(false);
    }
  };

  // ----------------------------------------------------------
  // Load everything
  // ----------------------------------------------------------

  const loadDashboard = async (showRefresh = false) => {
    if (showRefresh) {
      setRefreshing(true);
    }

    try {
      await Promise.all([
        fetchRequests(false),
        fetchContactMessages(),
      ]);
    } finally {
      setRefreshing(false);
    }
  };

  // ----------------------------------------------------------
  // Initial load
  // ----------------------------------------------------------

  useEffect(() => {
    loadDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------
  // Logout
  // ----------------------------------------------------------

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch {
      /* ignore */
    }

    try {
      localStorage.removeItem('admin_token');
    } catch {
      /* ignore */
    }

    setAuthState('unauthed');
    router.push('/');
  };

  // ----------------------------------------------------------
  // Hire request filtering
  // ----------------------------------------------------------

  const filteredRequests = useMemo(() => {
    const q = search.trim().toLowerCase();

    return requests.filter((r) => {
      if (statusFilter !== 'all' && r.status !== statusFilter) {
        return false;
      }

      if (!q) return true;

      return (
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.domain.toLowerCase().includes(q) ||
        r.linkedin_profile.toLowerCase().includes(q)
      );
    });
  }, [requests, search, statusFilter]);

  // ----------------------------------------------------------
  // Contact filtering
  // ----------------------------------------------------------

  const filteredContacts = useMemo(() => {
    const q = contactSearch.trim().toLowerCase();

    if (!q) return contactMessages;

    return contactMessages.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(q) ||
        contact.email.toLowerCase().includes(q) ||
        contact.subject.toLowerCase().includes(q) ||
        contact.inquiry_type.toLowerCase().includes(q) ||
        contact.message.toLowerCase().includes(q)
      );
    });
  }, [contactMessages, contactSearch]);

  // ----------------------------------------------------------
  // Stats
  // ----------------------------------------------------------

  const pendingCount = requests.filter(
    (r) => r.status === 'pending'
  ).length;

  const approvedCount = requests.filter(
    (r) => r.status === 'approved'
  ).length;

  const disapprovedCount = requests.filter(
    (r) => r.status === 'disapproved'
  ).length;

  // ----------------------------------------------------------
  // Modal helpers
  // ----------------------------------------------------------

  const openModal = (request: HireRequest) => {
    setSelectedRequest(request);

    setForm({
      name: request.name,
      email: request.email,
      domain: request.domain,
      linkedin_profile: request.linkedin_profile,
      comment: request.comment ?? '',
      admin_note: request.admin_note ?? '',
      status: request.status,
      profile_image: request.profile_image ?? '',
    });

    setSelectedImage(null);
    setError('');
  };

  const closeModal = () => {
    if (actionLoading) return;

    setSelectedRequest(null);
    setForm(null);
    setSelectedImage(null);
    setError('');
  };

  const updateForm = <K extends keyof EditForm>(
    key: K,
    value: EditForm[K]
  ) => {
    setForm((prev) =>
      prev
        ? {
            ...prev,
            [key]: value,
          }
        : prev
    );
  };

  // ----------------------------------------------------------
  // Save / Approve / Disapprove
  // ----------------------------------------------------------

  const save = async (
    overrideStatus?: Status
  ): Promise<boolean> => {
    if (!selectedRequest || !form) return false;

    const statusToSave: Status =
      overrideStatus ?? form.status;

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.domain.trim() ||
      !form.linkedin_profile.trim()
    ) {
      setError(
        'Name, email, domain and LinkedIn profile are required.'
      );

      return false;
    }

    if (
      statusToSave === 'approved' &&
      !selectedImage &&
      !form.profile_image.trim()
    ) {
      setError(
        'Approving requires a profile image — paste a URL or upload a WEBP.'
      );

      return false;
    }

    if (
      selectedImage &&
      selectedImage.type !== 'image/webp'
    ) {
      setError('Only WEBP images are allowed.');
      return false;
    }

    try {
      setActionLoading(true);
      setError('');

      const body = new FormData();

      body.append('name', form.name.trim());
      body.append('email', form.email.trim());
      body.append('domain', form.domain.trim());
      body.append(
        'linkedin_profile',
        form.linkedin_profile.trim()
      );
      body.append('comment', form.comment.trim());
      body.append('admin_note', form.admin_note.trim());
      body.append('status', statusToSave);
      body.append(
        'profile_image',
        form.profile_image.trim()
      );

      if (selectedImage) {
        body.append('image', selectedImage);
      }

      const res = await fetch(
        `/api/admin/hire-requests/${selectedRequest.id}`,
        {
          method: 'PATCH',
          headers: buildAuthHeaders(),
          credentials: 'include',
          body,
        }
      );

      if (res.status === 401 || res.status === 403) {
        handleUnauthorized();
        return false;
      }

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            'Unable to save request.'
        );
      }

      setRequests((prev) =>
        prev.map((r) =>
          r.id === selectedRequest.id
            ? {
                ...r,
                ...data.request,
              }
            : r
        )
      );

      return true;
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : 'Unable to save request.'
      );

      return false;
    } finally {
      setActionLoading(false);
    }
  };

  const handleSave = async () => {
    if (await save()) {
      closeModal();
    }
  };

  const handleApprove = async () => {
    if (await save('approved')) {
      closeModal();
    }
  };

  const handleDisapprove = async () => {
    if (await save('disapproved')) {
      closeModal();
    }
  };

  // ----------------------------------------------------------
  // Helpers
  // ----------------------------------------------------------

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString();
  };

  const previewSrc = selectedImage
    ? URL.createObjectURL(selectedImage)
    : form?.profile_image?.trim() || '';

  // ----------------------------------------------------------
  // Auth gate
  // ----------------------------------------------------------

  if (authState === 'checking') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
          <Loader2
            size={20}
            className="animate-spin"
          />
          Loading...
        </div>
      </div>
    );
  }

  if (authState === 'unauthed') {
    return <NotFoundView />;
  }

  // ----------------------------------------------------------
  // Main UI
  // ----------------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= ADMIN NAV ================= */}

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-6 lg:px-8">

          <Link
            href="/admin"
            className="flex items-center gap-2.5 transition hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900">
                Skills &amp; Study
              </p>

              <p className="text-[11px] font-medium text-slate-500">
                Admin Panel
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Home size={16} />

              <span className="hidden sm:inline">
                Home
              </span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <LogOut size={16} />

              <span className="hidden sm:inline">
                Logout
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <div className="p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-[1600px]">

          {/* HEADER */}

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600">
                <BriefcaseBusiness size={18} />
                Admin Management
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage hire requests and contact messages.
              </p>
            </div>

            <button
              onClick={() => loadDashboard(true)}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={
                  refreshing
                    ? 'animate-spin'
                    : ''
                }
              />

              Refresh
            </button>

          </div>

          {error && !selectedRequest && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* ================= STATS ================= */}

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

            <StatCard
              label="Total Requests"
              value={requests.length}
              tone="blue"
              icon={<UserRound size={19} />}
            />

            <StatCard
              label="Pending"
              value={pendingCount}
              tone="amber"
              icon={<Clock3 size={19} />}
            />

            <StatCard
              label="Approved"
              value={approvedCount}
              tone="emerald"
              icon={<CheckCircle2 size={19} />}
            />

            <StatCard
              label="Disapproved"
              value={disapprovedCount}
              tone="red"
              icon={<XCircle size={19} />}
            />

            <StatCard
              label="Contact Messages"
              value={contactMessages.length}
              tone="blue"
              icon={<Mail size={19} />}
            />

          </div>

          {/* ================================================== */}
          {/* HIRE REQUESTS */}
          {/* ================================================== */}

          <section id="hire-requests">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Hire Requests
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Review, edit, approve or disapprove student profile requests.
                </p>
              </div>
            </div>

            {/* FILTER BAR */}

            <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">

              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search name, email, domain..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto">

                {(
                  [
                    ['all', 'All'],
                    ['pending', 'Pending'],
                    ['approved', 'Approved'],
                    ['disapproved', 'Disapproved'],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() =>
                      setStatusFilter(value)
                    }
                    className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      statusFilter === value
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}

              </div>
            </div>

            {/* HIRE TABLE */}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {loading ? (
                <div className="flex min-h-[350px] items-center justify-center">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />
                    Loading requests...
                  </div>
                </div>
              ) : filteredRequests.length === 0 ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center px-6 text-center">

                  <div className="mb-4 rounded-2xl bg-slate-100 p-4 text-slate-400">
                    <UserRound size={30} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    No requests found
                  </h3>

                  <p className="mt-1 max-w-md text-sm text-slate-500">
                    There are no hire requests matching your current search or filter.
                  </p>

                </div>
              ) : (
                <div className="overflow-x-auto">

                  <table className="w-full min-w-[1200px]">

                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">

                        {[
                          'Applicant',
                          'Domain',
                          'LinkedIn',
                          'Comment',
                          'Image',
                          'Status',
                          'Submitted',
                          'Actions',
                        ].map((h) => (
                          <th
                            key={h}
                            className={`px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 ${
                              h === 'Actions'
                                ? 'text-right'
                                : 'text-left'
                            }`}
                          >
                            {h}
                          </th>
                        ))}

                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">

                      {filteredRequests.map(
                        (request) => (
                          <tr
                            key={request.id}
                            className="transition hover:bg-slate-50/70"
                          >

                            {/* Applicant */}

                            <td className="px-5 py-5">
                              <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100">

                                  {request.profile_image ? (
                                    <img
                                      src={request.profile_image}
                                      alt={request.name}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : (
                                    <UserRound
                                      size={19}
                                      className="text-slate-400"
                                    />
                                  )}

                                </div>

                                <div className="min-w-0">

                                  <p className="truncate font-semibold text-slate-900">
                                    {request.name}
                                  </p>

                                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">

                                    <Mail size={13} />

                                    <span className="truncate">
                                      {request.email}
                                    </span>

                                  </div>

                                </div>

                              </div>
                            </td>

                            {/* Domain */}

                            <td className="px-5 py-5">
                              <span className="inline-flex rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                {request.domain}
                              </span>
                            </td>

                            {/* LinkedIn */}

                            <td className="px-5 py-5">

                              <a
                                href={request.linkedin_profile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                              >
                                LinkedIn
                                <ExternalLink size={14} />
                              </a>

                            </td>

                            {/* Comment */}

                            <td className="max-w-[280px] px-5 py-5">

                              <div className="flex items-start gap-2">

                                <MessageSquare
                                  size={15}
                                  className="mt-0.5 shrink-0 text-slate-400"
                                />

                                <p className="line-clamp-2 text-sm text-slate-600">
                                  {request.comment ||
                                    'No comment'}
                                </p>

                              </div>

                            </td>

                            {/* Image */}

                            <td className="px-5 py-5">

                              {request.profile_image ? (
                                <div className="flex items-center gap-2">

                                  <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-200">

                                    <img
                                      src={
                                        request.profile_image
                                      }
                                      alt={request.name}
                                      className="h-full w-full object-cover"
                                    />

                                  </div>

                                  <span className="text-xs font-medium text-emerald-600">
                                    Image set
                                  </span>

                                </div>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">

                                  <ImageIcon size={14} />

                                  Not added

                                </span>
                              )}

                            </td>

                            {/* Status */}

                            <td className="px-5 py-5">
                              <StatusBadge
                                status={request.status}
                              />
                            </td>

                            {/* Date */}

                            <td className="px-5 py-5">

                              <span className="whitespace-nowrap text-xs text-slate-500">
                                {formatDate(
                                  request.created_at
                                )}
                              </span>

                            </td>

                            {/* Actions */}

                            <td className="px-5 py-5">

                              <div className="flex justify-end">

                                <button
                                  onClick={() =>
                                    openModal(request)
                                  }
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                  <Pencil size={14} />
                                  Review / Edit
                                </button>

                              </div>

                            </td>

                          </tr>
                        )
                      )}

                    </tbody>
                  </table>

                </div>
              )}

            </div>

            {!loading &&
              filteredRequests.length > 0 && (
                <div className="mt-4 text-sm text-slate-500">
                  Showing{' '}
                  <span className="font-semibold text-slate-700">
                    {filteredRequests.length}
                  </span>{' '}
                  of{' '}
                  <span className="font-semibold text-slate-700">
                    {requests.length}
                  </span>{' '}
                  requests
                </div>
              )}

          </section>

          {/* ================================================== */}
          {/* CONTACT MESSAGES */}
          {/* ================================================== */}

          <section
            id="contact-messages"
            className="mt-12"
          >

            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Contact Messages
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Messages submitted through the website contact form.
                </p>
              </div>

              <div className="relative w-full md:w-80">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={contactSearch}
                  onChange={(e) =>
                    setContactSearch(e.target.value)
                  }
                  placeholder="Search contact messages..."
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {contactsLoading ? (
                <div className="flex min-h-[250px] items-center justify-center">

                  <div className="flex items-center gap-3 text-sm font-medium text-slate-500">

                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Loading contact messages...

                  </div>

                </div>
              ) : filteredContacts.length === 0 ? (
                <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">

                  <div className="mb-4 rounded-2xl bg-slate-100 p-4 text-slate-400">
                    <Mail size={30} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    No contact messages
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    No messages match your search.
                  </p>

                </div>
              ) : (
                <div className="overflow-x-auto">

                  <table className="w-full min-w-[1000px]">

                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50">

                        {[
                          'Name',
                          'Email',
                          'Subject',
                          'Inquiry Type',
                          'Message',
                          'Date',
                        ].map((heading) => (
                          <th
                            key={heading}
                            className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
                          >
                            {heading}
                          </th>
                        ))}

                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">

                      {filteredContacts.map(
                        (contact) => (
                          <tr
                            key={contact.id}
                            className="transition hover:bg-slate-50/70"
                          >

                            {/* Name */}

                            <td className="px-5 py-5">

                              <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                  <UserRound size={17} />
                                </div>

                                <div>
                                  <p className="font-semibold text-slate-900">
                                    {contact.name}
                                  </p>

                                  <p className="mt-0.5 text-xs text-slate-400">
                                    #{contact.id}
                                  </p>
                                </div>

                              </div>

                            </td>

                            {/* Email */}

                            <td className="px-5 py-5">

                              <a
                                href={`mailto:${contact.email}`}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700"
                              >
                                <Mail size={14} />
                                {contact.email}
                              </a>

                            </td>

                            {/* Subject */}

                            <td className="max-w-[220px] px-5 py-5">

                              <p className="font-semibold text-slate-800">
                                {contact.subject}
                              </p>

                            </td>

                            {/* Inquiry Type */}

                            <td className="px-5 py-5">

                              <span className="inline-flex rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                                {contact.inquiry_type}
                              </span>

                            </td>

                            {/* Message */}

                            <td className="max-w-[400px] px-5 py-5">

                              <div className="flex items-start gap-2">

                                <MessageSquare
                                  size={15}
                                  className="mt-0.5 shrink-0 text-slate-400"
                                />

                                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                                  {contact.message}
                                </p>

                              </div>

                            </td>

                            {/* Date */}

                            <td className="whitespace-nowrap px-5 py-5">

                              <span className="text-xs text-slate-500">
                                {formatDate(
                                  contact.created_at
                                )}
                              </span>

                            </td>

                          </tr>
                        )
                      )}

                    </tbody>
                  </table>

                </div>
              )}

            </div>

            {!contactsLoading &&
              filteredContacts.length > 0 && (
                <div className="mt-4 text-sm text-slate-500">
                  Showing{' '}
                  <span className="font-semibold text-slate-700">
                    {filteredContacts.length}
                  </span>{' '}
                  of{' '}
                  <span className="font-semibold text-slate-700">
                    {contactMessages.length}
                  </span>{' '}
                  messages
                </div>
              )}

          </section>

        </div>
      </div>

      {/* ================================================== */}
      {/* HIRE REQUEST MODAL */}
      {/* ================================================== */}

      {selectedRequest && form && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">

          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}

            <div className="border-b border-slate-200 px-6 py-5">

              <h2 className="text-xl font-bold text-slate-900">
                Review / Edit Request
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Every field is editable. Use a URL or upload a WEBP for the image.
              </p>

            </div>

            {/* Modal Body */}

            <div className="max-h-[70vh] space-y-5 overflow-y-auto p-6">

              {/* IMAGE BLOCK */}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

                <div className="flex items-center gap-4">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white">

                    {previewSrc ? (
                      <img
                        src={previewSrc}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserRound
                        size={26}
                        className="text-slate-300"
                      />
                    )}

                  </div>

                  <div className="min-w-0 flex-1 space-y-3">

                    <div>

                      <label className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-slate-600">

                        <Link2 size={13} />

                        Image URL (LinkedIn or any HTTPS)

                      </label>

                      <input
                        type="text"
                        value={form.profile_image}
                        onChange={(e) => {
                          updateForm(
                            'profile_image',
                            e.target.value
                          );

                          setSelectedImage(null);
                          setError('');
                        }}
                        placeholder="https://media.licdn.com/..."
                        className="input"
                      />

                    </div>

                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white px-3 py-2 transition hover:border-blue-400 hover:bg-blue-50/40">

                      <Upload
                        size={15}
                        className="text-slate-500"
                      />

                      <span className="truncate text-xs font-medium text-slate-700">

                        {selectedImage
                          ? `${selectedImage.name} (${(
                              selectedImage.size / 1024
                            ).toFixed(1)} KB)`
                          : 'Or upload a WEBP file (optional)'}

                      </span>

                      <input
                        type="file"
                        accept="image/webp,.webp"
                        className="hidden"
                        onChange={(e) => {
                          const file =
                            e.target.files?.[0] ||
                            null;

                          setSelectedImage(file);

                          if (file) {
                            updateForm(
                              'profile_image',
                              ''
                            );
                          }

                          setError('');
                        }}
                      />

                    </label>

                    {(form.profile_image ||
                      selectedImage) && (
                      <button
                        type="button"
                        onClick={() => {
                          updateForm(
                            'profile_image',
                            ''
                          );

                          setSelectedImage(null);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
                      >
                        <Trash2 size={12} />
                        Clear image
                      </button>
                    )}

                  </div>

                </div>

              </div>

              {/* EDITABLE FIELDS */}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                <Field label="Name">
                  <input
                    value={form.name}
                    onChange={(e) =>
                      updateForm(
                        'name',
                        e.target.value
                      )
                    }
                    className="input"
                  />
                </Field>

                <Field label="Email">
                  <input
                    value={form.email}
                    onChange={(e) =>
                      updateForm(
                        'email',
                        e.target.value
                      )
                    }
                    className="input"
                  />
                </Field>

                <Field label="Domain">
                  <input
                    value={form.domain}
                    onChange={(e) =>
                      updateForm(
                        'domain',
                        e.target.value
                      )
                    }
                    className="input"
                  />
                </Field>

                <Field label="LinkedIn Profile">
                  <input
                    value={form.linkedin_profile}
                    onChange={(e) =>
                      updateForm(
                        'linkedin_profile',
                        e.target.value
                      )
                    }
                    className="input"
                  />
                </Field>

              </div>

              {/* Applicant Comment */}

              <Field label="Applicant Comment">

                <textarea
                  rows={3}
                  value={form.comment}
                  onChange={(e) =>
                    updateForm(
                      'comment',
                      e.target.value
                    )
                  }
                  className="input resize-none"
                />

              </Field>

              {/* Admin Note */}

              <Field label="Admin Note (internal)">

                <textarea
                  rows={3}
                  value={form.admin_note}
                  onChange={(e) =>
                    updateForm(
                      'admin_note',
                      e.target.value
                    )
                  }
                  className="input resize-none"
                  placeholder="Optional note for other admins..."
                />

              </Field>

              {/* Status */}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Current Status
                </p>

                <StatusBadge
                  status={form.status}
                />

              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

            </div>

            {/* FOOTER */}

            <div className="flex flex-wrap items-center justify-end gap-2 border-t border-slate-200 bg-slate-50 px-6 py-4">

              <button
                onClick={closeModal}
                disabled={actionLoading}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                disabled={actionLoading}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-50"
              >

                {actionLoading && (
                  <Loader2
                    size={15}
                    className="animate-spin"
                  />
                )}

                Save Changes

              </button>

              <button
                onClick={handleDisapprove}
                disabled={actionLoading}
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50"
              >
                <XCircle size={15} />
                Disapprove
              </button>

              <button
                onClick={handleApprove}
                disabled={actionLoading}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
              >

                {actionLoading ? (
                  <Loader2
                    size={15}
                    className="animate-spin"
                  />
                ) : (
                  <CheckCircle2 size={15} />
                )}

                Approve

              </button>

            </div>

          </div>

          <style jsx>{`
            .input {
              width: 100%;
              border-radius: 0.5rem;
              border: 1px solid #e2e8f0;
              background: #ffffff;
              padding: 0.55rem 0.75rem;
              font-size: 0.875rem;
              outline: none;
            }

            .input:focus {
              border-color: #3b82f6;
              box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
            }
          `}</style>

        </div>
      )}

    </div>
  );
}

// ------------------------------------------------------------
// Fake 404 view
// ------------------------------------------------------------

function NotFoundView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-20">

      <div className="w-full max-w-md text-center">

        <p className="text-7xl font-extrabold tracking-tight text-slate-900 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          This page could not be found
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Home size={16} />
          Back to home
        </Link>

      </div>

    </div>
  );
}

// ------------------------------------------------------------
// Field
// ------------------------------------------------------------

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">

      <span className="mb-1 block text-xs font-semibold text-slate-600">
        {label}
      </span>

      {children}

    </label>
  );
}

// ------------------------------------------------------------
// Status Badge
// ------------------------------------------------------------

function StatusBadge({
  status,
}: {
  status: Status;
}) {
  if (status === 'approved') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
        <CheckCircle2 size={14} />
        Approved
      </span>
    );
  }

  if (status === 'disapproved') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
        <XCircle size={14} />
        Disapproved
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
      <Clock3 size={14} />
      Pending
    </span>
  );
}

// ------------------------------------------------------------
// Stat Card
// ------------------------------------------------------------

function StatCard({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: number;
  tone: 'blue' | 'amber' | 'emerald' | 'red';
  icon: React.ReactNode;
}) {
  const toneMap: Record<
    typeof tone,
    string
  > = {
    blue: 'bg-blue-50 text-blue-600',
    amber: 'bg-amber-50 text-amber-600',
    emerald:
      'bg-emerald-50 text-emerald-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm font-medium text-slate-500">
          {label}
        </span>

        <div
          className={`rounded-xl p-2 ${toneMap[tone]}`}
        >
          {icon}
        </div>

      </div>

      <p className="text-3xl font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}