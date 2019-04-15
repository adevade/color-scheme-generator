let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.setPublicPath('dist/')
    .copy('src/views/index.html', 'index.html')
    .js('src/js/app.js', 'dist/')
    .postCss('src/css/app.css', 'dist/', [tailwindcss()])
    .purgeCss({folders: ['src']});
