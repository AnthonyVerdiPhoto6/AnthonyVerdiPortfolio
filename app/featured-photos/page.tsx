import SiteHeader from "../../components/site-header";
import FeaturedPhotosGallery from "../../components/featured-photos-gallery";
import SiteFooter from "../../components/site-footer";
import { getImageKitImages } from "../../lib/imagekit-assets";

export const revalidate = 300;

async function getFeaturedPhotos() {
  return getImageKitImages("/main-photos");
}

export default async function FeaturedPhotosPage() {
  const photos = await getFeaturedPhotos();

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_52%_80%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(135deg,#050505_0%,#121212_34%,#2a2a2a_54%,#0b0b0b_72%,#000000_100%)] text-white">
      <SiteHeader />

      <section className="relative px-6 pb-10 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-[0.72rem] uppercase tracking-[0.38em] text-white/60">
              Portfolio
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Featured Photos
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              A selection of live music and concert photography.
            </p>
          </div>

          {photos.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] px-6 py-10 text-white/70 backdrop-blur-md">
              No photos were found in ImageKit.
            </div>
          ) : (
            <FeaturedPhotosGallery photos={photos} />
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
