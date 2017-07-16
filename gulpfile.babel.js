/* File: gulpfile.js */

// grab our gulp packages
const   gulp        = require('gulp'),
        gutil       = require('gulp-util'),
        sass        = require('gulp-sass'), // SASS compiler
        sourcemaps  = require('gulp-sourcemaps'), // SASS sourcemap builder
        sassdoc     = require('sassdoc'), // SASS Documentation builder
        jsdoc       = require('gulp-jsdoc3'), // JS Documentation builder 
        jshint      = require('gulp-jshint'),
        uglify      = require('gulp-uglify'),
        concat      = require('gulp-concat'),
        cleanCSS    = require('gulp-clean-css'),
        browsync    = require('browser-sync').create(), // create a browser sync instance.
        psiNgrok    = require('psi-ngrok'), // Tunneling for PSI support
        connect     = require('gulp-connect'),
        port        = 8000,
        imagemin    = require('gulp-imagemin');
        // Testing Harness
        import http from 'http'
        import kinect from 'connect'
        import serveStatic from 'serve-static'
        import selenium from 'selenium-standalone'
        import webdriver from 'gulp-webdriver'
        let httpServer;



// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// Browser Sync 
gulp.task('browser-sync', function() {
    browsync.init({
        server: {
            baseDir: "build/"
        }
    });
});

// SASS manual compile
// Development
gulp.task('sass-styles', function () {
    return gulp.src('src/assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: 'node_modules/breakpoint-sass/stylesheets'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./build/assets/css') )
        .pipe(cleanCSS({ sourcemap: true }, function(details) {
            console.log(details.name + ' original size: ' + details.stats.originalSize);
            console.log(details.name + ' NEW size: ' + details.stats.minifiedSize);
        }))
        .pipe(browsync.reload({stream: true})); // prompts a reload after compilation
});

// SASSDoc compile
gulp.task('sassdoc', function () {
  var options = {
    dest: 'build/sassdoc',
  };

  return gulp.src('src/assests/scss/**/*.scss')
    .pipe( sassdoc(options) );
});

// SASS watch task
gulp.task('sass-watch', ['browser-sync'], function () {
    gulp.watch('src/assests/scss/**/*.scss', ['sass-styles', 'sassdoc']);
});

// SASS manual build with doc
gulp.task('sass-compile',['sass-styles', 'sassdoc']);

// JSDoc compilation
gulp.task('jsdoc', function (cb) {
    gulp.src(['README.md', 'src/js/**/*.js'], {read: false})
        .pipe(jsdoc(require('./jsdocConfig.json'), cb));
});

// PSI Score Retrieval
gulp.task('psi', function () {
  psiNgrok({
    pages: ['index.html'],
    port: port,
    onBeforeConnect: function () {
        return connect.server({ root: 'public', port: port })
    },
    onError: function (err) {
      console.log(err.toString());
      process.exit(-1);
    },
    onSuccess: function () {
        console.log(_self);
        setTimeout(function () { process.exit(-1) },10)
    },
    options: { threshold: 80 }
  });
});

// Mocha Testrunner
gulp.task('http', done => {
  const app = kinect().use(serveStatic('build'));
  httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('selenium', done => {
    selenium.install({
        logger (message) {
            process.stdout.write(`${message} \n`)
        },
        progressCb: (totalLength, progressLength) => {
            process.stdout.write(`Downloading drivers ${Math.round(progressLength / totalLength * 100)}% \r`)
        }
    }, err => {
        if (err) return done(err)

        selenium.start({
            spawnOptions: {
                stdio: 'ignore'
            }
        }, (err, child) => {
            selenium.child = child
            console.log('Selenium error: ', err)
            done()
        })
    })
})

gulp.task('test', ['http', 'selenium'], () => {
    return gulp.src('wdio.conf.js')
        .pipe(webdriver({
            logLevel: 'verbose',
            waitforTimeout: 12345,
            framework: 'mocha'
        })).once('end', () => {
            selenium.child.kill()
            httpServer.close()
        })
})



// JS Hint Stylish Output configured
gulp.task('jshint', () =>
    gulp.src('js/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
);

// JS Build watch task
gulp.task('js-compile', function () {
    gulp.src('src/assets/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('compiledJS.js'))
        .pipe(gulp.dest('src/js/'));
});

// Image optimization task
gulp.task('images', function () {
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/images/'))
});

// FULL BUILD OF ALL ASSETS
gulp.task('build', ['images', 'jshint', 'js-compile', 'sass-styles', 'sassdoc', 'jsdoc']);

gulp.task('build-watch', ['js-compile', 'sass-styles','browser-sync'], function () {
    gulp.watch('src/**/*', ['jshint', 'js-compile', 'sass-styles', 'sassdoc', 'jsdoc']);
});