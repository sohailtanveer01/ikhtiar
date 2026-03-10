import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ikhtiar — Complete Your Half Deen",
};

const features = [
  {
    icon: "💛",
    title: "Serious Intentions Only",
    description:
      "Every profile on Ikhtiar is here for one reason — to find a life partner. No casual connections, no timewasters.",
  },
  {
    icon: "🛡️",
    title: "Wali / Chaperone Support",
    description:
      "Invite a Wali to oversee your journey. They can monitor conversations and support the process — just as it should be.",
  },
  {
    icon: "🎓",
    title: "Marriage Foundations Course",
    description:
      "Complete our Islamic marriage foundations course and earn a certificate that shows you're ready for commitment.",
  },
  {
    icon: "👁️",
    title: "Blur My Photos",
    description:
      "Your photos stay blurred until you express interest. Only people you like can see your full profile.",
  },
  {
    icon: "✅",
    title: "Verified Community",
    description:
      "Our moderation process ensures a safe, respectful environment for every member of the community.",
  },
  {
    icon: "🤝",
    title: "Compatible Matching",
    description:
      "Answer questions about your values, deen, and lifestyle to get matched with truly compatible Muslims.",
  },
];

const faqs = [
  {
    q: "Is Ikhtiar free to use?",
    a: "Yes, Ikhtiar offers a free tier with essential features. Premium features may be available in the future.",
  },
  {
    q: "How do I invite a Wali?",
    a: "Go to Settings → Wali / Chaperone and enter your Wali's email address. They'll receive an invitation to join and oversee your account.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We use industry-standard encryption and never sell your data to third parties. Read our Privacy Policy for full details.",
  },
  {
    q: "Can I hide my profile temporarily?",
    a: 'Yes. In Settings, tap "Take a Break" to hide your profile from other users. You can reactivate anytime by logging back in.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 pt-24 pb-28 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-semibold">Now available on iOS & Android</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-tight tracking-tight mb-6">
            Complete Your{" "}
            <br />
            <span className="text-gold">Half Deen</span>
          </h1>

          <p className="text-ink-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Ikhtiar is a halal Muslim matrimonial app built for serious Muslims who are ready to take the next step — with intention, dignity, and Islamic values at the core.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base shadow-lg shadow-gold/20"
            >
              Download on App Store
            </a>
            <a
              href="#"
              className="w-full sm:w-auto bg-cream-dark hover:bg-cream-border text-ink font-bold px-8 py-4 rounded-2xl transition-colors text-base border border-cream-border"
            >
              Get it on Google Play
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "10K+", label: "Members" },
              { value: "4.8★", label: "App Rating" },
              { value: "100%", label: "Halal" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-gold">{value}</p>
                <p className="text-ink-faint text-sm mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-cream-border max-w-6xl mx-auto" />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">Why Ikhtiar</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Built differently. For Muslims.
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto leading-relaxed">
            Every feature was designed with Islamic principles in mind — so you can search for your partner with confidence and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-cream-border rounded-2xl p-6 hover:shadow-md hover:shadow-gold/10 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-ink font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-cream-border max-w-6xl mx-auto" />

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">How it Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Simple. Intentional. Halal.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: "01", title: "Sign Up", desc: "Create your profile with your values, lifestyle, and what you're looking for." },
            { step: "02", title: "Complete Course", desc: "Finish the Marriage Foundations course to show you're serious about commitment." },
            { step: "03", title: "Swipe & Match", desc: "Browse compatible profiles. Photos are blurred until you like someone." },
            { step: "04", title: "Talk & Meet", desc: "Chat with your Wali present, meet the family, and pursue niqah with intention." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-sm flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-ink font-semibold mb-2">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-cream-border max-w-6xl mx-auto" />

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white border border-cream-border rounded-2xl p-6">
              <h3 className="text-ink font-semibold mb-2">{faq.q}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/help"
            className="text-gold font-semibold hover:underline text-sm"
          >
            View all FAQs →
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gold rounded-3xl px-8 py-14 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Ready to begin?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete your half deen, the halal way.
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
            Download Ikhtiar today and take the first step toward a blessed marriage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto bg-white text-gold font-bold px-8 py-3.5 rounded-xl hover:bg-cream-dark transition-colors">
              App Store
            </a>
            <a href="#" className="w-full sm:w-auto bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/30 transition-colors">
              Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
