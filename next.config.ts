import type { NextConfig } from "next";

// Nombre del repositorio en GitHub (usado como subruta en usuario.github.io/<repo>)
const repoName = "loma-landing-page";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;
