import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('js-reveal');

    const elements = Array.from(
      document.querySelectorAll('.reveal-on-scroll')
    );

    if (elements.length === 0) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    requestAnimationFrame(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('is-visible');
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return <main className="layout-root">{children}</main>;
}
