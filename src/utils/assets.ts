export const publicAsset = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}${normalizedPath}`;
};

export const localImg = (filename: string): string => publicAsset(`img/${filename}`);
export const businessIcon = publicAsset("icon/logo.jpeg");
export const heroImg = localImg("IMG_0049.jpg");
