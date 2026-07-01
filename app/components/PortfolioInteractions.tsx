"use client";

import { useEffect } from "react";

export default function PortfolioInteractions() {
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    const progress = document.getElementById("scrollProgress");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const hamburger = document.getElementById("hamburger");
    const navLinksEl = document.getElementById("navLinks");
    const navBrand = document.querySelector<HTMLElement>(".nav-brand");
    const heroSection = document.getElementById("hero");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const interactiveSelector = "a, button, .btn, .hamburger, input, textarea, select, [role='button']";

    // Brand starts hidden — hero is visible on page load
    navBrand?.classList.add("hidden");

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer) return;
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.documentElement.classList.add("custom-cursor-ready");
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (!finePointer) return;
      const target = event.target instanceof Element ? event.target : null;
      document.documentElement.classList.toggle(
        "custom-cursor-hover",
        Boolean(target?.closest(interactiveSelector))
      );
    };

    const handlePointerLeaveWindow = () => {
      document.documentElement.classList.remove("custom-cursor-ready", "custom-cursor-hover");
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;

      if (progress) {
        progress.style.transform = `scaleX(${docH > 0 ? scrollY / docH : 0})`;
      }

      nav?.classList.toggle("scrolled", scrollY > 40);

      let current = "";
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 120) current = section.id;
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    };

    const handleMenuClick = () => navLinksEl?.classList.toggle("open");
    const closeMenu = () => navLinksEl?.classList.remove("open");

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeaveWindow);
    hamburger?.addEventListener("click", handleMenuClick);
    navLinksEl?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Show nav brand only when hero section is completely out of viewport
    let heroObserver: IntersectionObserver | null = null;
    if (navBrand && heroSection) {
      heroObserver = new IntersectionObserver(
        ([entry]) => {
          navBrand.classList.toggle("hidden", entry.isIntersecting);
        },
        { threshold: 0 }
      );
      heroObserver.observe(heroSection);
    }


    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll<HTMLElement>(".fade-up, .timeline-item, .achievement-item").forEach((el, i) => {
      if (el.classList.contains("timeline-item") || el.classList.contains("achievement-item")) {
        el.style.transitionDelay = `${i * 0.08}s`;
      }
      revealObserver.observe(el);
    });

    // Portfolio video hover — play on enter, pause+reset on leave
    type VideoHandler = { card: HTMLElement; enter: () => void; leave: () => void };
    const videoHandlers: VideoHandler[] = [];
    document.querySelectorAll<HTMLElement>(".portfolio-card").forEach((card) => {
      const video = card.querySelector<HTMLVideoElement>("video");
      if (!video) return;
      const enter = () => { video.play().catch(() => {}); };
      const leave = () => { video.pause(); video.currentTime = 0; };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      videoHandlers.push({ card, enter, leave });
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeaveWindow);
      document.documentElement.classList.remove("custom-cursor-ready", "custom-cursor-hover");
      hamburger?.removeEventListener("click", handleMenuClick);
      navLinksEl?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
      heroObserver?.disconnect();
      revealObserver.disconnect();
      videoHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-ring" aria-hidden="true" />
      <div className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
