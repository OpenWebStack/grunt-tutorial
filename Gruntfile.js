module.exports = function(grunt){

	grunt.initConfig({
		
		regarde:{
			dev:{
				files:[
					'js/**/*.js',
					'css/**/*.css',
					'templates/**/*.html'
				],
				tasks:['livereload']
			}
		}
		//launch a tiny-lr server for livereload
	    connect: {
	      livereload: {
	        options: {
	          port: 9001,
	          middleware: function(connect, options) {
	            return [require('grunt-contrib-livereload/lib/utils').livereloadSnippet, (function(c,p) {
	              return c.static(require('path').resolve(p));})(connect, '.')]
	          }
	        }
	      }
	    }

	});

	grunt.loadNpmTask('grunt-regarde');
	grunt.loadNpmTask('grunt-contrib-connect');
	grunt.loadNpmTask('grunt-contrib-livereload');

	grunt.registerTask('build',[/* We can add our tasks from initConfig here */]);

}