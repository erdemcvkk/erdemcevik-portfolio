import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  
  // 1. Loading Screen Animation
  const tl = gsap.timeline();
  
  tl.to('#loading-logo', {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  })
  .to('#loading-logo', {
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "power2.inOut"
  })
  .to('#loading-screen', {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut"
  })
  // 2. Hero Reveal
  .from('.hero-anim', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
  }, "-=0.5");

  // 3. Scroll Animations for About Section
  gsap.from('#about h3', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from('.glassmorphism', {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 70%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

  // 4. Parallax effect for Project Cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const img = card.querySelector('img');
    
    gsap.to(img, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      ease: 'none'
    });
  });

}
