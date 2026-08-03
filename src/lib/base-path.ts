// Debe coincidir con el basePath configurado en next.config.ts.
// Con images.unoptimized = true, next/image no antepone el basePath
// automáticamente a los assets de /public, así que lo hacemos a mano.
const basePath = process.env.GITHUB_ACTIONS === "true" ? "/loma-landing-page-next" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
