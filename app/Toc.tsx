"use client";

import { useEffect, useRef } from "react";

const links = [
  { href: "#the-idea", label: "The idea" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#usage", label: "Usage" },
  { href: "#install", label: "Install" },
];

export default function Toc() {
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tocLinks = tocRef.current?.querySelectorAll("a");
    if (!tocLinks) return;

    const sections = Array.from(tocLinks).map((a) =>
      document.querySelector(a.getAttribute("href")!)
    );

    function onScroll() {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      let active = sections[0];
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollY) {
          active = section;
        }
      }
      if (atBottom) active = sections[sections.length - 1];
      tocLinks!.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + active?.id);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll("h2, .divider, .code-block, .usage-examples, .callout")
      .forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });

    document.querySelectorAll(".step").forEach((el, i) => {
      el.classList.add("reveal");
      (el as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="toc" aria-label="On this page" ref={tocRef}>
      <div className="toc-image">
        <img src="/kaizen/hero.jpg" alt="" aria-hidden="true" />
      </div>
      {links.map(({ href, label }) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </div>
  );
}
