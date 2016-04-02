﻿var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");

var libs = [

]

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task("webpack", function () {
    return gulp.src('wwwroot/main.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                },
                {
                    test: /\.html$/,loader: "raw"
                }
            ]
        }
    }))
    .pipe(rename("app.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);