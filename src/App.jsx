import Hero from './components/Hero';
import AlgoProgram from './components/AlgoProgram';
import StatsSocial from './components/StatsSocial';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <AlgoProgram />
      <StatsSocial />
      <ContactCTA />
      <Footer />

      {/* Floating CTA & WhatsApp */}
      <a href="#fx-gold-algo" className="fixed bottom-6 left-1/2 -translate-x-1/2 transform rounded-full px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:left-auto md:right-6" style={{ background: 'linear-gradient(135deg, #009640, #16a34a)' }}>
        Join FX GOLD ALGO
      </a>
      <a href="https://wa.me/918989765858" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:bg-emerald-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor"><path d="M19.11 17.18c-.28-.14-1.65-.82-1.9-.91-.26-.1-.45-.14-.64.14-.19.27-.73.91-.9 1.1-.17.18-.33.21-.61.07-.28-.14-1.2-.44-2.3-1.4-.85-.76-1.42-1.7-1.59-1.98-.17-.27-.02-.42.13-.56.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49l-.55-.01c-.19 0-.49.07-.75.35-.26.27-1 1-1 2.45 0 1.45 1.03 2.85 1.17 3.05.14.19 2.02 3.08 4.88 4.32.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.33-.06-.12-.26-.19-.54-.33z"/><path d="M26.88 5.12C24.17 2.4 20.7 1 16.99 1 9.62 1 3.67 6.95 3.67 14.32c0 2.49.65 4.92 1.88 7.06L3 31l9.86-2.59c2.09 1.14 4.45 1.74 6.85 1.74h.01c7.37 0 13.32-5.95 13.33-13.32.01-3.56-1.37-7.04-4.08-9.75zM16.72 28.7h-.01c-2.22 0-4.39-.6-6.28-1.73l-.45-.27-5.85 1.54 1.56-5.7-.29-.47c-1.18-1.93-1.8-4.15-1.8-6.39 0-6.82 5.55-12.37 12.38-12.37 3.3 0 6.4 1.29 8.73 3.62 2.33 2.33 3.61 5.43 3.6 8.73-.01 6.83-5.56 12.39-12.36 12.39z"/></svg>
      </a>
    </div>
  );
}

export default App;
