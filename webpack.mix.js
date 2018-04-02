let mix = require('laravel-mix');
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
            require('tailwindcss')('tailwind.js'),
        ]
    });
