var gulp        = require('gulp'),
    glob        = require('glob'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    plugins     = require('gulp-load-plugins')();

var prod = false;

var output = "dist/";

var resources = {
    sass: "src/sass/**/*.scss",
    js: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js",
        "src/js/**/*.js"
    ],
    html: glob.sync('src/html/*.html'),
    img: "src/img/**"
};

gulp.task("sass", function() {
    gulp.src("src/sass/app.scss")
        .pipe(plugins.sass())
        .pipe(plugins.if(prod, plugins.cleanCss({compatibility: 'ie8'})))
        .pipe(plugins.if(prod, plugins.uncss({html: resources.html})))
        .pipe(plugins.if(!prod, reload({stream: true})))
        .pipe(gulp.dest(output + "css"));
});

gulp.task("js", function() {
    gulp.src(resources.js)
        .pipe(plugins.if(prod, plugins.uglify()))
        .pipe(plugins.if(!prod, reload({stream: true})))
        .pipe(gulp.dest(output + "js"));
});

gulp.task("html", function () {
   gulp.src(resources.html)
       .pipe(plugins.if(!prod, reload({stream: true})))
       .pipe(gulp.dest(output));
});

gulp.task("img", function () {
    gulp.src(resources.img)
        .pipe(plugins.if(prod, plugins.imagemin()))
        .pipe(plugins.if(!prod, reload({stream: true})))
        .pipe(gulp.dest(output + "img"));
});

gulp.task("watch", function () {
    for (var key in resources) {
        gulp.watch(resources[key], [key]);
    }
});

gulp.task("sync", function () {
    browserSync.init({
        server: {
            baseDir: output
        }
    });
});

gulp.task("prod", function () {
   prod = true;
});

gulp.task("dist", ["prod", "default"]);
gulp.task("dev", ["default", "watch", "sync"]);
gulp.task("default", ["sass", "js", "html", "img"]);