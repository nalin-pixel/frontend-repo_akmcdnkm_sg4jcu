import { CheckCircle, LineChart, Sparkles } from 'lucide-react';

const brand = {
  primary: '#009640',
  secondary: '#E3262E',
};

const topics = [
  'Gold + US-Oil Trading Setup',
  'Gold Scalping Strategy',
  'Swing Trade Techniques',
  'Demand & Supply Zone Trading',
  'Risk Management Essentials',
  'Trading with Gold Biscuit',
  'GOLD SMC Strategy',
  'GOLD Moonlight Strategy',
  'GOLD Sunrise Scalper',
];

const addons = [
  'Dedicated Telegram Group with Personal Trade Support',
  'Doubt-Clearing Sessions every 30–45 Days (Lifetime)',
  'Lifetime Support & Free ALGO Updates',
];

export default function AlgoProgram() {
  return (
    <section id="fx-gold-algo" className="relative bg-white text-black dark:bg-zinc-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center gap-2">
          <LineChart className="text-[color:#009640]" />
          <h2 className="text-3xl font-bold md:text-4xl">Introducing FX GOLD ALGO — Trade Smarter. Trade Fearlessly.</h2>
        </div>
        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
          A refined algorithm and mentorship system built for consistency. Learn to navigate Gold and Oil with clarity, risk control, and rules that stand through market cycles.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
            <h3 className="mb-4 text-xl font-semibold">Core Topics</h3>
            <ul className="space-y-3">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 text-[color:#009640]" size={18} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
            <h3 className="mb-4 text-xl font-semibold">Add-Ons</h3>
            <ul className="space-y-3">
              {addons.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 text-yellow-500" size={18} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500" style={{ background: `linear-gradient(135deg, ${brand.primary}, #16a34a)` }}>
              Join FX Gold Algo Now
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(0,150,64,0.08)] to-transparent dark:from-[rgba(0,150,64,0.12)]" />
    </section>
  );
}
