// import path from "path";
const isGitHubPages = true;

/* I'm using a different folder name in my local workspace */
// const folderName = path.basename(process.cwd()) + "/";
const folderName = "frontendmentor-news-homepage";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default {
  root: "src",
  server: {
    mimeTypes: {
      "application/font-woff": ["woff"],
      "application/font-woff2": ["woff2"],
      "application/x-font-opentype": ["otf"],
      "application/x-font-truetype": ["ttf"],
      "font/opentype": ["otf"],
      "font/ttf": ["ttf"],
      "font/woff": ["woff"],
      "font/woff2": ["woff2"],
    },
  },
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
