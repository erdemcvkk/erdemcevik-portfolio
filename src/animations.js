import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  
  // 1. Loading Screen Animation
  const tl = gsap.timeline();
  
  tl.to('#loading-screen', {
    yPercent: -100,
    duration: 0.8,
    delay: 0.5,
    ease: "power4.inOut"
  })
  // 2. Hero Reveal
  .from('.hero-anim', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  }, "-=0.2");

  // 3. Scroll Reveal for Sections (Gritty / Quick Scale)
  const sections = gsap.utils.toArray('.section-anim');
  
  sections.forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
      scale: 0.98,
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.2)" // Hafif sekme etkisi
    });
  });

}
