let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
let postCssImport = require('postcss-import');
require('laravel-mix-purgecss');

mix.setPublicPath('dist/')
    .js('src/js/app.js', 'dist/')
    .postCss('src/css/app.css', 'dist/')
    .purgeCss({
        globs: [
            '*.html',
        ],
    })
    .options({
        postCss: [
            postCssImport(),
            tailwind('tailwind.js'),
        ]
    });
