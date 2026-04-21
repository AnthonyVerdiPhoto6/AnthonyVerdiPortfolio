import fs from "fs/promises";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

const ALBUM_DISPLAY_NAMES: Record<string, string> = {
  dababy: "DaBaby",
  "fka-twigs": "FKA Twigs",
  "jid-yung-nudy": "JID & Yung Nudy",
  "lorde-2hollis": "Lorde & 2hollis",
  tokischa: "Tokischa",
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

function isImageFile(fileName: string) {
  return IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
}

function sortNaturally(values: string[]) {
  return values.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function publicPath(...segments: string[]) {
  return "/" + segments.map((segment) => encodeURIComponent(segment)).join("/");
}

function cleanAltText(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim();
}

function getArtistsRoot() {
  return path.join(
    process.cwd(),
    "public",
    "portfolio-assets",
    "photos",
    "artists"
  );
}

export async function getAlbums(): Promise<AlbumSummary[]> {
  const artistsRoot = getArtistsRoot();

  try {
    const entries = await fs.readdir(artistsRoot, { withFileTypes: true });

    const albumFolders = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);

    const albums = await Promise.all(
      albumFolders.map(async (folderName) => {
        const albumPath = path.join(artistsRoot, folderName);
        const files = sortNaturally(await fs.readdir(albumPath));
        const imageFiles = files.filter(isImageFile);

        if (imageFiles.length === 0) return null;

        const slug = slugify(folderName);

return {
  name: ALBUM_DISPLAY_NAMES[slug] ?? folderName,
  slug,
  coverSrc: publicPath(
    "portfolio-assets",
    "photos",
    "artists",
    folderName,
    imageFiles[0]
  ),
  photoCount: imageFiles.length,
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
    console.error("Could not load albums:", error);
    return [];
  }
}

export async function getAlbumBySlug(
  slug: string
): Promise<AlbumDetail | null> {
  const artistsRoot = getArtistsRoot();

  try {
    const entries = await fs.readdir(artistsRoot, { withFileTypes: true });

    const match = entries.find(
      (entry) => entry.isDirectory() && slugify(entry.name) === slug
    );

    if (!match) return null;

    const albumPath = path.join(artistsRoot, match.name);
    const files = sortNaturally(await fs.readdir(albumPath));
    const imageFiles = files.filter(isImageFile);

    return {
  name: ALBUM_DISPLAY_NAMES[slug] ?? match.name,
  slug,
  photos: imageFiles.map((fileName) => ({
    src: publicPath(
      "portfolio-assets",
      "photos",
      "artists",
      match.name,
      fileName
    ),
    alt: cleanAltText(fileName),
  })),
};
  } catch (error) {
    console.error("Could not load album:", error);
    return null;
  }
}