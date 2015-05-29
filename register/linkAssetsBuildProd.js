module.exports = function (grunt) {
	grunt.registerTask('linkAssetsBuildProd', [
    'sails-linker:prodHomeJsRelative',
    'sails-linker:prodAppJsRelative',
    'sails-linker:prodTeacherJsRelative',
    'sails-linker:prodParentsJsRelative',
    'sails-linker:prodSchoolJsRelative',
		'sails-linker:prodAdminJsRelative',
		'sails-linker:prodLicenseJsRelative',
	'sails-linker:prodLandingJsRelative',
    'sails-linker:prodHomeStylesRelative',
    'sails-linker:prodAppStylesRelative',
    'sails-linker:prodTeacherStylesRelative',
    'sails-linker:prodParentsStylesRelative',
    'sails-linker:prodSchoolStylesRelative',
    'sails-linker:prodAdminStylesRelative',
		'sails-linker:prodLandingStylesRelative',
		'sails-linker:prodLicenseStylesRelative',
    'sails-linker:prodLandingCustomStylesRelative',
    'sails-linker:devTpl',
    'sails-linker:prodJsRelativeJade',
    'sails-linker:prodStylesRelativeJade',
    'sails-linker:devTplJade'
	]);
};
