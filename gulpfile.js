// Requirements
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer');

// Defines paths
var paths = {
	src:{
		scss: "./src/scss",
		js: "./src/js",
		html: "./src/html",
		template: "./src/default_site",
		assets: "./src/assets"
	},
	build:{
		css: "./build/css",
		js: "./build/js",
		html: "./build/html",
		template: "./build/default_site",
		assets: "./build/assets"
	}
}

// Gulp task
gulp.task('compile-scss', function(){
	return gulp.src(paths.src.scss+"/**/*.scss")
			.pipe(sass({style: "compressed", noCache: true, 'sourcemap=none': true}))
			.pipe(prefix("last 3 versions"))
			.pipe(gulp.dest(paths.build.css));
});

gulp.task('watch', function(){
	// What to watch
	gulp.watch(paths.src.scss+"/**/*.scss", ["compile-scss"]);
});

// Compile all files, watch all source files
gulp.task("up", ["compile-scss","watch"], function(){});