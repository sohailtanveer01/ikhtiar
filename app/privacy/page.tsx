import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ikhtiar Privacy Policy — how we collect, use, and protect your personal data.",
};

const EFFECTIVE_DATE = "March 1, 2025";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-ink mb-3">Privacy Policy</h1>
        <p className="text-ink-faint text-sm">Effective date: {EFFECTIVE_DATE}</p>
      </div>

      <div className="space-y-8 text-ink-muted leading-relaxed text-sm">

        <section>
          <p>
            At Ikhtiar, we take your privacy seriously. This Privacy Policy explains what personal data we collect, how we use it, who we share it with, and what rights you have. By using the Ikhtiar app or website (collectively, the &ldquo;Service&rdquo;), you agree to the practices described in this policy.
          </p>
        </section>

        {[
          {
            title: "1. Information We Collect",
            body: `We collect the following types of information:\n\n**Information you provide directly:**\n• Account information: name, email address, date of birth, gender.\n• Profile information: photos, bio, lifestyle preferences, Islamic practice details.\n• Communications: messages you send to other users through the App.\n• Support requests: messages you send to our support team.\n\n**Information collected automatically:**\n• Device information: device type, operating system, unique device identifiers.\n• Usage data: features you use, pages you view, swipes, matches.\n• Log data: IP address, access times, app crashes.\n\n**Information from third parties:**\n• If you sign in with Google or Apple, we receive your name, email address, and profile photo from that provider.`,
          },
          {
            title: "2. How We Use Your Information",
            body: `We use your personal data to:\n\n• Create and manage your account.\n• Provide and improve the matchmaking service.\n• Display your profile to other users.\n• Enable messaging between matched users.\n• Send you app notifications and important service updates.\n• Respond to your support requests.\n• Detect, prevent, and address fraud, abuse, and safety issues.\n• Comply with legal obligations.\n\nWe do not use your data for automated profiling that produces legal effects, and we do not serve third-party advertising.`,
          },
          {
            title: "3. How We Share Your Information",
            body: `We do not sell your personal data. We share your data only in the following limited circumstances:\n\n• **Other users:** Your profile (name, photos, preferences) is visible to other registered users of the App in accordance with your privacy settings.\n• **Wali / Chaperone:** If you invite a Wali, they can view your matches and conversations in read-only mode.\n• **Service providers:** We work with trusted third-party providers (e.g., cloud hosting, push notifications, analytics) who process data strictly on our behalf under data processing agreements.\n• **Legal requirements:** We may disclose your data if required by law, court order, or to protect the rights, property, or safety of Ikhtiar, our users, or the public.\n• **Business transfers:** If Ikhtiar is acquired or merges with another company, your data may be transferred as part of that transaction. We will notify you via email or in-app notice before such a transfer.`,
          },
          {
            title: "4. Data Retention",
            body: `We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal, regulatory, or legitimate business purposes (e.g., to resolve disputes or comply with legal obligations).`,
          },
          {
            title: "5. Security",
            body: `We implement industry-standard security measures including encryption in transit (TLS) and at rest, access controls, and regular security reviews. However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security and encourage you to use strong, unique credentials.`,
          },
          {
            title: "6. Children's Privacy",
            body: `Ikhtiar is not intended for users under 18 years of age. We do not knowingly collect personal data from anyone under 18. If we learn that we have collected personal data from a minor, we will delete it immediately. If you believe a minor has created an account, please contact us at support@ikhtiar.app.`,
          },
          {
            title: "7. Your Rights",
            body: `Depending on your location, you may have the following rights regarding your personal data:\n\n• **Access:** Request a copy of the personal data we hold about you.\n• **Correction:** Request that we correct inaccurate or incomplete data.\n• **Deletion:** Request that we delete your personal data. You can also do this directly by deleting your account in Settings.\n• **Portability:** Request that we export your data in a machine-readable format.\n• **Objection:** Object to certain processing of your data.\n\nTo exercise any of these rights, contact us at support@ikhtiar.app. We will respond within 30 days.`,
          },
          {
            title: "8. Cookies & Tracking",
            body: `The Ikhtiar website (ikhtiar.app) may use cookies and similar technologies to improve your browsing experience and understand how visitors use the site. You can disable cookies through your browser settings. The Ikhtiar mobile app does not use cookies but may use device identifiers for crash reporting and analytics.`,
          },
          {
            title: "9. Third-Party Services",
            body: `Our Service integrates with third-party services including:\n\n• **Supabase** (database and authentication)\n• **Google / Apple** (OAuth sign-in)\n• **Expo / Apple Push Notification Service / Firebase Cloud Messaging** (push notifications)\n\nEach of these services has its own privacy policy. We encourage you to review them.`,
          },
          {
            title: "10. International Data Transfers",
            body: `Ikhtiar operates globally and your data may be processed in countries outside your own. We ensure that any such transfers comply with applicable data protection laws and that appropriate safeguards are in place.`,
          },
          {
            title: "11. Changes to This Policy",
            body: `We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page and, where the changes are significant, notify you via email or in-app notification. Continued use of the Service after changes are posted constitutes your acceptance of the updated policy.`,
          },
          {
            title: "12. Contact Us",
            body: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:\n\nsupport@ikhtiar.app`,
          },
        ].map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold text-ink mb-3">{section.title}</h2>
            {section.body.split("\n\n").map((para, i) => {
              // Handle bold markers
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="mb-3 leading-relaxed whitespace-pre-line">
                  {parts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold text-ink">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
}
