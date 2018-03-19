var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browsersync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require("gulp-notify");

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'source'
		},
		notify: false,
		// open: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	})
});

gulp.task('sass', function() {
	return gulp.src('source/sass/**/*.scss')
	.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(gulp.dest('source/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'source/libs/jquery/dist/jquery.min.js',
		'source/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('source/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('source/sass/**/*.{scss,sass}', ['sass']);
	gulp.watch(['libs/**/*.js', 'source/js/common.js'], ['js']);
	gulp.watch('source/*.html', browsersync.reload)
});

gulp.task('default', ['watch']);
