var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var ngAnnotate = require('browserify-ngannotate');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var concatCss = require('gulp-concat-css');
//var child = require('child_process');
var fs = require('fs');
var spawn = require('child_process').spawn;
var node;
// Where our files are located
var jsFiles = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";
var cssFiles = "src/css/**/*.css";

var interceptErrors = function(error) {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
};


gulp.task('browserify', ['views'], function() {
    return browserify('./src/js/app.js')
        .transform(babelify, {
            presets: ["es2015"]
        })
        .transform(ngAnnotate)
        .bundle()
        .on('error', interceptErrors)
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('main.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('../server/public/javascripts'));
});

gulp.task('html', function() {
    return gulp.src("src/index.html")
        .on('error', interceptErrors)
        .pipe(gulp.dest('./build/'));
});

gulp.task('css', function() {
    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css',
            './src/css/site.css','./themes/freelancer/css/freelancer.min.css', './node_modules/font-awesome/css/font-awesome.css'
        ])
        .pipe(concatCss('content.css',{rebaseUrls: false}))
        .pipe(gulp.dest('../server/public/stylesheets'))
})

//Baut Templates als Javascript
gulp.task('views', function() {
    return gulp.src(viewFiles)
        .pipe(templateCache({
            standalone: true
        }))
        .on('error', interceptErrors)
        .pipe(rename("app.templates.js"))
        .pipe(gulp.dest('./src/js/config/'));
});

gulp.task('default', ['browserify','html','css','server', 'watch']);


gulp.task('server', function() {
    if (node) node.kill()
    node = spawn('node', ['../server/bin/www'], {
        stdio: 'inherit'
    })
    node.on('close', function(code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
})

gulp.task('watch', function() {
    gulp.watch("src/index.html", ['html']);
    gulp.watch(viewFiles, ['views']);
    gulp.watch(jsFiles, ['browserify']);
    gulp.watch(cssFiles, ['css']);
})


// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
    //  var html = gulp.src("build/index.html")
    //                 .pipe(gulp.dest('./dist/'));

    var js = gulp.src("build/main.js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

    return merge(js);
});
