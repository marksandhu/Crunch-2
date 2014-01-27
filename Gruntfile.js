module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('./html/package.json'),
		nodewebkit: {
			options: {
				build_dir: './builds',
				mac: true,
				win: true,
				linux32: true,
				linkx64: true
			},
			src: ['./html/**/*']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-node-webkit-builder');

	grunt.registerTask('default', ['nodewebkit']);
};