module.exports = function(grunt){

	grunt.initConfig({
		//WE PUT OUR TASKS IN HERE
	});

	grunt.registerTask('build',[/* We can add our tasks from initConfig here */]);

}

/**

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

*/