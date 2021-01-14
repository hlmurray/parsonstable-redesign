const {
	dest,
	parallel,
	series,
	src,
	watch,
} = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
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
	dist:{
		css: './dist/css',
		js: './dist/js',
		html: './dist/html',
		template: './dist/templates',
		assets: './dist/assets'
	}
}

function compileScss() {
	return src(paths.src.scss + '/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix('last 3 versions'))
		.pipe(dest(paths.dist.css));
}

function compileJs() {
	return src(paths.src.js + '/**/*.js')
		.pipe(dest(paths.dist.js))
}

function compileHtml() {
	return src(paths.src.html + '/**/*.html')
		.pipe(dest(paths.dist.html))
}

function compileAssets() {
  return src(paths.src.assets + '/**/*.*')
		.pipe(dest(paths.dist.assets))
}

function compileTemplates() {
  return src(paths.src.template + '/**/*.html')
		.pipe(dest(paths.dist.template))
}

function compile() {
	series(
		compileScss,
		compileJs,
		compileHtml,
		compileAssets,
		compileTemplates,
	);

	return src('src/')
		.pipe(dest('dist/'));
}

function startServer() {
	src('dist')
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

exports.compile = compile;
exports.watchFiles = watchFiles;

exports.up = parallel(
	compile,
	watchFiles,
	startServer,
);
