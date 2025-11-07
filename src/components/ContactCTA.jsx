import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

const brand = {
  primary: '#009640',
};

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-white py-16 text-black dark:bg-zinc-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Start Your Profitable Trading Journey Today!</h2>
            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
              Reach out for course details, mentorship, and brokerage partnerships. Our team will guide you through the next steps.
            </p>

            <div className="mt-8 space-y-4">
              <a href="https://wa.me/918989765858" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-emerald-600 hover:underline">
                <MessageCircle /> WhatsApp: +91 89897 65858
              </a>
              <a href="mailto:support@theinfokatta.com" className="flex items-center gap-3 text-emerald-600 hover:underline">
                <Mail /> support@theinfokatta.com
              </a>
              <p className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                <MapPin className="mt-1" /> 3rd Floor, Office No. 9, Navale Bypass Road, Heights, Pune, Maharashtra 411046
              </p>
            </div>
          </div>

          <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-zinc-600 dark:text-zinc-300">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900" />
              </div>
              <div>
                <label className="text-sm text-zinc-600 dark:text-zinc-300">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900" />
              </div>
              <div>
                <label className="text-sm text-zinc-600 dark:text-zinc-300">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-zinc-600 dark:text-zinc-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"></textarea>
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500" style={{ background: `linear-gradient(135deg, ${brand.primary}, #16a34a)` }}>
              Send Message <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(0,150,64,0.06)] to-transparent" />
    </section>
  );
}
