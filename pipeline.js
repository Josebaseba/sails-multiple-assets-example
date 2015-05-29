/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



/* HOME JS AND CSS FILES */
var cssFilesToInjectHome = [
  'styles/components/addtohomescreen.css',
  'styles/components/bootstrap-theme.min.css',
  'styles/statics/*.css'
];

var jsFilesToInjectHome = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/components/underscore-min.js',
  'js/components/backbone.js',
  'js/home/app.js',
  'js/home/views/findclassroom.js',
  'js/home/views/teacher_login.js',
];

/* APP JS AND CSS FILES */
var cssFilesToInjectApp = [
  'styles/components/bootstrap-theme.min.css',
  'styles/components/bootstrap.min.css',
  'styles/commons/custom.css',
  'styles/commons/theme.css',
  'styles/app/*.css'
];

var jsFilesToInjectApp = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/components/underscore-min.js',
  'js/components/backbone.js',
  'js/app/app.js',
  'js/app/views/**/*.js',
  'js/app/routers/router.js',
  'js/app/helpers/*.js'
];

/* TEACHER JS AND CSS FILES */
var cssFilesToInjectTeacher = [
  'styles/components/bootstrap.min.css',
  'styles/dashboard/dashboard-setup.css',
  'styles/dashboard/dashboard.css',
];

var jsFilesToInjectTeacher = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/components/underscore-min.js',
  'js/components/backbone.js',
];

/* PARENTS JS AND CSS FILES */
var cssFilesToInjectParents = [
  'styles/components/addtohomescreen.css',
  'styles/components/bootstrap.min.css',
  'styles/dashboard/dashboard-setup.css',
  'styles/dashboard/dashboard.css',
  'styles/dashboard/custom-dashboard.css'
];

var jsFilesToInjectParents = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/components/underscore-min.js',
];

/* SCHOOL JS AND CSS FILES */
var cssFilesToInjectSchool = [
  'styles/components/bootstrap.min.css',
];

var jsFilesToInjectSchool = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/components/underscore-min.js',
  'js/components/backbone.js',
  'js/components/Chart.min.js',
  'js/school/app.js',
  'js/school/routers/router.js',
  'js/school/models/*.js',
  'js/school/collections/*.js',
  'js/school/views/*.js'
];

/* ADMIN JS AND CSS FILES */
var cssFilesToInjectAdmin = [
  'styles/components/bootstrap.min.css',
  'styles/admin/admin-custom.css',
  'styles/components/jqx.base.css',
];

var jsFilesToInjectAdmin = [
  'js/components/jquery-2.1.0.min.js',
  'js/components/bootstrap.js',
  'js/admin/views/*.js'
];

/* LICENSE JS AND CSS FILES */
var cssFilesToInjectLicense = [
  'styles/commons/theme.css',
  'styles/components/sweet-alert.css'
];

var jsFilesToInjectLicense = [
  'js/components/jquery-2.1.0.min.js',
  'js/license/*.js'
];

/* PARENTS / TEACHERS LANDING */
var cssFilesToInjectLanding = [
  'styles/landing/font-awesome.min.css',
  'styles/landing/bootstrap-theme.min.css',
  'styles/landing/bootstrap.min.css',
];

var cssFilesToInjectLandingCustom = [
  'styles/landing/custom.css'
];

var jsFilesToInjectLanding = [
  'js/components/jquery-2.1.0.min.js',
  'js/landing/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// HOME STYLES AND JS
module.exports.cssFilesToInjectHome = cssFilesToInjectHome.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectHome = jsFilesToInjectHome.map(function(path) {
  return '.tmp/public/' + path;
});

// APP STYLES AND JS
module.exports.cssFilesToInjectApp = cssFilesToInjectApp.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectApp = jsFilesToInjectApp.map(function(path){
  return '.tmp/public/' + path;
});

// TEACHER STYLES AND JS
module.exports.cssFilesToInjectTeacher = cssFilesToInjectTeacher.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectTeacher = jsFilesToInjectTeacher.map(function(path){
  return '.tmp/public/' + path;
});

// PARENTS STYLES AND JS
module.exports.cssFilesToInjectParents = cssFilesToInjectParents.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectParents = jsFilesToInjectParents.map(function(path){
  return '.tmp/public/' + path;
});

// SCHOOL STYLES AND JS
module.exports.cssFilesToInjectSchool = cssFilesToInjectSchool.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectSchool = jsFilesToInjectSchool.map(function(path){
  return '.tmp/public/' + path;
});

// ADMIN STYLES AND JS
module.exports.cssFilesToInjectAdmin = cssFilesToInjectAdmin.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectAdmin = jsFilesToInjectAdmin.map(function(path){
  return '.tmp/public/' + path;
});

// LICENSE STYLES AND JS
module.exports.cssFilesToInjectLicense = cssFilesToInjectLicense.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectLicense = jsFilesToInjectLicense.map(function(path){
  return '.tmp/public/' + path;
});

// LANDING PAGE TEACHER - PARENTS
module.exports.cssFilesToInjectLanding = cssFilesToInjectLanding.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.cssFilesToInjectLandingCustom = cssFilesToInjectLandingCustom.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInjectLanding = jsFilesToInjectLanding.map(function(path){
  return '.tmp/public/' + path;
});

module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
