module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuild', [
    'sails-linker:devHomeJsRelative',
    'sails-linker:devAppJsRelative',
    'sails-linker:devTeacherJsRelative',
    'sails-linker:devParentsJsRelative',
    'sails-linker:devSchoolJsRelative',
		'sails-linker:devAdminJsRelative',
		'sails-linker:devLicenseJsRelative',
	'sails-linker:devLandingJsRelative',
    'sails-linker:devHomeStylesRelative',
    'sails-linker:devAppStylesRelative',
    'sails-linker:devTeacherStylesRelative',
    'sails-linker:devParentsStylesRelative',
    'sails-linker:devSchoolStylesRelative',
		'sails-linker:devAdminStylesRelative',
		'sails-linker:devLicenseStylesRelative',
    'sails-linker:devLandingStylesRelative',
	'sails-linker:devLandingCustomStylesRelative',
	'sails-linker:devTpl',
	'sails-linker:devJsRelativeJade',
	'sails-linker:devStylesRelativeJade',
	'sails-linker:devTplJade'
	]);
};
