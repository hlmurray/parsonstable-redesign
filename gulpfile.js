const {
	dest,
	parallel,
	series,
	src,
	watch,
} = require('gulp');
const changed = require('gulp-changed');
const clean = require('gulp-clean');
const prefix = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

// Defines paths
const paths = {
	src:{
		scss: './src/scss',
		js: './src/js',
		html: './src/html',
		template: './src/templates',
		assets: './src/assets'
	},
	build:{
		css: './build/css',
		js: './build/js',
		html: './build/html',
		template: './build/templates',
		assets: './build/assets'
	}
}

function clear() {
  return src('./build/*', {
    read: false
  })
  .pipe(clean());
}

function compileScss() {
	return src(paths.src.scss + '/**/*.scss')
    .pipe(changed(paths.src.scss + '/**/*.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 3 versions'))
		.pipe(dest(paths.build.css));
}

function compileJs() {
	return src(paths.src.js + '/**/*.js')
    .pipe(changed(paths.src.js + '/**/*.js'))
		.pipe(dest(paths.build.js))
}

function compileHtml() {
	return src(paths.src.html + '/**/*.html')
    .pipe(changed(paths.src.html + '/**/*.html'))
		.pipe(dest(paths.build.html))
}

function compileAssets() {
  return src(paths.src.assets + '/**/*.*')
    .pipe(changed(paths.src.assets + '/**/*.*'))
		.pipe(dest(paths.build.assets))
}

function compileTemplates() {
  return src(paths.src.template + '/**/*.html')
    .pipe(changed(paths.src.template + '/**/*.html'))
		.pipe(dest(paths.build.template))
}

function startServer() {
	src('build')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: 'html'
    }));
}

function watchFiles() {
 	watch(paths.src.scss + '/**/*.scss', compileScss);
	watch(paths.src.js + '/**/*.js', compileJs);
	watch(paths.src.html + '/**/*.html', compileHtml);
	watch(paths.src.assets + '/**/*.*', compileAssets);
	watch(paths.src.template + '/**/*.html', compileTemplates);
}

exports.compile = series(clear, parallel(
  compileScss,
  compileJs,
  compileHtml,
  compileAssets,
  compileTemplates,
));
exports.watchFiles = watchFiles;

exports.up = parallel(
	watchFiles,
	startServer,
);
