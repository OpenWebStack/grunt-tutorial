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

		clean:{	
			build: 'build',
			tempbuild : 'build/temp'
		},

		concat:{
			js:{
				src:[
					'js/angular.js',
					'js/app.js',
					'build/temp/templates.js',
					'js/**/*.js'
				],
				dest:'build/app.js'
			},
			css:{
				src:['css/**/*.css'],
				dest:'build/app.css'
			}
		},

		uglify:{
			app:{
				src:['build/app.js'],
				dest:'build/app.js'
			}
		},

		htmlrefs:{
			options: {
				file: { 
					buildNumber: 47878 //todo generate unique from contents of file for each file
				}
			},
      		build: {
				src: 'index.html',
				dest: 'build/'
			}
		},

		ngtemplates:{
			options:{base:'app'},
			app:{
				src:['templates/**/*.html'],
				dest:'build/temp/templates.js'
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
	/*
		Added ngtemplates
			- run 'grunt build'
			- checkout the build dir afterwards, see the index.html
			- still won't run, run because our stuff isn't build safe
				- explain build-safe - we need the ngmin to make it build safe for us

		1 - clean:build - cleans out the build directory
		2 - stylus - compile our stylus stuff, incase we didn't have regarde running
		3 - ngtemplates - PRECOMPILE THE TEMPLATES, SO THAT THEY ARE INLINED JS, AND 
		    			  INCLUDED IN THE BUILD
		4 - concat - concat all our js/css files into one
		5 - uglify - minifiy and obfuscate our js
		6 - htmlrefs - remove/replace specified html pieces during the build
		7 - clean:tempbuild - REMOVE THE TEMP FOLDER USED DURING THE BUILD
	*/
	grunt.registerTask('build',['clean:build', 'stylus', 'ngtemplates', 'concat', 'uglify', 'htmlrefs']);
	grunt.registerTask('dev',['livereload-start', 'connect', 'regarde']);

}

