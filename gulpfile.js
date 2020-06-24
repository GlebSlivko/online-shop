const gulp = require('gulp'),
    rigger = require('gulp-rigger');
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean');
    cleanCSS = require('gulp-clean-css');
    rename = require('gulp-rename');
    terser = require('gulp-terser');
    imagemin = require('gulp-imagemin');

const path = {
    dist: {
        html: './',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img',
        slick: 'dist/slick',
        self: 'dist'
    },
    src: {
        html: './src/*.html',
        css: 'src/css/*.css',
        scss: 'src/scss/**/**.scss',
        js: 'src/js/main.js',
        img: 'src/img/**/**.*',
        slick: 'src/slick/**/**.*'
    }
};


const htmlBuild = () => (
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.stream())
);

const cssBuild = () => (
    gulp.src(path.src.css)
        .pipe(cleanCSS({level: 2},))
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
);

const scssBuild = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({level: 2},))
        .pipe(autoprefixer(['> 0.01%', 'last 100 versions']))
        .pipe(rename(function (path) {
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
);

const jsBuild = () => (
    gulp.src(path.src.js)
    .pipe(rigger()).on('error', console.error.bind(console))
    .pipe(terser({toplevel: true}))
    .pipe(concat('main.js'))
    .pipe(rename(function (path) {
        path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./dist/js')).pipe(browserSync.stream())
);


const imgBuild = () => (
    gulp.src(path.src.img)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
);

const cleanDist = () => (
    gulp.src(path.dist.self, {allowEmpty: true})
        .pipe(clean())
);



const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(path.src.html, htmlBuild).on('change', browserSync.reload);
    gulp.watch(path.src.scss, scssBuild).on('change', browserSync.reload);
    gulp.watch(path.src.css, cssBuild).on('change', browserSync.reload);
    gulp.watch(path.src.js, jsBuild).on('change', browserSync.reload);
    gulp.watch(path.src.img, imgBuild).on('change', browserSync.reload)
};


gulp.task('html', htmlBuild);
gulp.task('css', cssBuild);
gulp.task('scss', scssBuild);
gulp.task('js', jsBuild);
gulp.task('img', imgBuild);

gulp.task('build', gulp.series(cleanDist, gulp.parallel(htmlBuild, cssBuild, scssBuild, jsBuild, imgBuild)));
gulp.task('dev', gulp.series('build', watcher));