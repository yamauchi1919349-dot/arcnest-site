"use client";

import { useEffect, useRef, useState } from "react";

const QUOTES = [
  {
    english:
      "I've found my work — have something which I live for heart and soul and which gives inspiration and meaning to life.",
    japanese:
      "私は自分の仕事を見つけた。\n心から生きるためのもの、\n人生に意味とひらめきを与えてくれるものを。"
  },
  {
    english: "The sight of the stars always makes me dream.",
    japanese: "星を見ると、\n私はいつも夢を見ずにはいられない。"
  },
  {
    english:
      "By fighting the difficulties in which one finds oneself, an inner strength develops from within our heart.",
    japanese:
      "目の前の困難と向き合うことで、\n心の奥から新しい強さが育っていく。"
  },
  {
    english:
      "If one is competent in one thing and understands one thing well, one gains insight into many other things.",
    japanese:
      "ひとつのことを深く理解すれば、\nそこから多くのことが見えるようになる。"
  }
];

const QUOTE_INTERVAL_MS = 12000;
const FADE_MS = 1100;

function getRandomQuoteIndex() {
  return Math.floor(Math.random() * QUOTES.length);
}

export default function PhilosophyVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      if (mediaQuery.matches) {
        videoRef.current?.pause();
      } else {
        videoRef.current?.play().catch(() => undefined);
      }
    };

    setQuoteIndex(getRandomQuoteIndex());
    setIsReady(true);
    syncMotionPreference();

    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setIsVisible(false);

      fadeTimeoutRef.current = setTimeout(() => {
        setQuoteIndex((currentIndex) => (currentIndex + 1) % QUOTES.length);
        setIsVisible(true);
      }, FADE_MS);
    }, QUOTE_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  const quote = QUOTES[quoteIndex];

  return (
    <section className="video-philosophy-section" id="flow" aria-label="Philosophy">
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        className="video-philosophy-media"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/philosophy-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-philosophy-overlay" aria-hidden="true" />
      <div
        className={`video-philosophy-content ${isReady && isVisible ? "is-visible" : ""}`}
        aria-live="polite"
      >
        <p className="van-gogh-english">{quote.english}</p>
        <p className="van-gogh-japanese">{quote.japanese}</p>
        <p className="van-gogh-author">Vincent van Gogh</p>
      </div>
    </section>
  );
}
