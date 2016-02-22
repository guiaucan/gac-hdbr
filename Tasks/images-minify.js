var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	CONFIG = require('./config.js');

//minify images
gulp.task('images-minify', function() {
    gulp.src( ['!' + CONFIG.PATH.IMAGES.SPRITE_SRC, CONFIG.PATH.IMAGES.SRC + '**/*', '!' + CONFIG.PATH.IMAGES.SPRITE_SRC + '**/*'] )
    .pipe( imagemin( { optimizationLevel: 5, progressive: true, interlaced: true } ) )
    .pipe( gulp.dest( CONFIG.PATH.IMAGES.BUILD ) );
});