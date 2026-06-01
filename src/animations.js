import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  
  // 1. Loading Screen Animation
  const tl = gsap.timeline();
  
  tl.to('#loading-logo', {
    opacity: 1,
    duration: 0.8,
    ease: "power2.inOut"
  })
  .to('#loading-logo', {
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power2.inOut"
  })
  .to('#loading-screen', {
    yPercent: -100,
    duration: 0.8,
    ease: "power4.inOut"
  })
  // 2. Hero Reveal
  .from('.hero-anim', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: "power4.out"
  }, "-=0.4");

  // 3. Mouse Follow Image Reveal for Portfolio
  const items = document.querySelectorAll('.portfolio-item');
  const revealImg = document.getElementById('reveal-img');

  if (revealImg && window.innerWidth > 768) {
    
    // Follow Mouse
    document.addEventListener('mousemove', (e) => {
      gsap.to(revealImg, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    });

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const imgUrl = item.getAttribute('data-img');
        if(imgUrl) {
          revealImg.src = imgUrl;
        }
      });
    });
  }

}
