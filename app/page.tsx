\import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="intro-page">
      <div className="hero-media">
        <Image
          src="https://ik.imagekit.io/ql5llyrpx/hero/hero-01.JPG?updatedAt=1777502162316"
          alt="Anthony Verdi concert photography hero image"
          fill
          priority
          className="hero-image"
        />
      </div>

      <div className="hero-overlay overlay-one" />
      <div className="hero-overlay overlay-two" />
      <div className="hero-overlay overlay-three" />

      <section className="intro-content-wrap">
        <div className="intro-content">
          <div className="intro-wordmark-wrap">
            <p className="intro-wordmark">Anthony Verdi</p>
            <div className="intro-wordmark-line" />
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
    </main>
  );
}
