var requireDir = require('require-dir');
    argv = require('yargs').argv;

var CONFIG = {
	PATH : {
		SCRIPTS : {
			SRC: 'App/Source/Scripts/',
			BUILD: 'App/Build/Scripts/'
		},
		STYLES: {
			SRC: 'App/Source/Styles/',
			BUILD: 'App/Build/Styles/'
		},
		IMAGES: {
			SRC: 'App/Source/Images/',
            SPRITE_SRC: 'App/Source/Images/Sprite',
			BUILD: 'App/Build/Images/'
		},
		TEMPLATES: 'App/Source/Views/'
	},
    AUTO_PREFIX_BROWSER_LIST: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
    IS_PRODUCTION: argv.production != undefined ? true : false,
    PORT: argv.port || 3000
};

module.exports  = CONFIG;