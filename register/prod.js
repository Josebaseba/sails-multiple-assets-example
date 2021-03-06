module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'compileAssets',
    'concat',
    'uglify',
    'cssmin',
    'copy:fonts',
    'sails-linker:prodHomeJs',
    'sails-linker:prodAppJs',
    'sails-linker:prodTeacherJs',
    'sails-linker:prodParentsJs',
    'sails-linker:prodSchoolJs',
    'sails-linker:prodAdminJs',
    'sails-linker:prodLandingJs',
    'sails-linker:prodLicenseJs',
    'sails-linker:prodHomeStyles',
    'sails-linker:prodAppStyles',
    'sails-linker:prodTeacherStyles',
    'sails-linker:prodParentsStyles',
    'sails-linker:prodSchoolStyles',
    'sails-linker:prodAdminStyles',
    'sails-linker:prodLicenseStyles',
    'sails-linker:prodLandingStyles',
    'sails-linker:prodLandingCustomStyles',
    'sails-linker:devTpl',
    'sails-linker:prodJsJade',
    'sails-linker:prodStylesJade',
    'sails-linker:devTplJade'
  ]);
};
