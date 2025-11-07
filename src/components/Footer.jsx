import { Instagram, Send, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 text-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md" style={{ background: 'linear-gradient(135deg, #009640, #0f4d2d)' }} />
              <span className="text-lg font-semibold">Trading KATTA</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Learn & Trade Like a Pro. Lifetime mentorship with AI-backed FX GOLD ALGO.</p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
            {['Home','About Us','Courses','Contact','Privacy Policy','Terms & Conditions','Refund Policy'].map((link) => (
              <a key={link} href="#" className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300">{link}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Telegram" className="rounded-full border border-zinc-300 p-2 hover:border-emerald-500 dark:border-zinc-700">
              <Send />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-zinc-300 p-2 hover:border-emerald-500 dark:border-zinc-700">
              <Instagram />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full border border-zinc-300 p-2 hover:border-emerald-500 dark:border-zinc-700">
              <Youtube />
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>© 2025 Trading KATTA | All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-5 rounded-sm" style={{ background: 'linear-gradient(90deg, #00732F 33%, #FFFFFF 33%, #FFFFFF 66%, #FF0000 66%)' }} />
            <span>UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
