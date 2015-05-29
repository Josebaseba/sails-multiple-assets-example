module.exports = function (grunt) {
	grunt.registerTask('linkAssets', [
    'sails-linker:devHomeJs',
    'sails-linker:devAppJs',
    'sails-linker:devTeacherJs',
    'sails-linker:devParentsJs',
    'sails-linker:devSchoolJs',
    'sails-linker:devAdminJs',
		'sails-linker:devLandingJs',
		'sails-linker:devLicenseJs',
    'sails-linker:devHomeStyles',
    'sails-linker:devAppStyles',
    'sails-linker:devTeacherStyles',
    'sails-linker:devParentsStyles',
    'sails-linker:devSchoolStyles',
    'sails-linker:devAdminStyles',
		'sails-linker:devLandingStyles',
		'sails-linker:devLicenseStyles',
	'sails-linker:devLandingCustomStyles',
	'sails-linker:devTpl',
	'sails-linker:devJsJade',
	'sails-linker:devTplJade'
	]);
};
