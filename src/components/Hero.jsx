import Spline from '@splinetool/react-spline';
import { ArrowRight, Phone, TrendingUp, LineChart } from 'lucide-react';

const brand = {
  primary: '#009640',
  secondary: '#E3262E',
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient + glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(600px 300px at 20% 10%, rgba(0,150,64,0.25), transparent), radial-gradient(500px 250px at 80% 20%, rgba(227,38,46,0.20), transparent)'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-16">
        {/* Top brand bar */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md" style={{ background: `linear-gradient(135deg, ${brand.primary}, #0f4d2d)` }} />
          <div className="text-xl font-semibold tracking-wide">Trading <span className="text-[color:#009640]">KATTA</span></div>
        </div>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <TrendingUp size={16} className="text-[color:#009640]" />
              Master Forex & Gold with AI-driven strategies
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              You will become a Pro —
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[color:#009640] to-emerald-300">then Money will Flow.</span>
            </h1>

            <p className="mt-5 max-w-xl text-white/80">
              Learn, Trade, Earn — with India’s trusted trading mentor Yogesh Mande. Lifetime mentorship, refined FX GOLD ALGO, and a community that grows together.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#fx-gold-algo" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
                 style={{ background: `linear-gradient(135deg, ${brand.primary}, #16a34a)` }}>
                <LineChart size={18} />
                Explore FX Gold Algo
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
                <Phone size={18} />
                Get in Touch
              </a>
            </div>
          </div>

          {/* Decorative line chart */}
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-xl opacity-40 blur-2xl" style={{ background: `radial-gradient(circle, ${brand.primary}, transparent 60%)` }} />
            <svg viewBox="0 0 600 400" className="w-full drop-shadow-[0_0_20px_rgba(0,150,64,0.35)]">
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <path d="M0,300 C80,260 120,320 200,280 C260,250 310,300 380,260 C450,220 500,260 600,220" fill="none" stroke="url(#gold)" strokeWidth="4" />
              <g fill="#facc15">
                <circle r="5" cx="120" cy="320" />
                <circle r="5" cx="310" cy="300" />
                <circle r="5" cx="500" cy="260" />
              </g>
            </svg>
            <p className="mt-4 text-sm text-white/70">Lightweight visual showing the market’s upward rhythm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
