"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const SOURCES = {
  hd: "/videos/mnzl-oppo-1080.mp4",
  sd: "/videos/mnzl-oppo-720.mp4",
};
const POSTER = "/videos/mnzl-oppo-poster.webp";

export default function ShowcaseVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const userPausedRef = useRef(false);

  // Pick a resolution suited to the screen / connection, and only start
  // fetching the video once the section is close to the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const pickSource = () => {
      const conn = navigator.connection;
      const slow = conn && (conn.saveData || /(^|-)2g|3g/.test(conn.effectiveType || ""));
      const small = window.innerWidth * (window.devicePixelRatio || 1) < 1600;
      return slow || small ? SOURCES.sd : SOURCES.hd;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(pickSource());
          io.disconnect();
        }
      },
      { rootMargin: "100% 0px" }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  // Autoplay (with sound) while visible, pause when scrolled away.
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section || !src) return;

    const tryPlay = async () => {
      if (userPausedRef.current) return;
      try {
        video.muted = false;
        await video.play();
        setMuted(false);
      } catch {
        // Browser blocked sound without a prior user gesture: play muted,
        // then unmute on the first interaction anywhere on the page.
        video.muted = true;
        setMuted(true);
        try {
          await video.play();
        } catch {}
        const unlock = () => {
          video.muted = false;
          setMuted(false);
          if (video.paused && !userPausedRef.current) video.play().catch(() => {});
        };
        ["pointerdown", "keydown", "touchend"].forEach((evt) =>
          window.addEventListener(evt, unlock, { once: true, passive: true })
        );
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.45) tryPlay();
        else if (!video.paused) video.pause();
      },
      { threshold: [0, 0.45, 1] }
    );
    io.observe(section);
    return () => io.disconnect();
  }, [src]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">Featured Campaign</p>
            <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              Mnzl <span className="text-white/40 font-light italic">×</span> OPPO
            </h2>
          </div>
          <p className="text-white/60 text-base sm:text-lg max-w-md font-light leading-relaxed">
            A cinematic creator collaboration — crafted, shot and delivered by Camstar Network.
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden bg-black shadow-[0_30px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10 group">
          <video
            ref={videoRef}
            src={src || undefined}
            poster={POSTER}
            playsInline
            loop
            preload="auto"
            onCanPlay={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onClick={togglePlay}
            className={`absolute inset-0 w-full h-full object-cover cursor-pointer transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-90"}`}
          />

          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            </div>
          )}

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="h-11 sm:h-12 px-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-black/60 transition-colors text-sm font-medium"
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              <span className="hidden sm:inline">{muted ? "Tap for sound" : "Sound on"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
