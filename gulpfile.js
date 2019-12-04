var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function(){
    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    
    done();
    
});

gulp.task('sass:watch', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});