var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch');


gulp.task('default', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(concatCSS("style.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function(){
    gulp.watch('src/css/**/*.css', ['default'])
})