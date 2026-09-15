'use client';

import { useState } from 'react';
import { PageShell } from '@/components/PageShell';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { siteConfig } from '@/data/navigation';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Youtube, Instagram, Facebook, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Training Inquiry',
    message: '',
  });

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to send message");
        }

        setSubmitted(true);

    } catch (error) {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
    }
};

  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in Touch"
        title={
          <>
            Contact <span className="text-gradient">Us</span>
          </>
        }
        description="Have a question about training programs, academic resources, or anything else? We'd love to hear from you. Reach out and we'll get back to you as soon as possible."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact' }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Choose the channel that works best for you. We respond to all inquiries within 24 hours.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-8 flex flex-col gap-4">
                  {[
                    { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                    { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                    { icon: MapPin, label: 'Location', value: siteConfig.location },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                        <div className="text-sm font-semibold">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow Us</h3>
                  <div className="mt-4 flex gap-3">
                    {[
                      { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
                      { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                      { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
                      { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                      { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent hover:shadow-md"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-8 rounded-2xl border border-border bg-secondary/30 p-6">
                  <h3 className="text-sm font-bold">Training Inquiry</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Interested in a training program? Select "Training Inquiry" in the form and tell us which program you're interested in.
                  </p>
                  <h3 className="mt-4 text-sm font-bold">Academic / Resource Inquiry</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Looking for study materials or resources? Select "Academic Inquiry" and specify your board and level.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <Reveal delay={100}>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold">Message Sent!</h3>
                      <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours at the email you provided.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', subject: '', inquiryType: 'Training Inquiry', message: '' });
                        }}
                        className="mt-8 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold transition-all hover:bg-secondary/70"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h2 className="text-2xl font-bold">Send a Message</h2>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          label="Your Name"
                          type="text"
                          value={form.name}
                          onChange={(v) => setForm({ ...form, name: v })}
                          placeholder="Muhammad Ali"
                          required
                        />
                        <FormField
                          label="Email Address"
                          type="email"
                          value={form.email}
                          onChange={(v) => setForm({ ...form, email: v })}
                          placeholder="MuhammadAli@example.com"
                          required
                        />
                      </div>
                      <FormField
                        label="Subject"
                        type="text"
                        value={form.subject}
                        onChange={(v) => setForm({ ...form, subject: v })}
                        placeholder="How can we help?"
                        required
                      />
                      <div>
                        <label className="mb-2 block text-sm font-semibold">Inquiry Type</label>
                        <div className="flex flex-wrap gap-2">
                          {['Training Inquiry', 'Academic Inquiry', 'General Question'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setForm({ ...form, inquiryType: type })}
                              className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                                form.inquiryType === type
                                  ? 'bg-primary text-primary-foreground'
                                  : 'border border-border bg-secondary/40 text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold">Message</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us more about what you're looking for..."
                          required
                          rows={5}
                          className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                      >
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
