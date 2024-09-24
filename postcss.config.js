module.exports = {
    plugins: [
        /* https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports */
        'postcss-import',
        /* https://tailwindcss.com/docs/using-with-preprocessors#nesting */
        'tailwindcss/nesting',
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            /* https://tailwindcss.com/docs/using-with-preprocessors#future-css-features */
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009',
                    grid: 'autoplace',
                },
                stage: 3,
                features: {
                    'custom-properties': true,
                    'gap-properties': true,
                    'nesting-rules': false,
                },
            },
        ],
    ],
}
