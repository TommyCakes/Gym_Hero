var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./site"
    });

    gulp.watch("site/scss/*.scss", ['sass']);
    gulp.watch('site/js/*.js', ['jshint']);
    gulp.watch("site/*.html").on('change', browserSync.reload);
});



gulp.task('jshint', function() {
  return gulp.src('site/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('sass', function() {
  return gulp.src('site/scss/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      includePaths: require('node-neat').includePaths
    }))
    .pipe(gulp.dest('site/css'))
    .pipe(browserSync.stream());
});


gulp.task('html', function() {
  return gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});


gulp.task('scripts', function() {
  return gulp.src('site/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});


gulp.task('styles', function() {
  return gulp.src('site/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('build/css'));
});


gulp.task('images', function() {
  return gulp.src('site/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});


gulp.task('default', ['jshint', 'sass', 'watch']);


gulp.task('build', ['jshint', 'sass', 'html', 'scripts', 'styles', 'images']);
