/**
 * Critical CSS
 */
'use strict';

const
    gulp =          require('gulp'),
    // critical =      require('critical').stream,
    critical =      require('critical'),
    config =        require('../config').paths;

gulp.task('critical', function (cb) {
    critical.generate({
        inline: true,
        base: config.dist + config.html,
        src: 'index.html',
        dest: 'index-cr.html',
        width: 320,
        height: 480,
        // minify: false,
        dimensions: [{
            height: 200,
            width: 600
        }, {
            height: 800,
            width: 1280
        }]
    });
    // return gulp.src(config.dist + config.html + '*.html')
    //     .pipe(critical({
    //         base: config.dist + config.html, 
    //         inline: true, 
    //         css: [config.css.dest + 'app.css']
    //     }))
    //     .pipe(gulp.dest('dist'));
});