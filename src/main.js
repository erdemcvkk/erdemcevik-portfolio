import Lenis from 'lenis';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // Custom Cursor Logic
  const cursor = document.querySelector('.custom-cursor');
  const hoverTargets = document.querySelectorAll('.hover-target, a, button');

  if (cursor && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    hoverTargets.forEach(target => {
      target.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      target.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  // Smooth Scroll Initialization (Lenis) - Studio Freight Style
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Sert ama akıcı
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1.2,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Initialize GSAP Animations
  initAnimations();

});
