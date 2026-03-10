import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & FAQ",
  description: "Find answers to common questions about Ikhtiar — the halal Muslim matrimonial app.",
};

const sections = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "How do I create an account?",
        a: "Download Ikhtiar from the App Store or Google Play, then tap 'Continue with Email', 'Continue with Google', or 'Continue with Apple'. Follow the onboarding steps to complete your profile.",
      },
      {
        q: "Is Ikhtiar free to use?",
        a: "Yes, Ikhtiar is free to download and use. Core features including swiping, matching, and messaging are available at no cost.",
      },
      {
        q: "What information do I need to provide?",
        a: "You'll need to provide your first and last name, gender, date of birth, at least one photo, and answer a few questions about your values and lifestyle to help us find compatible matches.",
      },
      {
        q: "Can I sign up without a phone number?",
        a: "Yes. You can sign up using your email address, Google account, or Apple ID. No phone number is required.",
      },
    ],
  },
  {
    title: "Privacy & Safety",
    faqs: [
      {
        q: "Who can see my photos?",
        a: "By default your photos are visible to other users. If you enable 'Blur My Photos' in Settings, your photos will be blurred for everyone except people you have already liked.",
      },
      {
        q: "How do I hide my profile temporarily?",
        a: "Go to Settings → 'Take a Break'. Your profile will be hidden from the swipe stack. You can reactivate your account at any time by logging back in.",
      },
      {
        q: "How do I block or report someone?",
        a: "Open the user's profile and tap the flag icon in the top-right corner. You can report inappropriate content or block the user. Our moderation team reviews all reports within 24 hours.",
      },
      {
        q: "Is my personal data sold to third parties?",
        a: "Never. Your personal data is never sold to advertisers or third parties. Read our Privacy Policy for full details on how we handle your information.",
      },
    ],
  },
  {
    title: "Wali / Chaperone Feature",
    faqs: [
      {
        q: "What is a Wali on Ikhtiar?",
        a: "A Wali (guardian/chaperone) is a trusted person — typically a family member — who you invite to oversee your profile and conversations on Ikhtiar. This is an optional feature designed for those who want a more Islamically guided experience.",
      },
      {
        q: "How do I invite a Wali?",
        a: "Go to Settings → Wali / Chaperone, enter your Wali's email address, and send the invitation. Your Wali will receive an email with a link to create their account and accept the invitation.",
      },
      {
        q: "What can my Wali see?",
        a: "Your Wali can view your matches and read your conversations in a read-only mode. They cannot send messages on your behalf.",
      },
      {
        q: "Can I remove my Wali?",
        a: "Yes. Go to Settings → Wali / Chaperone and tap 'Remove Wali'. The Wali link will be revoked immediately.",
      },
      {
        q: "What if my Wali doesn't have a smartphone?",
        a: "The Wali invitation is sent via email. Your Wali will need to create an Ikhtiar account on a smartphone to accept the invitation and access their dashboard.",
      },
    ],
  },
  {
    title: "Matching & Messaging",
    faqs: [
      {
        q: "How does matching work?",
        a: "When you and another user both swipe right on each other, it creates a match and unlocks the ability to message each other.",
      },
      {
        q: "Can I see who liked me?",
        a: "You can see your likes in the Likes tab. Mutual likes unlock a full chat.",
      },
      {
        q: "Is there a limit to how many people I can like per day?",
        a: "Free users have a daily like limit that resets every 24 hours.",
      },
      {
        q: "Can I unmatch someone?",
        a: "Yes. Open the chat with that person and tap the settings icon at the top right, then select 'Unmatch'. This will remove the match and the conversation.",
      },
    ],
  },
  {
    title: "Marriage Foundations Course",
    faqs: [
      {
        q: "What is the Marriage Foundations course?",
        a: "It's a short educational course within the app covering Islamic principles of marriage, communication, expectations, and rights of spouses. Completing it earns you a certificate displayed on your profile.",
      },
      {
        q: "Is the course mandatory?",
        a: "No, the course is optional. However, completing it and earning the certificate signals to potential matches that you are serious and prepared for marriage.",
      },
      {
        q: "How long does the course take?",
        a: "The course consists of several short modules that can be completed in under an hour total. You can complete them at your own pace.",
      },
    ],
  },
  {
    title: "Account Management",
    faqs: [
      {
        q: "How do I delete my account?",
        a: "Go to Settings → Delete Account. Your account and all associated data will be permanently deleted. This action cannot be undone.",
      },
      {
        q: "I forgot my password / can't log in. What do I do?",
        a: "If you signed up with email, tap 'Continue with Email' on the login screen and we'll send a one-time verification code to your email address. No password is required.",
      },
      {
        q: "How do I update my profile?",
        a: "Tap the Profile tab at the bottom of the app, then tap 'Edit Profile' to update your photos, bio, and profile details.",
      },
      {
        q: "Can I change the email address on my account?",
        a: "Go to Settings → Account Information to view and update your email address.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Help Center</p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">How can we help?</h1>
        <p className="text-ink-muted text-lg max-w-lg mx-auto leading-relaxed">
          Find answers to the most common questions about Ikhtiar below. Can&apos;t find what you&apos;re looking for?{" "}
          <a href="mailto:support@ikhtiar.app" className="text-gold hover:underline font-semibold">
            Email our support team.
          </a>
        </p>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-ink mb-5 pb-3 border-b border-cream-border">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white border border-cream-border rounded-2xl p-6"
                >
                  <h3 className="text-ink font-semibold mb-2 text-[15px]">{faq.q}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Banner */}
      <div className="mt-16 bg-gold/10 border border-gold/20 rounded-2xl p-8 text-center">
        <p className="text-ink font-bold text-lg mb-2">Still need help?</p>
        <p className="text-ink-muted text-sm mb-6">
          Our support team is available Monday–Friday, 9am–6pm. We aim to respond within 24 hours.
        </p>
        <a
          href="mailto:support@ikhtiar.app"
          className="inline-block bg-gold text-white font-semibold px-6 py-3 rounded-xl hover:bg-gold-light transition-colors"
        >
          Email support@ikhtiar.app
        </a>
      </div>
    </div>
  );
}
