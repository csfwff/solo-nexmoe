var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('HelloWorld', function() { 
  console.log('HelloWorld');
});
gulp.task('sass111', function(){
  return gulp.src('css/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});
gulp.watch('css/*.scss', ['sass111']);