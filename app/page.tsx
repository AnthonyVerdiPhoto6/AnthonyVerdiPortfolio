"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";
export default function Home() {
  return (
    <main className="intro-page">
      <div className="hero-media">
        <Image
          src="https://ik.imagekit.io/ql5llyrpx/hero/hero-01.JPG?updatedAt=1777502162316"
          alt="Anthony Verdi concert photography hero image"
          fill
          priority
          className="hero-image opacity-65"
        />
      </div>

      <div className="hero-overlay overlay-one" />
      <div className="hero-overlay overlay-two" />
      <div className="hero-overlay overlay-three" />

      <section className="intro-content-wrap">
        <div className="intro-content">
          <div className="intro-eyebrow-pill">
  <div className="intro-wordmark-wrap">
  <p className="intro-wordmark">Anthony Verdi</p>
  <div className="intro-wordmark-line" />
</div>
</div>

          <h1 className="intro-title">
            Concert and Live Music
            <span>Photographer</span>
          </h1>

          <p className="intro-subtitle">
            Capturing the energy, lighting, and emotion of live performance.
          </p>

          <div className="intro-button-wrap">
            <Link href="/featured-photos" className="intro-button">
              Enter
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .intro-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #000;
          color: white;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          animation: heroZoom 16s ease-out forwards;
          transform: scale(1.02);
        }

        .hero-image {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .overlay-one {
          background:
            radial-gradient(
              circle at center,
              rgba(255, 255, 255, 0.06) 0%,
              rgba(255, 255, 255, 0.02) 18%,
              rgba(0, 0, 0, 0.24) 45%,
              rgba(0, 0, 0, 0.62) 72%,
              rgba(0, 0, 0, 0.84) 100%
            );
          animation: overlayShift 14s ease-in-out infinite alternate;
        }

        .overlay-two {
          background:
            linear-gradient(
              130deg,
              rgba(0, 0, 0, 0.74) 0%,
              rgba(18, 18, 18, 0.42) 34%,
              rgba(80, 80, 80, 0.1) 52%,
              rgba(14, 14, 14, 0.58) 72%,
              rgba(0, 0, 0, 0.86) 100%
            );
        }

        .overlay-three {
          background:
            radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.06), transparent 22%),
            radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.05), transparent 20%),
            radial-gradient(circle at 52% 78%, rgba(255, 255, 255, 0.04), transparent 24%);
        }

        .intro-content-wrap {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
        }

        .intro-content {
          max-width: 52rem;
          text-align: center;
          opacity: 0;
          transform: translateY(28px);
          animation: fadeUp 1.1s ease-out 0.15s forwards;
        }

        .intro-wordmark-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.intro-wordmark {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.42em;
  color: rgba(255, 255, 255, 0.82);
}

.intro-wordmark-line {
  margin-top: 0.9rem;
  height: 1px;
  width: 7rem;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.55) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

        .intro-title {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 600;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: white;
          margin: 0;
        }

        .intro-title span {
          display: block;
        }

        .intro-subtitle {
          max-width: 40rem;
          margin: 1.5rem auto 0;
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
        }

        .intro-button-wrap {
          margin-top: 2.5rem;
          opacity: 0;
          transform: translateY(18px);
          animation:
            fadeUpButton 1s ease-out 0.55s forwards,
            buttonFloat 4.8s ease-in-out 1.7s infinite;
        }

        .intro-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 2.2rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.14) 0%,
              rgba(255, 255, 255, 0.06) 100%
            );
          backdrop-filter: blur(12px);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: white;
          text-decoration: none;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .intro-button:hover {
          transform: scale(1.03);
          border-color: rgba(255, 255, 255, 0.35);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(255, 255, 255, 0.08) 100%
            );
        }

        @keyframes heroZoom {
          0% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1.08);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUpButton {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes overlayShift {
          0% {
            opacity: 0.94;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}
