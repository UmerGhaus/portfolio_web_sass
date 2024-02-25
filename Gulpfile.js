// Gulpfile.js

// Include gulp and plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Specify the Sass compiler
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Define paths
const paths = {
  styles: {
    src: 'assets/scss/**/*.scss',
    dest: 'assets/css/'
  }
};

// Define tasks
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

// Export tasks
exports.styles = styles;
exports.watch = watch;
