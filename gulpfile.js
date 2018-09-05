/*
Gulp Workflow
Includes:
    - browserSync
    - Sass compiler
    - Css autofixer
    - Css minifier
    - Image optimisation
    - HTML minifier
    - JS minifier
All processes will be stored in Distribution folder ready for deployment
*/

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const imageMin = require('gulp-imagemin');
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename');
const htmlMin = require('gulp-html-minifier');
const jsMin = require('gulp-minify');


//Sass compiler and Css minifier
gulp.task('sass', function(){
    //reads in scss file
    return gulp.src(['src/resources/sass/main.scss'])
    //calls Sass function
    .pipe(sass())  
    //logs Error mesasges
    .pipe(sass().on('error', sass.logError))
    //destination for compiled scss
    .pipe(gulp.dest('src/resources/css/'))
    //calls minify functiom
    .pipe(cleanCss({compatibility: 'ie8' }))
    //destination for Minified css
    .pipe(gulp.dest('dist/resources/css/'))
    //streams files to browser
    .pipe(browserSync.stream());
})

//Css autoprefixer
gulp.task('autoPrefixer', function(){
    //reads in css file
    return gulp.src('dist/resources/css/main.css')
    //runs prefixer function
    .pipe(autoPrefixer({
        browsers : ['last 2 versions'],
        cascade: false
    }))
    //destination for Prefixed css file
    .pipe(gulp.dest('dist/resources/css/'))
});

//Image optimisation
gulp.task('imageMin', function(){
    //reads in image files
    return gulp.src('src/resources/images/*')
    //calls image optimsation function
    .pipe(imageMin())
    //destination for Optimised images
    .pipe(gulp.dest('dist/resources/images/'))
})

//JS Minifier
gulp.task('jsMin', function(){
    //reads in JS files
    gulp.src('src/resources/js/*.js')
    //Minifies JS,     
    .pipe(jsMin({
        ext:{
            //sets file extension to just .JS
            min:'.js'
        },
        // Makes sure the sources file isnt transferred
        noSource: 'true'
    }))
    //destination for minified JS files
    .pipe(gulp.dest('dist/resources/js'))
})

//HTML minifier
gulp.task('htmlMin', function(){
    //reads in HTML file
    return gulp.src('src/index.html')
    //removes white space
    .pipe(htmlMin({collapseWhitespace : true}))
    .pipe(gulp.dest('dist'));
})

//Browser Sync (also calls Sass compiler/)
gulp.task('serve', ['sass'], function(){
    //initalises browserSync
    browserSync.init({
        //folder we want to serve in the browser
        server:'./src'
    });
    //constantly watches files to updates, then reloads the browser
    gulp.watch(['src/resources/sass/**/*.scss'], ['sass']).on('change', browserSync.reload);
    gulp.watch(['src/*/*.html']).on('change', browserSync.reload);
    gulp.watch(['src/*']).on('change', browserSync.reload);
});

//Runs all gulp tasks
gulp.task('default', ['serve','imageMin', 'autoPrefixer', 'htmlMin','jsMin']);
