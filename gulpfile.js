// Requirements
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	plumber = require("gulp-plumber"),
	prefix = require('gulp-autoprefixer'),
	webserver = require('gulp-webserver');

// Defines paths
var paths = {
	src:{
		scss: "./src/scss",
		js: "./src/js",
		html: "./src/html",
		template: "./src/templates",
		assets: "./src/assets"
	},
	build:{
		css: "./build/css",
		js: "./build/js",
		html: "./build/html",
		template: "./build/templates",
		assets: "./build/assets"
	}
}

// Gulp tasks
// SCSS Compiler
gulp.task('compile-scss', function(){
	return gulp.src(paths.src.scss+"/**/*.scss")
	.pipe(sass({style: "compressed", noCache: true, 'sourcemap=none': true}))
	.pipe(prefix("last 3 versions"))
	.pipe(gulp.dest(paths.build.css));
});

// JS Compiler
gulp.task("compile-js", function(){
	return gulp.src(paths.src.js+"/**/*.js")
	.pipe(gulp.dest(paths.build.js))
});

// HTML Compiler
gulp.task("compile-html", function(){
	return gulp.src(paths.src.html+"/**/*.html")
	.pipe(gulp.dest(paths.build.html))
});

// Assets Compiler
gulp.task("compile-assets", function(){
	return gulp.src(paths.src.assets+"/**/*.*")
	.pipe(gulp.dest(paths.build.assets))
});

// Templates Compiler
gulp.task("compile-templates", function(){
	return gulp.src(paths.src.template+"/**/*.html")
	.pipe(gulp.dest(paths.build.template))
});

// Start webserver
gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: 'html'
    }));
});


gulp.task('watch', function(){
	// What to watch
	gulp.watch(paths.src.scss+"/**/*.scss", ["compile-scss"]);
	gulp.watch(paths.src.js+"/**/*.js", ["compile-js"]);
	gulp.watch(paths.src.html+"/**/*.html", ["compile-html"]);
	gulp.watch(paths.src.assets+"/**/*.*", ["compile-assets"]);
	gulp.watch(paths.src.template+"/**/*.html", ["compile-templates"]);
});

gulp.task("compile", ["compile-assets","compile-html","compile-js","compile-scss","compile-templates"], function(){
	return gulp.src("src/fake")
	.pipe(gulp.dest("src/fake"))
});

// Compile all files, watch all source files
gulp.task("up", ["compile","watch","webserver"], function(){});
