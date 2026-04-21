import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/site-header";
import FeaturedPhotosGallery from "../../../components/featured-photos-gallery";
import { getAlbumBySlug, getAlbums } from "../../../lib/albums";
import SiteFooter from "../../../components/site-footer";

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((album) => ({ slug: album.slug }));
}

export default async function AlbumDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const album = await getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_16%_14%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.04),transparent_18%),radial-gradient(circle_at_52%_78%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(140deg,#050505_0%,#101010_28%,#262626_52%,#0b0b0b_76%,#000000_100%)] text-white">
      <SiteHeader />

      <section className="px-6 pb-10 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
  href="/albums"
  className="inline-flex items-center rounded-full border border-white/12 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.3em] text-white/72 transition hover:scale-[1.02] hover:border-white/20 hover:text-white"
>
  Back to Albums
</Link>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {album.name}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            A full gallery from this set.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <FeaturedPhotosGallery photos={album.photos} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}