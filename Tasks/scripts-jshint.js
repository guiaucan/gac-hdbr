var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    CONFIG = require('./config.js');

//validate our Javascripts
gulp.task('scripts-jshint', function() {
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
    //this is the filename of the compressed version of our JS
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    //catch errors
    .on('error', gutil.log)
    //where we will store our finalized, compressed script
});