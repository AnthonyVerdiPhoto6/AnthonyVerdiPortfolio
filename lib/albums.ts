import { getImageKitFolders, getImageKitImages } from "./imagekit-assets";

const ARTISTS_FOLDER = "/artists";

const ALBUM_DISPLAY_NAMES: Record<string, string> = {
  dababy: "DaBaby",
  "fka-twigs": "FKA Twigs",
  "jid-yung-nudy": "JID & Yung Nudy",
  "lorde-2hollis": "Lorde & 2hollis",
  tokischa: "Tokischa",
  "baby-keem": "Baby Keem",
  pinkpantheress: "PinkPantheress"
  "asap-rocky": "Asap Rocky",
};

export type AlbumSummary = {
  name: string;
  slug: string;
  coverSrc: string;
  photoCount: number;
};

export type AlbumDetail = {
  name: string;
  slug: string;
  photos: {
    src: string;
    alt: string;
  }[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAlbumDisplayName(slug: string, folderName: string) {
  return ALBUM_DISPLAY_NAMES[slug] ?? folderName;
}

export async function getAlbums(): Promise<AlbumSummary[]> {
  try {
    const folders = await getImageKitFolders(ARTISTS_FOLDER);

    const albums = await Promise.all(
      folders.map(async (folder) => {
        const slug = slugify(folder.name);
        const photos = await getImageKitImages(folder.path);

        if (photos.length === 0) return null;

        return {
          name: getAlbumDisplayName(slug, folder.name),
          slug,
          coverSrc: photos[0].src,
          photoCount: photos.length,
        };
      })
    );

    return albums
      .filter((album): album is AlbumSummary => album !== null)
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      );
  } catch (error) {
    console.error("Could not load albums from ImageKit:", error);
    return [];
  }
}

export async function getAlbumBySlug(
  slug: string
): Promise<AlbumDetail | null> {
  try {
    const folders = await getImageKitFolders(ARTISTS_FOLDER);

    const match = folders.find((folder) => slugify(folder.name) === slug);

    if (!match) return null;

    const photos = await getImageKitImages(match.path);

    if (photos.length === 0) return null;

    return {
      name: getAlbumDisplayName(slug, match.name),
      slug,
      photos,
    };
  } catch (error) {
    console.error("Could not load album from ImageKit:", error);
    return null;
  }
}

export const getAlbum = getAlbumBySlug;
