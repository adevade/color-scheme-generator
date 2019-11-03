let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix.setPublicPath('dist/')
    .copy('src/views/index.html', 'index.html')
    .js('src/js/app.js', 'dist/')
    .postCss('src/css/app.css', 'dist/', [require('tailwindcss')])
    .purgeCss({folders: ['src']});
