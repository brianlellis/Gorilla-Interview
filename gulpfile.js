/* File: gulpfile.js */

// grab our gulp packages
const   gulp        = require('gulp'),
        gutil       = require('gulp-util'),
        sass        = require('gulp-sass'), // SASS compiler
        sourcemaps  = require('gulp-sourcemaps'), // SASS sourcemap builder
        sassdoc     = require('sassdoc'), // SASS Documentation builder
        jsdoc       = require('gulp-jsdoc3'), // JS Documentation builder
        cucumber    = require('gulp-cucumber'), // Automated QA feature testing
        jshint      = require('gulp-jshint'),
        uglify      = require('gulp-uglify'),
        concat      = require('gulp-concat'),
        cleanCSS    = require('gulp-clean-css'),
        browsync    = require('browser-sync').create(), // create a browser sync instance.
        psiNgrok    = require('psi-ngrok'), // Tunneling for PSI support
        connect     = require('gulp-connect'),
        port        = 8000,
        imagemin    = require('gulp-imagemin'),
        // Testing Harness
        http        = require('http'),
        kinect      = require('connect'),
        Launcher    = require('webdriverio/build/lib/launcher'),
        path        = require('path'),
        wdio        = new Launcher(path.join(__dirname, 'wdio.conf.js')),
        serveStatic = require('serve-static'),
        protractor  = require("gulp-protractor").protractor,
        reporter    = require("gulp-protractor-cucumber-html-report");
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

// Cucumber compiler
// run tests with the following command: npm test
gulp.task('http', (done) => {
  const app = kinect().use(serveStatic('build'));
  httpServer = http.createServer(app).listen(9000, done);
});

gulp.task('e2e', ['http'], () => {
  return wdio.run(code => {
    process.exit(code);
  }, error => {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
  });
});

gulp.task('test', ['e2e'], () => {
  httpServer.close();
});

gulp.task('cucumber', function() {
    gulp.src('cucumber/features/*').pipe(cucumber({
        'steps': 'features/steps/steps.js'
    }));
});



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