import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with your Ikhtiar account. Contact our support team or find quick solutions to common issues.",
};

const topics = [
  {
    icon: "🔐",
    title: "Can't log in or access my account",
    description:
      "Tap 'Continue with Email' on the login screen. We'll send a one-time verification code to your registered email address — no password needed.",
  },
  {
    icon: "🗑️",
    title: "Delete my account",
    description:
      "Open the app → Profile → Settings → Delete Account. Your account and all personal data will be permanently removed. This cannot be undone.",
  },
  {
    icon: "🚫",
    title: "Report a user or block someone",
    description:
      "Open the user's profile, tap the flag icon in the top-right corner, and choose to report or block. Our team reviews all reports within 24 hours.",
  },
  {
    icon: "📷",
    title: "Photos not uploading",
    description:
      "Make sure Ikhtiar has camera and photo library permissions in your iPhone Settings → Ikhtiar. Photos must be under 10 MB and in JPG or PNG format.",
  },
  {
    icon: "🔔",
    title: "Not receiving notifications",
    description:
      "Go to iPhone Settings → Ikhtiar → Notifications and ensure notifications are enabled. Also check that you haven't muted a specific conversation inside the app.",
  },
  {
    icon: "💳",
    title: "Subscription or billing issue",
    description:
      "All subscriptions are managed through the App Store. Go to iPhone Settings → Apple ID → Subscriptions to manage or cancel your Ikhtiar subscription.",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Support</p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">We&apos;re here to help</h1>
        <p className="text-ink-muted text-lg max-w-lg mx-auto leading-relaxed">
          Browse common issues below or reach out to our team directly.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
        <div>
          <p className="text-ink font-bold text-lg mb-1">Contact Support</p>
          <p className="text-ink-muted text-sm">
            Monday – Friday, 9 am – 6 pm. We aim to respond within 24 hours.
          </p>
        </div>
        <a
          href="mailto:support@ikhtiar.app"
          className="shrink-0 bg-gold text-white font-semibold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors text-sm"
        >
          Email support@ikhtiar.app
        </a>
      </div>

      {/* Common Issues */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-ink mb-6">Common issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white border border-cream-border rounded-2xl p-6"
            >
              <div className="text-2xl mb-3">{topic.icon}</div>
              <h3 className="text-ink font-semibold mb-2 text-[15px]">{topic.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Account Deletion (Apple requirement — prominent) */}
      <div className="bg-white border border-cream-border rounded-2xl p-8 mb-14">
        <h2 className="text-xl font-bold text-ink mb-3">Request account & data deletion</h2>
        <p className="text-ink-muted text-sm leading-relaxed mb-4">
          You can delete your account directly inside the app at any time. All personal data
          including your profile, photos, matches, and messages will be permanently erased.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-ink-muted mb-6">
          <li>Open the Ikhtiar app</li>
          <li>Go to <span className="text-ink font-medium">Profile → Settings</span></li>
          <li>Scroll down and tap <span className="text-ink font-medium">Delete Account</span></li>
          <li>Confirm deletion — your data is removed immediately</li>
        </ol>
        <p className="text-ink-muted text-sm">
          If you no longer have access to the app, email us at{" "}
          <a href="mailto:support@ikhtiar.app" className="text-gold hover:underline font-semibold">
            support@ikhtiar.app
          </a>{" "}
          with your registered email address and we will delete your account within 30 days.
        </p>
      </div>

      {/* Link to FAQ */}
      <div className="text-center">
        <p className="text-ink-muted text-sm mb-4">Looking for general questions about how Ikhtiar works?</p>
        <Link
          href="/help"
          className="inline-block border border-gold text-gold font-semibold px-6 py-3 rounded-xl hover:bg-gold hover:text-white transition-colors text-sm"
        >
          Visit the Help & FAQ page
        </Link>
      </div>
    </div>
  );
}
