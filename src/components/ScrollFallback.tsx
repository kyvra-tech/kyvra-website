"use client";

import { useEffect } from "react";

export default function ScrollFallback() {
  useEffect(() => {
    // Check if browser supports CSS scroll-driven animations natively
    if (CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      return; // Browser supports it natively, do nothing
    }

    // 1. Fallback for Parallax (.parallax-bg)
    const parallaxElements = document.querySelectorAll(".parallax-bg");
    if (parallaxElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              window.addEventListener("scroll", onScroll);
            } else {
              window.removeEventListener("scroll", onScroll);
            }
          });
        },
        { threshold: 0 }
      );

      parallaxElements.forEach((el) => observer.observe(el));

      function onScroll() {
        const scrollY = window.scrollY;
        parallaxElements.forEach((el) => {
          const wrapper = (el as HTMLElement).parentElement;
          if (!wrapper) return;
          const wrapperRect = wrapper.getBoundingClientRect();
          const wrapperTop = wrapperRect.top + scrollY;
          const wrapperHeight = wrapperRect.height;
          const windowHeight = window.innerHeight;

          if (
            scrollY >= wrapperTop - windowHeight &&
            scrollY <= wrapperTop + wrapperHeight
          ) {
            const scrollPercent =
              (scrollY - (wrapperTop - windowHeight)) /
              (wrapperHeight + windowHeight);
            
            // Move background up to 30vh based on scroll
            const translateY = (windowHeight * 0.3) * scrollPercent;
            (el as HTMLElement).style.transform = `translateY(${translateY}px)`;
          }
        });
      }
      // Trigger once
      onScroll();
    }

    // 2. Fallback for Scroll Reveal (.scroll-reveal-up, .scroll-scale-in)
    const revealElements = document.querySelectorAll(".scroll-reveal-up, .scroll-scale-in");
    if (revealElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.target.classList.contains("scroll-scale-in")) {
              (entry.target as HTMLElement).style.scale = `${0.9 + entry.intersectionRatio * 0.1}`;
              (entry.target as HTMLElement).style.opacity = `${entry.intersectionRatio}`;
            } else if (entry.target.classList.contains("scroll-reveal-up")) {
              const translateY = 80 * (1 - entry.intersectionRatio);
              (entry.target as HTMLElement).style.transform = `translateY(${translateY}px)`;
              (entry.target as HTMLElement).style.opacity = `${entry.intersectionRatio}`;
            }
          }
        },
        {
          threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0 to 1 in steps of 0.05
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    }
  }, []);

  return null;
}
