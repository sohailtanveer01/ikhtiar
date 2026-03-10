"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-cream-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
            <span className="text-white text-sm font-bold">I</span>
          </div>
          <span className="text-ink font-bold text-lg tracking-tight">Ikhtiar</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/help" className="text-ink-muted hover:text-gold transition-colors text-sm font-medium">
            Help & FAQ
          </Link>
          <Link href="/terms" className="text-ink-muted hover:text-gold transition-colors text-sm font-medium">
            Terms
          </Link>
          <Link href="/privacy" className="text-ink-muted hover:text-gold transition-colors text-sm font-medium">
            Privacy
          </Link>
          <a
            href="mailto:support@ikhtiar.app"
            className="bg-gold text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gold-light transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream-border bg-cream px-6 py-4 flex flex-col gap-4">
          <Link href="/help" onClick={() => setOpen(false)} className="text-ink-muted font-medium">Help & FAQ</Link>
          <Link href="/terms" onClick={() => setOpen(false)} className="text-ink-muted font-medium">Terms of Service</Link>
          <Link href="/privacy" onClick={() => setOpen(false)} className="text-ink-muted font-medium">Privacy Policy</Link>
          <a
            href="mailto:support@ikhtiar.app"
            className="bg-gold text-white font-semibold px-4 py-2.5 rounded-xl text-center"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
