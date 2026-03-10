import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ikhtiar Terms of Service — please read these terms carefully before using the app.",
};

const EFFECTIVE_DATE = "March 1, 2025";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-ink mb-3">Terms of Service</h1>
        <p className="text-ink-faint text-sm">Effective date: {EFFECTIVE_DATE}</p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-ink-muted leading-relaxed">

        <section>
          <p>
            Welcome to Ikhtiar (&ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By downloading, accessing, or using Ikhtiar, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully. If you do not agree, do not use the App.
          </p>
        </section>

        {[
          {
            title: "1. Eligibility",
            body: `You must be at least 18 years old to use Ikhtiar. By creating an account, you represent and warrant that you are 18 years of age or older and that you have the legal capacity to enter into a binding agreement. We reserve the right to request proof of age at any time.`,
          },
          {
            title: "2. Purpose of the App",
            body: `Ikhtiar is a Muslim matrimonial platform designed to facilitate serious, halal connections between Muslims who are seeking marriage. The App is not intended for casual dating, entertainment, or any purpose other than finding a marriage partner in accordance with Islamic values. Use of the App for any other purpose is a violation of these Terms.`,
          },
          {
            title: "3. Account Registration",
            body: `You must provide accurate, complete, and up-to-date information when creating your account. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately at support@ikhtiar.app if you suspect unauthorized access to your account. We reserve the right to terminate or suspend accounts that contain false or misleading information.`,
          },
          {
            title: "4. User Conduct",
            body: `By using Ikhtiar, you agree not to:\n\n• Post content that is false, misleading, offensive, harassing, sexually explicit, or otherwise inappropriate.\n• Impersonate any person or entity.\n• Solicit money, personal financial information, or gifts from other users.\n• Use the App for any commercial or promotional purpose without our prior written consent.\n• Attempt to access another user's account.\n• Reverse-engineer, scrape, or copy any part of the App.\n• Engage in any conduct that violates applicable laws or regulations.\n\nWe reserve the right to remove any content and suspend or terminate any account that violates these rules, at our sole discretion.`,
          },
          {
            title: "5. Profile Content",
            body: `All photos and information you upload to your profile must be accurate and represent you. You must not upload photos of other people without their consent, stock images, or images that are misleading. By uploading content, you grant Ikhtiar a non-exclusive, royalty-free, worldwide license to display that content within the App for the purpose of providing the service.`,
          },
          {
            title: "6. Wali / Chaperone Feature",
            body: `The Wali/Chaperone feature is an optional service that allows users to invite a trusted guardian to monitor their activity on the App in read-only mode. By inviting a Wali, you consent to that person viewing your matches and conversations. The Wali may not send messages, like profiles, or take any action on your behalf. Both the user and the Wali must comply with these Terms.`,
          },
          {
            title: "7. Privacy",
            body: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal data. By using Ikhtiar, you agree to our Privacy Policy, which is incorporated into these Terms by reference.`,
          },
          {
            title: "8. Intellectual Property",
            body: `All content, trademarks, logos, and software within Ikhtiar are the exclusive property of Ikhtiar or its licensors. You may not copy, modify, distribute, or create derivative works from any part of the App without our prior written permission.`,
          },
          {
            title: "9. Disclaimers",
            body: `Ikhtiar is provided on an "as is" and "as available" basis. We do not guarantee that:\n\n• The App will be uninterrupted, error-free, or secure.\n• Any matches or connections made through the App will result in marriage or any other outcome.\n• Information provided by other users is accurate or truthful.\n\nWe are not responsible for the conduct of any user, online or offline.`,
          },
          {
            title: "10. Limitation of Liability",
            body: `To the fullest extent permitted by law, Ikhtiar and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) the App, even if we have been advised of the possibility of such damages.`,
          },
          {
            title: "11. Termination",
            body: `We reserve the right to suspend or terminate your account at any time, without notice, if we believe you have violated these Terms or if we decide to discontinue the App. You may also delete your account at any time through Settings → Delete Account. Upon termination, your right to use the App ceases immediately.`,
          },
          {
            title: "12. Changes to These Terms",
            body: `We may update these Terms from time to time. When we do, we will revise the effective date at the top of this page. Continued use of the App after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.`,
          },
          {
            title: "13. Governing Law",
            body: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Ikhtiar operates, without regard to its conflict of law provisions.`,
          },
          {
            title: "14. Contact",
            body: `If you have any questions about these Terms, please contact us at:\n\nsupport@ikhtiar.app`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-ink mb-3">{section.title}</h2>
            {section.body.split("\n\n").map((para, i) => (
              <p key={i} className="mb-3 text-sm leading-relaxed whitespace-pre-line">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
