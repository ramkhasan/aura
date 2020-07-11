function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;

// html
let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");

gulp.task("min-html", function (done) {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
});

// css
let cleanCSS = require("gulp-clean-css");

gulp.task("min-css", function (done) {
  return gulp
    .src("./src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css/"));
});

// js
let uglify = require("gulp-uglify");

gulp.task("min-js", function (done) {
  return gulp.src("./src/js/*.js").pipe(uglify()).pipe(gulp.dest("dist/js/"));
});
