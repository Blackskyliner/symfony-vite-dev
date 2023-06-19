import type { OutputChunk } from "rollup";
import type { ResolvedConfig } from "vite";

export const viteBaseConfig = {
  root: "/home/me/project-dir",
  base: "/build/",
} as unknown as ResolvedConfig;

export const pageImports = {
  type: "chunk",
  facadeModuleId: "/home/me/project-dir/assets/page/imports/index.js",
  fileName: "assets/pageImports-53eb9fd1.js",
  name: "pageImports",
  isEntry: true,
  imports: [],
  viteMetadata: {
    importedCss: new Set(),
    importedAssets: new Set(),
  },
  code: 'console.log("welcome.js !");\n',
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const asyncDepChunk = {
  type: "chunk",
  facadeModuleId: "/home/me/project-dir/assets/lib/async-dep.js",
  fileName: "assets/async-dep-e2ac9f96.js",
  name: "async-dep",
  isEntry: false,
  imports: [],
  viteMetadata: {
    importedCss: new Set(),
    importedAssets: new Set(),
  },
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const indexCss = {
  fileName: "assets/index-aa7c8190.css",
  name: "index.css",
  needsCodeReference: false,
  source: "body {}",
  type: "asset",
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const themeScssChunk = {
  facadeModuleId: "/home/me/project-dir/assets/theme.scss",
  fileName: "assets/theme-!~{001}~.js",
  name: "theme",
  isEntry: true,
  needsCodeReference: false,
  source: "body {}",
  type: "chunk",
  modules: {
    "/home/me/project-dir/assets/theme.scss": "INFOS",
  },
  viteMetadata: {
    importedCss: new Set(["assets/theme-44b5be96.css"]),
    importedAssets: new Set(),
  },
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const themeCss = {
  fileName: "assets/theme-44b5be96.css",
  name: "theme.css",
  needsCodeReference: false,
  source: "body {}",
  type: "asset",
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const welcomeJs = {
  type: "chunk",
  facadeModuleId: "/home/me/project-dir/assets/page/welcome/index.js",
  fileName: "assets/welcome-1e67239d.js",
  name: "welcome",
  isEntry: true,
  imports: [],
  viteMetadata: {
    importedCss: new Set(),
    importedAssets: new Set(),
  },
  code: 'console.log("welcome.js !");\n',
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const welcomeLegacyJs = {
  type: "chunk",
  facadeModuleId: "/home/me/project-dir/assets/page/welcome/index.js",
  fileName: "assets/welcome-legacy-64979d13.js",
  name: "welcome",
  isEntry: true,
  imports: [],
  viteMetadata: {
    importedCss: new Set(),
    importedAssets: new Set(),
  },
  code: 'console.log("welcome.js !");\n',
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const legacyPolyfills = {
  type: "chunk",
  facadeModuleId: "vite/legacy-polyfills",
  fileName: "assets/polyfills-legacy-40963d34.js",
  name: "polyfills",
  isEntry: true,
  imports: [],
  viteMetadata: {
    importedCss: new Set(),
    importedAssets: new Set(),
  },
  code: 'console.log("welcome.js !");\n',
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const pageAssets = {
  type: "chunk",
  facadeModuleId: "/home/me/project-dir/assets/page/assets/index.js",
  fileName: "assets/pageAssets-05cfe79c.js",
  name: "pageAssets",
  isEntry: true,
  imports: [],
  viteMetadata: {
    importedCss: new Set(["assets/index-aa7c8190.css"]),
    importedAssets: new Set(["assets/logo-d015cc3f.png"]),
  },
  code: 'console.log("welcome.js !");\n',
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };

export const logoPng = {
  fileName: "assets/logo-d015cc3f.png",
  name: "logo.png",
  needsCodeReference: false,
  source: "Content",
  type: "asset",
} as unknown as OutputChunk & { viteMetadata: ChunkMetadata };
