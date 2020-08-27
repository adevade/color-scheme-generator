let mix = require("laravel-mix");

mix
  .copy("src/views/index.html", "index.html")
  .js("src/js/app.js", "dist/")
  .postCss("src/css/app.css", "dist/", [
    require("tailwindcss"),
    require("autoprefixer"),
  ]);
