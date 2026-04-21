"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/featured-photos", label: "Featured Photos" },
  { href: "/albums", label: "Albums" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(5,5,5,0.78)_0%,rgba(22,22,22,0.68)_35%,rgba(54,54,54,0.26)_55%,rgba(10,10,10,0.80)_100%)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Link
            href="/featured-photos"
            className="text-[0.8rem] font-medium uppercase tracking-[0.35em] text-white/90 transition hover:text-white"
          >
            Anthony Verdi
          </Link>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-2 sm:gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] transition sm:px-5 sm:text-[0.72rem] ${
                      isActive
                        ? "border border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_100%)] text-white"
                        : "text-white/68 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/from.the_pit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] text-white/76 transition hover:scale-[1.04] hover:text-white"
              >
                <LuInstagram className="text-[1.1rem]" />
              </Link>

              <Link
                href="https://www.tiktok.com/@from_thepit?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] text-white/76 transition hover:scale-[1.04] hover:text-white"
              >
                <FaTiktok className="text-[1.05rem]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}