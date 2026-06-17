export const basePath = "/tiawanbuyway";

export const siteOrigin = "https://bgo17888.github.io";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
