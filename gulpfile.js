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

