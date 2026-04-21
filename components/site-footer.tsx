import Link from "next/link";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.03),transparent_18%),linear-gradient(135deg,rgba(8,8,8,0.92)_0%,rgba(28,28,28,0.84)_42%,rgba(56,56,56,0.24)_58%,rgba(10,10,10,0.94)_100%)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-sm text-white/58">
          © 2026 Anthony Verdi / From The Pit. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="https://www.instagram.com/from.the_pit/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] text-white/72 transition hover:scale-[1.04] hover:text-white"
          >
            <LuInstagram className="text-[1.1rem]" />
          </Link>

          <Link
            href="https://www.tiktok.com/@from_thepit?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] text-white/72 transition hover:scale-[1.04] hover:text-white"
          >
            <FaTiktok className="text-[1.05rem]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}