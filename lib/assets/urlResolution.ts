/**
 * Pure URL resolution for public assets (Strategy-style decomposition).
 * Single source of truth for basePath + asset folder rules.
 */
const ASSET_BASE_PATH = '/dar-el-meamar-landing';

export function isExternalImagePath(path: string): boolean {
  return path.startsWith('http');
}

export function isRootedPublicPath(path: string): boolean {
  return path.startsWith('/');
}

/** External URLs pass through unchanged. */
export function resolveExternalPath(path: string): string | null {
  return isExternalImagePath(path) ? path : null;
}

/** Paths already starting with `/` get basePath prepended. */
export function resolveRootedPublicPath(path: string): string | null {
  if (!isRootedPublicPath(path)) return null;
  return `${ASSET_BASE_PATH}${path}`;
}

/** Bare filenames resolve under `/assets` with basePath. */
export function resolveRelativeAssetPath(path: string): string {
  return `${ASSET_BASE_PATH}/assets/${path}`;
}

export function resolvePublicImageUrl(path: string): string {
  return (
    resolveExternalPath(path) ??
    resolveRootedPublicPath(path) ??
    resolveRelativeAssetPath(path)
  );
}
