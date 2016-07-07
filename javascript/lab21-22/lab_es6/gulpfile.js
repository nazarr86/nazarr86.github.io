var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

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
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

//scripts

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());;
});

//watch
gulp.task('watch', function(){
    gulp.watch('src/css/**/*.css', ['css'])
    gulp.watch('src/js/*.js', ['scripts'])
    gulp.watch('src/index.html', ['html'])
})

//default task
gulp.task('default', ['connect', 'html', 'css', 'scripts', 'watch']);