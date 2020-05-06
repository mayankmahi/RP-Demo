const gulp = require("gulp");
const scss = require("gulp-sass");

const browserSync = require("browser-sync").create();

//Compile SCSS into CSS
function style(){
    //1. Where Is My CSS File
    return gulp.src('./scss/**/*.scss')
    //2. Pass that file through SCSS compiler
    .pipe(scss())
    //3. Where do I have saved compiled CSS
    .pipe(gulp.dest('./css'))
    //4. Browser sync
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;