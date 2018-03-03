let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
let postCssImport = require('postcss-import');
let postCssNested = require('postcss-nested');
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
            postCssNested(),
            tailwind('tailwind.js'),
        ]
    });

if (! mix.inProduction()) {
    mix.browserSync({
        files: [
            '**/*.js',
            '**/*.css',
            '*.html',
        ],
        notify: false,
        proxy: 'easy-color-scheme-designer.localhost',
    });
}
