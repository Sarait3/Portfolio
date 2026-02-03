import { useEffect, useRef } from "react";

export default function useReveal(options = {}) {
  const elementsRef = useRef([]);
  const ioRef = useRef(null);
  const startedRef = useRef(false);

  const setRef = (el) => {
    if (!el) return;
    if (!elementsRef.current.includes(el)) elementsRef.current.push(el);
  };

  useEffect(() => {
    const els = elementsRef.current.filter(Boolean);
    if (!els.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("reveal--show"));
      return;
    }

    const revealIfInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;

      els.forEach((el) => {
        if (el.classList.contains("reveal--show")) return;

        const r = el.getBoundingClientRect();
        const inView = r.top < vh * 0.92 && r.bottom > vh * 0.08;

        if (inView) {
          const delay = el.getAttribute("data-delay");
          if (delay) el.style.transitionDelay = `${delay}ms`;

          requestAnimationFrame(() => {
            el.classList.add("reveal--show");
          });
        }
      });
    };

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      els.forEach((el) => el.classList.add("reveal"));

      ioRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = `${delay}ms`;

            requestAnimationFrame(() => {
              el.classList.add("reveal--show");
            });

            ioRef.current?.unobserve(el);
          });
        },
        {
          threshold: options.threshold ?? 0.15,
          rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
        }
      );

      els.forEach((el) => ioRef.current?.observe(el));

      requestAnimationFrame(() => {
        revealIfInView();
      });
    };

    const isIntroDone =
      window.__INTRO_DONE__ === true || sessionStorage.getItem("intro_seen") === "1";

    if (isIntroDone) {
      start();
    } else {
      window.addEventListener("intro:done", start, { once: true });
    }

    const onVis = () => {
      if (document.visibilityState !== "visible") return;

      if (!startedRef.current) {
        const doneNow =
          window.__INTRO_DONE__ === true || sessionStorage.getItem("intro_seen") === "1";
        if (doneNow) start();
        return;
      }

      requestAnimationFrame(() => {
        revealIfInView();
      });

      els.forEach((el) => {
        if (!el.classList.contains("reveal--show")) ioRef.current?.observe(el);
      });
    };

    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("intro:done", start);
      document.removeEventListener("visibilitychange", onVis);
      ioRef.current?.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return { setRef };
}
