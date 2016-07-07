var gulp = require('gulp'),
    watch = require('gulp-watch'),
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
    gulp.watch('src/js/*.js', ['scripts'])
    gulp.watch('src/index.html', ['html'])
})

//default task
gulp.task('default', ['connect', 'html', 'scripts', 'watch']);