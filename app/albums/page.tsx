import Link from "next/link";
import SiteHeader from "../../components/site-header";
import { getAlbums } from "../../lib/albums";
import SiteFooter from "../../components/site-footer";

export default async function AlbumsPage() {
  const albums = await getAlbums();

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_16%_14%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_52%_78%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(140deg,#050505_0%,#101010_28%,#262626_52%,#0b0b0b_76%,#000000_100%)] text-white">
      <SiteHeader />

      <section className="px-6 pb-14 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.38em] text-white/58">
            Albums
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Selected Artist Galleries
          </h1>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {albums.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-10 text-white/70 backdrop-blur-md">
              No albums were found in{" "}
              <span className="text-white/90">
                public/portfolio-assets/photos/artists
              </span>
              .
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {albums.map((album, index) => {
                const isLast = index === albums.length - 1;
                const isOdd = albums.length % 2 !== 0;

                return (
                  <Link
                    key={album.slug}
                    href={`/albums/${album.slug}`}
                    className={`group relative block min-h-[24rem] overflow-hidden rounded-[2rem] ${
                      isOdd && isLast
                        ? "lg:col-span-2 lg:mx-auto lg:w-full lg:max-w-[42rem]"
                        : ""
                    }`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={album.coverSrc}
                        alt={album.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      />
                    </div>

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.08)_22%,rgba(0,0,0,0.38)_56%,rgba(0,0,0,0.72)_100%)] transition duration-500 group-hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0.10)_20%,rgba(0,0,0,0.34)_52%,rgba(0,0,0,0.66)_100%)]" />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.28)_0%,rgba(20,20,20,0.10)_38%,rgba(0,0,0,0.44)_100%)]" />

                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <div>
                        

                        <h2 className="text-3xl font-semibold tracking-tight text-white transition duration-500 group-hover:scale-[1.08] sm:text-4xl md:text-5xl">
                          {album.name}
                        </h2>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}