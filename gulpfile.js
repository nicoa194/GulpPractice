const gulp = require('gulp')
const sassLint = require('gulp-sass-lint'),
const ESlint = require('gulp-eslint');

const paths = {
    dev: './src',
    distCss: './css',
    vendorCss: './css/vendors',
    distJs: './js',
    vendorJs: './js/vendors',
    templates: './templates'
}

gulp.task('SCSSLint', function () {
    return gulp.src([
            `${paths.dev}/*.scss`,
            `${paths.dev}/**/*.scss`,
            `${paths.dev}/**/**/*.scss`,
            `${paths.dev}/**/**/**/*.scss`,
            `!${paths.dev}/packages/*.scss`
        ])
        .pipe(sassLint({
            options: {
                formatter: 'stylish'
            },
            configFile: '.scsslint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});