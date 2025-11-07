import { Users, Youtube, Instagram, Send } from 'lucide-react';

const stats = [
  { label: 'YouTube Subscribers', value: '150K+' , icon: Youtube, color: 'text-red-500'},
  { label: 'Telegram Members', value: '45K+' , icon: Send, color: 'text-sky-400'},
  { label: 'Instagram Followers', value: '180K+' , icon: Instagram, color: 'text-pink-500'},
  { label: 'Students Trained', value: '2450+' , icon: Users, color: 'text-emerald-500'},
];

export default function StatsSocial() {
  return (
    <section className="relative bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-md backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                </div>
                <Icon className={`${color}`} />
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-500 to-emerald-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(0,0,0,0.04)] to-transparent dark:from-[rgba(255,255,255,0.05)]" />
    </section>
  );
}
