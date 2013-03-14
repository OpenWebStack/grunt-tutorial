module.exports = function(grunt){

	grunt.initConfig({
		
		//Stylus Task
		stylus:{
			compile:{
				files:{
					'css/app.css' : 'css/app.styl'
				}
			}
		},

		//Regarde Task
		regarde:{
			js:{
				files:['js/**/*.js', '**/*.html'],
				tasks:['livereload']
			},
			css:{
				files:['css/**/*.css'],
				tasks:['livereload']
			},
			stylus:{
				files:['css/**/*.styl'],
				tasks:['stylus']
			}
		},

		//Tiny LR server for Livereload
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

	//Live reload tasks
	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	//grunt plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-clear');
	grunt.loadNpmTasks('grunt-htmlrefs');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('gruntacular');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-ngmin');


	//OUR TASKS
	grunt.registerTask('build',[]);
	grunt.registerTask('dev',['livereload-start', 'connect', 'regarde']);

}

