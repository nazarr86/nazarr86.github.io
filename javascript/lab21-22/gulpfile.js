var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

//server connect
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

//css
gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(concatCSS("style.min.css"))
        .pipe(autoprefixer('last 2 version', '> 1%', 'ie 9'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload()); //перезагрузить браузер так как были применени изменения
});

//html
gulp.task('html', function(){
    gulp.src('dist/index.html')
    .pipe(connect.reload());
})

//watch
gulp.task('watch', function(){
    gulp.watch('src/css/**/*.css', ['css'])
    gulp.watch('dist/index.html', ['html'])
})

//default task
gulp.task('default', ['connect', 'html', 'css', 'watch']);