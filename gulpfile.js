//Todos plugins utilizados devem estar no package.json

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    CONFIG = require('./Tasks/config.js');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: ''
        },
        options: {
            reloadDelay: 250
        },
        notify: false,
        proxy: CONFIG.PORT
    });
});

gulp.task('watch', ['browserSync'], function () {
    function reportChange(event){
        console.log('\nEvent type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path + '\n'); // The path of the modified file
    }

    //styles watch
    gulp.watch([CONFIG.PATH.STYLES.SRC + '**/*.scss', '!' + CONFIG.PATH.STYLES.SCR + 'Sprite.scss'], ['styles']);

    //images watch
    gulp.watch([CONFIG.PATH.IMAGES.SRC + '**/*', '!' + CONFIG.PATH.IMAGES.SPRITE_SRC + '**/*'], ['images-minify']);

    //sprite watch
    gulp.watch([CONFIG.PATH.IMAGES.SPRITE_SRC + '**/*'], ['styles']);
    
    //scripts watch
    gulp.watch(CONFIG.PATH.SCRIPTS.SRC + '**/*', ['scripts-minify']);
    
    //templates hbs watch
    gulp.watch(CONFIG.PATH.TEMPLATES + '**/*.hbs', ['templates']);
});

// Task utilizada para chamar o watch
gulp.task('default', ['templates', 'styles', 'scripts-minify', 'images-minify' ]);
