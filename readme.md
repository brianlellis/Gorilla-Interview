# What has changed
* Gulp replaced Grunt to be more performant (Considered Webpack but did not know the Gorilla's team familiarity with the configuration)
* SASS replaced LESS to be more performant (Considered cssNext/Webpack but did not build due to prev reason)
* Changed the data.json to allow testing of components
* Removed unneeded Handlebar partials
* Rebuilt git and Package.json for custom work done
* BrowserSynce replaced LiveReload to be more performant
* Removed all ref to jQuery and used vanilla JS, with minor ES6 calls into the system

# What was added
* Mocha/Selenium/WebDriver testing framework
* PageSpeedInsights terminal localhost evaluation tool
* SassDoc living documentation system added to build
* JSDoc living documentation added to build
* Babel for ES6 support where it would not interfere with non ES6 devs in review of code

# What is functional
* Sidebar filter attributes
* Product grid dropdowns to sort products
* Search auto complete
* Newsletter regex field eval
* Star ratings logic
* Color swatch hover
* Reduced price logic
* Smooth scroll to top behavior
* Minicart expansion on click

# Important Gulp tasks
* __gulp psi__ - Runs PageSpeedInsights in terminal
* __gulp test__ - Runs Mocha scenario test harness steps
* __gulp build-watch__ - Runs BrowserSync system
* __gulp sassdoc__ - Manual compilation of living documentation
* __gulp jsdoc__ - Manual compilation fo living documentation
