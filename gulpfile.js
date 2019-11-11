const gulp = require('gulp')
const babel = require('gulp-babel');
const sass = require('gulp-sass')

const paths = {
    dev: './src',
    distCss: './css',
    vendorCss: './css/vendors',
    distJs: './js',
    vendorJs: './js/vendors',
    templates: './templates'
}

gulp.task('babel', () => {
    return gulp.src([
        `${paths.dev}/*.js`
    ])
    .pipe(babel({
        presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest(`${paths.distJs}`));
})

gulp.task('sass', () => {
    return gulp.src(`${paths.dev}/sass/*.scss`)
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
   });

gulp.task('watch', () => {
    gulp.watch(`${paths.dev}/sass/*.scss`, gulp.series('sass'));
    gulp.watch(`${paths.dev}/**/*.js`, gulp.series('babel'));
    gulp.watch(`${paths.dev}/*.js`, gulp.series('babel'));
});