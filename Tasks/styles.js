var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cssminify = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    CONFIG = require('./config.js');

//compiling our SCSS files
gulp.task('styles', ['images-sprite'], function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src([
    	CONFIG.PATH.STYLES.SRC + 'Base/Reset.scss',
        CONFIG.PATH.STYLES.SRC + 'Sprite.scss',
    	CONFIG.PATH.STYLES.SRC + 'Base/*.scss',
    	CONFIG.PATH.STYLES.SRC + 'Components/*.scss',
    	CONFIG.PATH.STYLES.SRC + 'Helpers/*.scss',
    	CONFIG.PATH.STYLES.SRC + 'Vendors/*.scss',
    	CONFIG.PATH.STYLES.SRC + 'Views/*.scss',
    	CONFIG.PATH.STYLES.SRC + 'Common.scss'
	])
    //prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    //get sourceMaps ready
    .pipe(sourcemaps.init())
    //include SCSS and list every "include" folder
    .pipe(concat('App.css'))
    .pipe(sass({
          errLogToConsole: true
    }))
    .pipe(autoprefixer({
       browsers: CONFIG.AUTO_PREFIX_BROWSER_LIST,
       cascade:  true
    }))
    //catch errors
    .on('error', gutil.log)
    //the final filename of our combined css file
    .pipe(cssminify('App.css'))
    //get our sources via sourceMaps
    .pipe(sourcemaps.write())
    //where to save our final, compressed css file
    .pipe(gulp.dest(CONFIG.PATH.STYLES.BUILD))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});