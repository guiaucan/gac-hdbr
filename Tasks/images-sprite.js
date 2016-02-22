var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    CONFIG = require('./config.js');

//generate sprite file
gulp.task('images-sprite', function () {
    var spriteData = gulp.src(CONFIG.PATH.IMAGES.SPRITE_SRC + '**/*.png')
        .pipe(spritesmith({
            imgName: '../Images/Sprite.png',
            cssName: 'Sprite.scss',
            cssFormat: 'css',
            padding: 10,
            cssOpts: {
                cssSelector: function (item) {
                    return '.' + item.name;
                },
                padding: 10
            }
        }));
    spriteData.img.pipe(gulp.dest(CONFIG.PATH.IMAGES.BUILD));
    spriteData.css.pipe(gulp.dest(CONFIG.PATH.STYLES.SRC));

    return spriteData;
});