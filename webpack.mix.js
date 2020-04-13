let mix = require("laravel-mix");

let purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["src/**/*.html", "src/**/*.js"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

mix
  .copy("src/views/index.html", "index.html")
  .js("src/js/app.js", "dist/")
  .postCss("src/css/app.css", "dist/", [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]);
