var gulp = require('gulp'),
  concat = require('gulp-concat'),
  handlebars = require('gulp-handlebars'),
  wrap = require('gulp-wrap'),
  declare = require('gulp-declare'),
  browserSync = require('browser-sync'),
  CONFIG = require('./config.js');

//convert templates .hbs to javascript file 
gulp.task('templates', function(){
  gulp.src(CONFIG.PATH.TEMPLATES + '**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'App.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('Templates.js'))
    .pipe(gulp.dest(CONFIG.PATH.SCRIPTS.BUILD))
    .pipe(browserSync.reload({stream: true}));
});