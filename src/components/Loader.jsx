"use client";

import { useEffect, useRef, useState } from "react";

const MIN_DURATION = 1200; // ms – avoid a flash on fast connections
const MAX_DURATION = 6000; // ms – never trap the user on slow connections

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const targetRef = useRef(0);

  // Track real loading progress (images + fonts + window load).
  useEffect(() => {
    window.scrollTo(0, 0);
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    let done = false;

    const imgs = Array.from(document.images);
    const total = imgs.length + 2; // + fonts + window load
    let count = 0;
    const bump = () => {
      count += 1;
      targetRef.current = Math.max(targetRef.current, Math.min(95, (count / total) * 100));
    };

    imgs.forEach((img) => {
      if (img.complete) bump();
      else {
        img.addEventListener("load", bump, { once: true });
        img.addEventListener("error", bump, { once: true });
      }
    });
    (document.fonts?.ready ?? Promise.resolve()).then(bump);

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_DURATION - (performance.now() - start));
      setTimeout(() => {
        targetRef.current = 100;
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = setTimeout(finish, MAX_DURATION);

    return () => {
      clearTimeout(fallback);
      window.removeEventListener("load", finish);
    };
  }, []);

  // Smoothly ease the displayed number toward the real target.
  useEffect(() => {
    let raf;
    let p = 0;
    const tick = () => {
      const t = targetRef.current;
      p = Math.min(t, p + Math.max(0.4, (t - p) * 0.08));
      setProgress(p);
      if (p >= 100) {
        setLoaded(true);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // The "Enter" click is a user gesture, which lets the browser play the
  // showcase video with sound later on.
  const enter = () => {
    setExiting(true);
    document.documentElement.style.overflow = "";
    window.__lenis?.start();
    window.dispatchEvent(new Event("camstar:entered"));
    setTimeout(() => setGone(true), 900);
  };

  if (gone) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col items-center justify-center transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
        exiting ? "-translate-y-full opacity-100" : "translate-y-0"
      }`}
    >
      <img
        src="/images/logo.jpeg"
        alt="Camstar Network"
        className="h-14 sm:h-16 w-auto rounded-xl mb-10 animate-pulse"
        fetchPriority="high"
      />

      <div className="w-56 sm:w-72 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-white origin-left"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>

      <div className="h-16 mt-6 flex items-center justify-center">
        {loaded ? (
          <button
            onClick={enter}
            autoFocus
            className="inline-flex items-center justify-center h-12 px-10 bg-white text-[#0C0C0C] rounded-full text-sm font-semibold tracking-[0.2em] uppercase hover:scale-105 transition-transform animate-[loaderFadeIn_0.5s_ease-out]"
          >
            Enter
          </button>
        ) : (
          <span className="text-white/60 text-sm tabular-nums tracking-[0.3em]">
            {Math.round(progress)}%
          </span>
        )}
      </div>
    </div>
  );
}
