"use client";
import { useEffect, useState } from 'react';
import { LenisContext } from './LenisContext';
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from 'next/navigation';

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const newLenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(newLenis);
    window.lenis = newLenis; // Attach to window for global access if needed

    // Sync Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    newLenis.on('scroll', ScrollTrigger.update);

    function update(time) {
      newLenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(update);
      newLenis.destroy();
      setLenis(null);
      if (window.lenis === newLenis) {
        delete window.lenis;
      }
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export default LenisProvider;