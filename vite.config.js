const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
// const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";   // GitHub
const base = "/"; // Netlify

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
  },
};
