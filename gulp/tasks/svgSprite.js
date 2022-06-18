import svgSprite from 'gulp-svg-sprite';

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SVG",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(svgSprite({
                mode: {
                    // defs: {
                    //     sprite: `../icons/icons-defs.svg`,
                    //     example: true,
                    //     bust: false,
                    //     render: {
                    //         css: true // Activate Sass output (with default options)
                    //     }
                    // },
                    symbol: {
                        sprite: `../icons/icons-symbol.svg`,
                        example: true,
                        bust: false,
                        render: {
                            scss: {
                                dest: '../../../src/scss/_svg-sprite.scss',
                            } // Activate Sass output (with default options)
                        }
                    },
                    // stack: {
                    //     sprite: `../icons/icons-stack.svg`,
                    //     example: false, // Создавать страницу с печнем иконок (пример)
                    //     render: {
                    //         scss: {
                    //             dest: '../../../src/scss/_svg-sprite.scss',
                    //         } // Activate Sass output
                    //     },
                    //     dimensions: false
                    // },
                },
            }))
            .pipe(app.gulp.dest(`${app.path.build.images}`))
            // .pipe(app.gulp.src(`${app.path.src.svgicons_css}`)) // svg css icons
            // .pipe(svgSprite({
            //     mode: {
            //         css: {
            //             sprite: `../icons/icons-css.svg`,
            //             example: true,
            //             bust: false,
            //             render: {
            //                 css: true // Activate Sass output (with default options)
            //             }
            //         },
            //         // view: {
            //         //     sprite: `../icons/icons-view.svg`,
            //         //     example: true,
            //         //     bust: false,
            //         //     render: {
            //         //         css: true // Activate Sass output (with default options)
            //         //     }
            //         // },
            //     },
            // }))
            // .pipe(app.gulp.dest(`${app.path.build.images}`));
};

export const svgSpriveCss = () => {
    return app.gulp.src(`${app.path.src.svgicons_css}`, {})
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SVG",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(svgSprite({
                mode: {
                    css: {
                        sprite: `../icons/icons-css.svg`,
                        example: true,
                        bust: false,
                        render: {
                            scss: {
                                dest: '../../../src/scss/_svg-sprite-css.scss',
                            } // Activate Sass output (with default options)
                        }
                    },
                    // view: {
                    //     sprite: `../icons/icons-view.svg`,
                    //     example: true,
                    //     bust: false,
                    //     render: {
                    //         css: true // Activate Sass output (with default options)
                    //     }
                    // },
                },
            }))
            .pipe(app.gulp.dest(`${app.path.build.images}`));
};