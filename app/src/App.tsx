import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SpecialProgram from './components/SpecialProgram';
import Course from './components/Course';
import Team from './components/Team';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, []);

  const handleNavigate = useCallback((target: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -80 });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative">
      <Navigation onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <Services />
      <SpecialProgram onNavigate={handleNavigate} />
      <Course />
      <Team />
      <Process />
      <Reviews />
      <Footer />
    </div>
  );
}
