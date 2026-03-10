import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-dark border-t border-cream-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <span className="text-white text-sm font-bold">I</span>
              </div>
              <span className="text-ink font-bold text-lg">Ikhtiar</span>
            </div>
            <p className="text-ink-faint text-sm leading-relaxed">
              A halal Muslim matrimonial app designed to help you find your life partner the right way — safe, serious, and Shariah-conscious.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-ink font-semibold mb-4 text-sm uppercase tracking-widest">Support</p>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-ink-muted hover:text-gold transition-colors text-sm">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:support@ikhtiar.app" className="text-ink-muted hover:text-gold transition-colors text-sm">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-ink font-semibold mb-4 text-sm uppercase tracking-widest">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-ink-muted hover:text-gold transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink-muted hover:text-gold transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-faint text-sm">
            © {new Date().getFullYear()} Ikhtiar. All rights reserved.
          </p>
          <p className="text-ink-faint text-sm">
            Made with ❤️ for the Muslim community
          </p>
        </div>
      </div>
    </footer>
  );
}
