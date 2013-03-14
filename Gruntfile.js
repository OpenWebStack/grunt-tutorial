module.exports = function(grunt){

	grunt.initConfig({
		
		regarde:{
			dev:{
				files:[
					'js/**/*.js',
					'css/**/*.css',
					'templates/**/*.html',
					'index.html'
				],
				tasks:['livereload']
			}
		},

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

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	grunt.registerTask('build',[/* We can add our tasks from initConfig here */]);
	grunt.registerTask('dev',['livereload-start', 'connect', 'regarde']);

}

