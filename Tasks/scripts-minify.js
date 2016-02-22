var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    CONFIG = require('./config.js');

//minify our Javascripts
gulp.task('scripts-minify', ['scripts-jshint'], function() {
    //this is where our dev JS scripts are
    return gulp.src([
    	CONFIG.PATH.SCRIPTS.SRC + 'Config.js',
        CONFIG.PATH.SCRIPTS.SRC + 'Vendors/**/*.js',
        CONFIG.PATH.SCRIPTS.SRC + 'Library/**/*.js',
    	CONFIG.PATH.SCRIPTS.SRC + 'Components/**/*.js',
    	CONFIG.PATH.SCRIPTS.SRC + 'Views/**/*.js',
    	CONFIG.PATH.SCRIPTS.SRC + 'Common.js'
	])
    //prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber())
    //get sourceMaps ready
    .pipe(sourcemaps.init())
    //this is the filename of the compressed version of our JS
    .pipe(concat('App.js'))
    .pipe(uglify())
    //catch errors
    .on('error', gutil.log)
    //get our sources via sourceMaps
    .pipe(sourcemaps.write('/'))
    //where we will store our finalized, compressed script
    .pipe(gulp.dest(CONFIG.PATH.SCRIPTS.BUILD))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});