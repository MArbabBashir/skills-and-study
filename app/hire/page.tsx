'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { PageShell } from '@/components/PageShell';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  ExternalLink,
  Mail,
  Search,
  Send,
  UserRound,
  X,
} from 'lucide-react';

type ApprovedStudent = {
  id: number;
  name: string;
  linkedin_profile: string;
  email: string;
  domain: string;
  comment: string | null;
  profile_image: string;
};

export default function HirePage() {
  const [students, setStudents] = useState<ApprovedStudent[]>([]);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [studentError, setStudentError] = useState('');

  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState('All');
  const [showDomainMenu, setShowDomainMenu] = useState(false);

  const [showRequestModal, setShowRequestModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin_profile: '',
    domain: '',
    comment: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  /* ------------------------------------------------------------------
   * Load approved students
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoadingStudents(true);
        setStudentError('');

        const response = await fetch('/api/hire-requests', {
          method: 'GET',
          cache: 'no-store',
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Unable to load skilled students.');
        }

        setStudents(data.students || []);
      } catch (error) {
        console.error('Failed to load approved students:', error);
        setStudentError(
          error instanceof Error
            ? error.message
            : 'Unable to load skilled students.'
        );
      } finally {
        setLoadingStudents(false);
      }
    };

    fetchStudents();
  }, []);

  /* ------------------------------------------------------------------
   * Unique domains
   * ------------------------------------------------------------------ */
  const domains = useMemo(() => {
    const uniqueDomains = Array.from(
      new Set(
        students.map((student) => student.domain?.trim()).filter(Boolean)
      )
    );

    return ['All', ...uniqueDomains];
  }, [students]);

  /* ------------------------------------------------------------------
   * Filtered students
   * ------------------------------------------------------------------ */
  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesDomain =
        activeDomain === 'All' ||
        student.domain?.toLowerCase() === activeDomain.toLowerCase();

      const matchesSearch =
        !query ||
        student.name?.toLowerCase().includes(query) ||
        student.domain?.toLowerCase().includes(query) ||
        student.comment?.toLowerCase().includes(query) ||
        student.email?.toLowerCase().includes(query);

      return matchesDomain && matchesSearch;
    });
  }, [students, search, activeDomain]);

  /* ------------------------------------------------------------------
   * Submit public request
   * ------------------------------------------------------------------ */
  const handleSubmitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const response = await fetch('/api/hire-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Unable to submit your request.');
      }

      setSubmitMessage(
        data?.message || 'Your request has been submitted successfully.'
      );

      setFormData({
        name: '',
        email: '',
        linkedin_profile: '',
        domain: '',
        comment: '',
      });
    } catch (error) {
      console.error('Hire request error:', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to submit your request.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    if (submitting) return;

    setShowRequestModal(false);
    setSubmitMessage('');
    setSubmitError('');
  };

  return (
    <PageShell>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="aurora -left-32 -top-32 h-80 w-80 bg-accent/20" />
          <div className="aurora right-0 top-0 h-96 w-96 bg-primary/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:pt-22 lg:pb-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-accent shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
              Skilled Student Network
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hire skilled <span className="text-gradient">students</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Discover talented students with practical skills and
              professional experience. Connect directly with the right
              person for your project, organization, or opportunity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowRequestModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground 
                shadow-lg shadow-primary/20 transition hover:opacity-90"
              >
                Add your profile
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#students"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold text-foreground transition hover:bg-secondary"
              >
                Browse students
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENTS SECTION
      ========================================================= */}
      <section
        id="students"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-10"
      >
        {/* Header */}
        {/* <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"> */}
          {/* <div> */}
            {/* <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Skilled Students
            </p> */}

            {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find the right talent
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Browse approved student profiles and connect with them
              directly.
            </p> */}
          {/* </div> */}

          {/* <button
            type="button"
            onClick={() => setShowRequestModal(true)}
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-foreground px-5 py-3 font-semibold text-background transition hover:opacity-90"
          >
            <UserRound className="h-4 w-4" />
            Request profile listing
          </button> */}
        {/* </div> */}

        {/* Search + Filter */}
        <div className=" flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, domain, or skill..."
              className="h-12 w-full rounded-xl border border-border bg-secondary/50 pl-12 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:bg-card focus:ring-4 focus:ring-accent/10"
            />
          </div>

          <div className="relative sm:w-64">
            <button
              type="button"
              onClick={() => setShowDomainMenu((value) => !value)}
              className="flex h-12 w-full items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 text-sm font-medium text-foreground transition hover:bg-card"
            >
              <span>
                {activeDomain === 'All' ? 'All domains' : activeDomain}
              </span>

              <ChevronDown
                className={`h-4 w-4 transition ${
                  showDomainMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDomainMenu && (
              <div className="absolute left-0 right-0 top-14 z-30 max-h-64 overflow-y-auto rounded-xl border border-border bg-card p-2 shadow-xl">
                {domains.map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => {
                      setActiveDomain(domain);
                      setShowDomainMenu(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      activeDomain === domain
                        ? 'bg-accent/10 font-semibold text-accent'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {domain === 'All' ? 'All domains' : domain}
                  </button>
                ))}
              </div>
            )}
          </div>
                  {!loadingStudents && !studentError && (
          <div className=" flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{' '}
              <span className="font-semibold text-foreground">
                {filteredStudents.length}
              </span>{' '}
              {filteredStudents.length === 1 ? 'student' : 'students'}
            </p>
          </div>
        )}
        </div>

        {/* Result count */}


        {/* Loading */}
        {loadingStudents && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="h-56 animate-pulse bg-secondary/60" />

                <div className="space-y-4 p-6">
                  <div className="h-4 w-24 animate-pulse rounded bg-secondary/60" />
                  <div className="h-6 w-40 animate-pulse rounded bg-secondary/60" />
                  <div className="h-4 w-full animate-pulse rounded bg-secondary/60" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-secondary/60" />
                  <div className="h-10 w-full animate-pulse rounded-xl bg-secondary/60" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loadingStudents && studentError && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/40 dark:bg-red-950/20">
            <p className="font-semibold text-red-700 dark:text-red-400">
              Unable to load student profiles
            </p>

            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              {studentError}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Try again
            </button>
          </div>
        )}

        {/* Empty */}
        {!loadingStudents && !studentError && filteredStudents.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-border bg-secondary/30 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-sm">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-foreground">
              No student profiles found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              {students.length === 0
                ? 'There are currently no approved student profiles available.'
                : 'Try changing your search or domain filter.'}
            </p>

            {students.length === 0 && (
              <button
                type="button"
                onClick={() => setShowRequestModal(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Request profile listing
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        {/* Student cards */}
        {!loadingStudents && !studentError && filteredStudents.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudents.map((student) => (
              <article
                key={student.id}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-secondary/50">
                  <img
                    src={student.profile_image}
                    alt={`${student.name} profile`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                      {student.domain}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Approved
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {student.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-accent">
                      {student.domain}
                    </p>
                  </div>

                  {student.comment && (
                    <p className="mt-5 line-clamp-4 text-sm leading-6 text-muted-foreground">
                      {student.comment}
                    </p>
                  )}

                  <div className="mt-6 space-y-3 border-t border-border pt-5">
                    <a
                      href={student.linkedin_profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-900 text-white justify-between rounded-xl border border-border px-4 py-3 text-sm font-semibold  transition hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Hire Me
                      </span>

                      <ArrowRight className="h-4 w-4" />
                    </a>

                    {/* <a
                      href={`mailto:${student.email}`}
                      className="flex items-center justify-between rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Student
                      </span>

                      <ArrowRight className="h-4 w-4" />
                    </a> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-foreground p-8 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                Want to be featured?
              </p>

              <h2 className="mt-2 text-2xl font-bold text-background sm:text-3xl">
                Showcase your skills to potential employers
              </h2>

              <p className="mt-3 max-w-2xl text-background/70">
                Submit your profile and, after review and approval, your
                profile can appear in our skilled student network.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowRequestModal(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-background px-6 py-3.5 font-semibold text-foreground transition hover:opacity-90"
            >
              Submit your profile
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          REQUEST MODAL
      ========================================================= */}
      {showRequestModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="relative my-8 w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-border px-6 py-5 sm:px-8">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <UserRound className="h-4 w-4" />
                  Skilled Student Network
                </div>

                <h2 className="mt-2 text-2xl font-bold text-foreground">
                  Request profile listing
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Submit your information for admin review.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={submitting}
                className="rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmitRequest} className="px-6 py-6 sm:px-8">
              {submitMessage && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-900/40 dark:bg-green-950/20">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-400">
                        Request submitted
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-700 dark:text-green-300">
                        {submitMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900/40 dark:bg-red-950/20">
                  <p className="font-semibold text-red-800 dark:text-red-400">
                    Submission failed
                  </p>

                  <p className="mt-1 text-sm leading-6 text-red-700 dark:text-red-300">
                    {submitError}
                  </p>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="hire-name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Full Name
                  </label>

                  <input
                    id="hire-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="hire-email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Email
                  </label>

                  <input
                    id="hire-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                {/* LinkedIn */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hire-linkedin"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    LinkedIn Profile
                  </label>

                  <input
                    id="hire-linkedin"
                    type="url"
                    required
                    value={formData.linkedin_profile}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        linkedin_profile: event.target.value,
                      }))
                    }
                    placeholder="https://www.linkedin.com/in/your-profile"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                {/* Domain */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hire-domain"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    Domain / Field
                  </label>

                  <input
                    id="hire-domain"
                    type="text"
                    required
                    value={formData.domain}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        domain: event.target.value,
                      }))
                    }
                    placeholder="e.g. Web Development, AI, Networking"
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>

                {/* Comment */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="hire-comment"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    About You
                  </label>

                  <textarea
                    id="hire-comment"
                    rows={5}
                    value={formData.comment}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        comment: event.target.value,
                      }))
                    }
                    placeholder="Tell us about your skills, experience, projects, or what type of work you are interested in..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10"
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <div className="flex gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

                  <p className="text-sm leading-6 text-foreground/80">
                    Your request will be reviewed by the administrator. If
                    approved, the administrator will add your profile image
                    and publish your profile.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageShell>
  );
}