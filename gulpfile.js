var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var mocha = require('gulp-mocha');
var todo = require('gulp-todo');
var fs = require('fs');


gulp.task('test', ['lint'], function () {
    gulp.src(['test/**/*.js'])
        .pipe(mocha());
});

gulp.task('lint', function () {
  return gulp.src(['**/*.js', '!node_modules/**/*.js', '!bin/**/*.js'])
    .pipe(jshint({
          esnext: true
      }))
    .pipe(jshint.reporter('default', { verbose: true}))
    .pipe(jshint.reporter('fail'));
});




gulp.task('todo', ['lint'], function() {
  gulp.src('./**/*.js')
      .pipe(todo())
      .pipe(gulp.dest('./'));
});


gulp.task('default', ['test']);
