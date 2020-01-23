//sudo npm install --save-dev gulp gulp-concat gulp-compass gulp-sass gulp-clean-css gulp-minify-css gulp-rename gulp-plumber gulp-notify gulp-uglify gulp-imagemin imagemin-pngquant gulp-autoprefixer gulp-sourcemaps browser-sync

var gulp = require('gulp');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Paths
var paths = {
    styles: ['./src/styles/**/*.scss'],
    scripts: ['./src/scripts/**/*.js'],
    images: ['./src/images/*']
};

// PlumberOpts
var plumberOpts = {
    errorHandler: notify.onError("Error: <%= error.message %>")
}

// Tasks
gulp.task('scripts', function() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plumber(plumberOpts))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/public/js'));
});

gulp.task('styles', function() {
    gulp.src('src/styles/**/*.scss')
        .pipe(plumber(plumberOpts))
        .pipe(compass({
            css: 'app/public/css',
            sass: 'src/styles',
            image: 'app/public/images'
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/public/css'))
        .pipe(browserSync.stream());
        
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*.*')
        .pipe(plumber(plumberOpts))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('app/public/images'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('server', ['scripts', 'styles', 'images'], function() {
    browserSync.init({
        //server: "./"
        proxy: 'localhost:3000'
    });
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['server', 'scripts', 'styles', 'images']);
