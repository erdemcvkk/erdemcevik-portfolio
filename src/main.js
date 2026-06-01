import Lenis from 'lenis';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // Smooth Scroll Initialization (Lenis) - Kullanıcı odaklı daha temiz kaydırma
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Initialize GSAP Animations
  initAnimations();

});
