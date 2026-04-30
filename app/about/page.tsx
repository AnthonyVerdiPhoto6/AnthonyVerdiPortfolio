import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import SiteHeader from "../../components/site-header";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";
import SiteFooter from "../../components/site-footer";
import ContactForm from "../../components/contact-form";

const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const labelFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const services = [
  "Live show coverage",
  "Festival recap galleries",
  "Behind-the-scenes coverage",
  "Candid artist portraits",
  "Live photo editing",
];



export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_16%_14%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_52%_78%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(140deg,#050505_0%,#101010_28%,#262626_52%,#0b0b0b_76%,#000000_100%)] text-white">
      <SiteHeader />

      <section className="px-6 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p
            className={`${labelFont.className} mb-4 text-[0.72rem] uppercase tracking-[0.38em] text-white/58`}
          >
            About
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Anthony Verdi
          </h1>

          <p
            className={`${bodyFont.className} mt-5 max-w-3xl text-[1.35rem] leading-10 text-white/78 sm:text-[1.55rem]`}
          >
            Concert and live music photographer based in Tampa, Florida and the
            DC/Baltimore area. Available for travel.
          </p>
        </div>
      </section>

      <section className="px-6 pb-18 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
          <div className="w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
            <div className="absolute" />
            <Image
              src="https://ik.imagekit.io/ql5llyrpx/about-me/anthony-photo-01.jpg?updatedAt=1777502192857"
              alt="Anthony Verdi at a music festival"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-4xl">
            <div
              className={`${bodyFont.className} space-y-8 text-[1.35rem] leading-[1.9] text-white/80 sm:text-[1.55rem] lg:text-[1.7rem]`}
            >
              <p>
                My name is Anthony Verdi, and I am a concert and live music
                photographer based in Tampa, Florida and the DC/Baltimore area.
                My passion for live music drives my work. Having tracked and
                attended over 50 concerts and festivals over the past few years,
                I understand the raw energy of a live show from both the
                crowd&apos;s and the photographer&apos;s perspective.
              </p>

              <p>
                I specialize in capturing high-energy moments and delivering
                polished, professional edits that highlight the dynamic lighting
                and emotion of a set. I have photographed and edited live
                performances for various major artists and genres, including FKA
                Twigs, Lorde, 2hollis, and DaBaby.
              </p>

              <p>
                Whether I&apos;m shooting in a stadium, at a festival, or in an
                intimate club, my goal is to capture the defining moments of a
                performance. Let&apos;s connect for your next tour or event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p
            className={`${labelFont.className} mb-4 text-[0.72rem] uppercase tracking-[0.38em] text-white/58`}
          >
            Services
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
  What I offer
</h2>

<div className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
  {services.map((service) => (
    <p
      key={service}
      className={`${bodyFont.className} border-b border-white/10 pb-3 text-[1.08rem] leading-8 text-white/78 sm:text-[1.18rem]`}
    >
      {service}
    </p>
  ))}
</div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl space-y-10">
    <div>
      <p
        className={`${labelFont.className} mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-white/56`}
      >
        Turnaround
      </p>
      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Fast delivery built for live music coverage
      </h3>
      <p
        className={`${bodyFont.className} mt-3 max-w-4xl text-[1.08rem] leading-8 text-white/74 sm:text-[1.18rem]`}
      >
        High-resolution, color-graded Lightroom edits delivered within 24
        to 48 hours of the set.
      </p>
    </div>

    <div>
      <p
        className={`${labelFont.className} mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-white/56`}
      >
        Travel
      </p>
      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Based in Tampa and the DC/Baltimore area
      </h3>
      <p
        className={`${bodyFont.className} mt-3 max-w-4xl text-[1.08rem] leading-8 text-white/74 sm:text-[1.18rem]`}
      >
        Available for travel for tours, festivals, one-off shows, and
        editorial coverage.
      </p>
    </div>
  </div>
</section>

      <section className="px-6 pb-20 pt-4 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.14)_18%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.14)_82%,rgba(255,255,255,0)_100%)]" />
  </div>

  <div className="mx-auto max-w-7xl">
    <p
      className={`${labelFont.className} mb-4 text-[0.68rem] uppercase tracking-[0.34em] text-white/56`}
    >
      Contact
    </p>

    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
      Let&apos;s work together
    </h2>

    <p
      className={`${bodyFont.className} mt-4 max-w-2xl text-[1.02rem] leading-8 text-white/70 sm:text-[1.12rem]`}
    >
      Reach out for tours, festivals, live show coverage, portraits, or publication work.
    </p>

    <div className="mt-10 max-w-3xl">
      <ContactForm labelFontClass={labelFont.className} />
    </div>
  </div>
</section>
      <SiteFooter />
    </main>
  );
}