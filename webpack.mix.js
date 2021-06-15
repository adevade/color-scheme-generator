let mix = require("laravel-mix");

mix
  .copy("src/views/index.html", "index.html")
  .postCss("src/css/app.css", "dist/", [
    require("autoprefixer"),
    require("tailwindcss"),
  ]);
