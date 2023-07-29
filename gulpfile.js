// gulpfile.js
const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// Define the source and destination paths
const paths = {
  styles: {
    src: "*.scss",
    dest: ".",
  },
};

// Compile SCSS to CSS, add vendor prefixes, and minify the CSS
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch for changes in SCSS files
function watch() {
  gulp.watch(paths.styles.src, styles);
}

// Create a default task
exports.default = gulp.series(styles, watch);
