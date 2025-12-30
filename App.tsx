import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhatsAppHub from './components/WhatsAppHub';
import CommunityConcierge from './components/CommunityConcierge';
import SocialGrid from './components/SocialGrid';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import Footer from './components/Footer';
import BrandMarquee from './components/BrandMarquee';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col w-full bg-[#020617]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-radial-gradient(circle at 50%, 10, b981 15%, transparent 60%)">
        </div>
        <div className="absolute top-10 left-5 w-60vw h-60vw bg-emerald-600/10 rounded-full blur-[140px] animate-blob"></div>
        <div className="absolute bottom-10 right-5 w-60vw h-60vw bg-blue-600/5 rounded-full blur-[140px] animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg group-hover:scale-110 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
                VIANET
              </span>
              <span className="text-9px font-black text-emerald-500 uppercase tracking-0.3em mt-1.5 leading-none">
                Tech Gifting Hub
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-11px font-black text-slate-400 uppercase tracking-0.3em">
              <a href="#hub" className="hover:text-emerald-400 transition-colors">
                Communities
              </a>
              <a href="#social" className="hover:text-emerald-400 transition-colors">
                Social
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="w-px h-5 bg-white/10"></div>
            <a
              href="https://bit.ly/4chu43O"
              target="_blank"
              className="bg-emerald-500 text-slate-950 px-8 py-3 rounded-xl font-black text-11px tracking-widest hover:bg-emerald-400 transition-all uppercase shadow-lg shadow-emerald-500/20"
            >
              CATALOGUES LINK
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full relative z-10">
        <div className="pt-28">
          <BrandMarquee />
        </div>

        <Hero />

        <section id="hub" className="py-20">
          <WhatsAppHub />
        </section>

        <section className="py-20">
          <CommunityConcierge />
        </section>

        <section id="social" className="py-20">
          <SocialGrid />
        </section>

        <section className="py-20">
          <ReviewSection />
        </section>

        <section id="contact" className="py-20">
          <ContactSection />
        </section>

        <div className="pb-24">
          <BrandMarquee reverse />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
