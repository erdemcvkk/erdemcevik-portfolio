import Lenis from 'lenis';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  
  // Smooth Scroll Initialization (Lenis)
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

  // Video Hover Logic
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const video = card.querySelector('.project-video');
    
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.play().catch(e => console.log("Video play error:", e));
      });
      
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Başa sar
      });
    }
  });

  // Initialize GSAP Animations
  initAnimations();

});
