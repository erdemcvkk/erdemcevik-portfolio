import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  
  // 1. Loading Screen Animation (Hızlı ve kullanıcıyı yormayan)
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

  // 3. Scroll Reveal for Sections
  const sections = gsap.utils.toArray('section:not(:first-child)');
  
  sections.forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });

}
