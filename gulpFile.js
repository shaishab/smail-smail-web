"user strict";
var _, buildDirectory, changed, coffee, concat, csso, del, fontsBuildDirectory, fs, gulp, gutil, imagemin, jade, jshint, mkdirp, plumber, sass, scriptBuildDirectory, scriptSourceDirectory, size, styleBuildDirectory, styleSourceDirectory, uglify, watch;

gulp = require("gulp");

gutil = require("gulp-util");

watch = require("gulp-watch");

plumber = require("gulp-plumber");

del		 = require ("del");

changed = require("gulp-changed");

concat = require("gulp-concat");

jade = require("gulp-jade");

sass = require("gulp-sass");

csso = require("gulp-csso");

uglify = require("gulp-uglify");

_ = require("lodash");

scriptSourceDirectory = "public/js";

styleSourceDirectory = "public/sass";

buildDirectory = "public/build";

scriptBuildDirectory = "public/build/js";

styleBuildDirectory = "public/build/css";

fontsBuildDirectory = "public/build/fonts";

gulp.task("clean", function() {
    return del([buildDirectory]);
});

gulp.task("compile:sass", function() {
    var files;
    files = styleSourceDirectory + "/**/*.scss";
    return gulp.src(files).pipe(changed(styleSourceDirectory, {
        extension: ".css"
    })).pipe(sass({
        includePaths: styleSourceDirectory,
        errLogToConsole: true
    })).pipe(gulp.dest(styleSourceDirectory));
});

gulp.task("compile:all", ["compile:sass"]);

gulp.task("bundle:all", ["compile:all"], function(){
    sourceFiles = styleSourceDirectory + "/**/*.css";
    gulp.src(sourceFiles)
    .pipe(concat ("bundle.css"))
    .pipe(csso())
    .pipe(gulp.dest(buildDirectory + "/css"))
});


gulp.task("default", ["bundle:all"]);