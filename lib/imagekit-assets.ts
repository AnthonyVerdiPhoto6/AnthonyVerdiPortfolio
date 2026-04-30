<<<<<<< HEAD
const IMAGEKIT_URL_ENDPOINT =
  process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/ql5llyrpx";

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

type ImageKitAsset = {
  type: "file" | "folder";
  name: string;
  url?: string;
  filePath?: string;
  folderPath?: string;
};

function getImageKitAuthHeader() {
  if (!IMAGEKIT_PRIVATE_KEY) {
    throw new Error("Missing IMAGEKIT_PRIVATE_KEY in .env.local");
  }

  return `Basic ${Buffer.from(`${IMAGEKIT_PRIVATE_KEY}:`).toString("base64")}`;
}

async function listImageKitAssets(folderPath: string, type: "file" | "folder") {
  const url = new URL("https://api.imagekit.io/v1/files");

  url.searchParams.set("path", folderPath);
  url.searchParams.set("type", type);
  url.searchParams.set("sort", "ASC_NAME");
  url.searchParams.set("limit", "1000");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getImageKitAuthHeader(),
      Accept: "application/json",
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `ImageKit folder read failed: ${response.status} ${message}`
    );
  }

  return response.json() as Promise<ImageKitAsset[]>;
}

export async function getImageKitImages(folderPath: string) {
  const assets = await listImageKitAssets(folderPath, "file");

  return assets
    .filter((asset) =>
      IMAGE_EXTENSIONS.some((ext) => asset.name.toLowerCase().endsWith(ext))
    )
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((asset) => ({
      src: asset.url || `${IMAGEKIT_URL_ENDPOINT}${asset.filePath}`,
      alt: asset.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .trim(),
    }));
}

export async function getImageKitFolders(folderPath: string) {
  const assets = await listImageKitAssets(folderPath, "folder");

  return assets
    .filter((asset) => asset.type === "folder")
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((asset) => ({
      name: asset.name,
      path: asset.folderPath || `${folderPath}/${asset.name}`,
    }));
=======
const IMAGEKIT_URL_ENDPOINT =
  process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/ql5llyrpx";

const IMAGEKIT_PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

type ImageKitAsset = {
  type: "file" | "folder";
  name: string;
  url?: string;
  filePath?: string;
  folderPath?: string;
};

function getImageKitAuthHeader() {
  if (!IMAGEKIT_PRIVATE_KEY) {
    throw new Error("Missing IMAGEKIT_PRIVATE_KEY in .env.local");
  }

  return `Basic ${Buffer.from(`${IMAGEKIT_PRIVATE_KEY}:`).toString("base64")}`;
}

async function listImageKitAssets(folderPath: string, type: "file" | "folder") {
  const url = new URL("https://api.imagekit.io/v1/files");

  url.searchParams.set("path", folderPath);
  url.searchParams.set("type", type);
  url.searchParams.set("sort", "ASC_NAME");
  url.searchParams.set("limit", "1000");

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: getImageKitAuthHeader(),
      Accept: "application/json",
    },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `ImageKit folder read failed: ${response.status} ${message}`
    );
  }

  return response.json() as Promise<ImageKitAsset[]>;
}

export async function getImageKitImages(folderPath: string) {
  const assets = await listImageKitAssets(folderPath, "file");

  return assets
    .filter((asset) =>
      IMAGE_EXTENSIONS.some((ext) => asset.name.toLowerCase().endsWith(ext))
    )
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((asset) => ({
      src: asset.url || `${IMAGEKIT_URL_ENDPOINT}${asset.filePath}`,
      alt: asset.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ")
        .trim(),
    }));
}

export async function getImageKitFolders(folderPath: string) {
  const assets = await listImageKitAssets(folderPath, "folder");

  return assets
    .filter((asset) => asset.type === "folder")
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    .map((asset) => ({
      name: asset.name,
      path: asset.folderPath || `${folderPath}/${asset.name}`,
    }));
>>>>>>> 5c3eb179c99861a12846bbafad1bc27209540a99
}