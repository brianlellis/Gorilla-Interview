/* File: gulpfile.js */

// grab our gulp packages
import gulp         from 'gulp'
import gutil        from 'gulp-util'
import sass         from 'gulp-sass' // SASS compiler
import sourcemaps   from 'gulp-sourcemaps' // SASS sourcemap builder
import sassdoc      from 'sassdoc' // SASS Documentation builder
import jsdoc        from 'gulp-jsdoc3' // JS Documentation builder 
import jshint       from 'gulp-jshint'
import concat       from 'gulp-concat'
import cleanCSS     from 'gulp-clean-css'
import imagemin     from 'gulp-imagemin'
import autoprefixer from 'gulp-autoprefixer'

// Handlebars
import handlebars   from 'gulp-compile-handlebars'
import rename       from 'gulp-rename'
import del          from 'del'

// BrowserSync
import browsync     from 'browser-sync' // create a browser sync instance.
const browLaunch    = browsync.create();

// PSI
import psiNgrok     from 'psi-ngrok' // Tunneling for PSI support
import connect      from 'gulp-connect'
const port          = 8000;

// Testing Harness
import http         from 'http'
import kinect       from 'connect'
import serveStatic  from 'serve-static'
import selenium     from 'selenium-standalone'
import webdriver    from 'gulp-webdriver'
let httpServer;



// create a default task and just log a message
gulp.task('default', () => {
  return gutil.log('Gulp is running!')
});

// Browser Sync 
gulp.task('browser-sync', function() {
    browLaunch.init({
        server: {
            baseDir: "build/"
        }
    });
});

// Handlebars
const config = {
  src: './src/templates',
  dest: './build',
};

gulp.task('html', () => {
  return gulp.src(`${config.src}/pages/*.hbs`)
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: [`${config.src}/partials`]
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest(config.dest));
});

// SASS manual compile
gulp.task('sass-styles', () => {
    return gulp.src('src/assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: 'node_modules/breakpoint-sass/stylesheets'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./build/assets/css') )
        .pipe(cleanCSS({ sourcemap: true }, function(details) {
            console.log(details.name + ' original size: ' + details.stats.originalSize);
            console.log(details.name + ' NEW size: ' + details.stats.minifiedSize);
        }))
        .pipe(browLaunch.reload({stream: true})); // prompts a reload after compilation
});

// SASSDoc compile
gulp.task('sassdoc', () => {
  var options = {
    dest: 'build/sassdoc',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Ungrouped',
      foo: 'Foo group',
      bar: 'Bar group',
    },
    basePath: 'https://github.com/SassDoc/sassdoc',
  };


  return gulp.src('./src/assets/scss/**/*.scss').pipe( sassdoc(options) );
});

// SASS watch task
gulp.task('sass-watch', ['browser-sync'], () => {
    gulp.watch('src/assests/scss/**/*.scss', ['sass-styles', 'sassdoc']);
});

// SASS manual build with doc
gulp.task('sass-compile',['sass-styles', 'sassdoc']);

// JSDoc compilation
gulp.task('jsdoc', cb => {
    const config = require('./jsdocConfig.json');
    gulp.src(['README.md', 'src/js/*.js'], {read: false})
        .pipe(jsdoc(config), cb);
});

// PSI Score Retrieval
gulp.task('psi', () => {
  psiNgrok({
    pages: ['index.html'],
    port: port,
    onBeforeConnect: () => {
        return connect.server({ root: 'public', port: port })
    },
    onError: function (err) {
      console.log(err.toString());
      process.exit(-1);
    },
    onSuccess: () => {
        setTimeout(() => { process.exit(-1) },100)
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

gulp.task('js-compile', () => {
    gulp.src('src/js/*.js')
        .pipe(concat('compiledJS.js'))
        .pipe(gulp.dest('build'));
});

// Image optimization task
gulp.task('images', () => {
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/images/'))
});

// Gulp Copy Task
gulp.task('copy', () => {
    return gulp.src([
      'src/assets/images/*'
    ], {
        base: 'src/assets'
    }).pipe(gulp.dest('build/assets'));
});

// FULL BUILD OF ALL ASSETS
gulp.task('build-watch', ['html', 'copy', 'jshint', 'js-compile', 'sass-styles', 'browser-sync'], () => {
    return gulp.watch('./src/**/*', ['html', 'jshint', 'js-compile', 'sass-styles', 'sassdoc', 'jsdoc']);
});