module.exports = function(grunt){

	grunt.initConfig({
		//WE PUT OUR TASKS IN HERE
	});

	grunt.registerTask('build',[/* We can add our tasks from initConfig here */]);

}

/**
		FOR THE NEXT STEP, WE WILL NEED THIS


		ADD THIS AS AN INITCONFIG PROPERTY
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

	ADD THIS TO THE INDEX.HTML
	<script type="text/javascript">
		document.write('<script src=\"http://'
		  + (location.host || 'localhost').split(':')[0]
  		  + ':35729/livereload.js?snipver=1\"><\/script>')
	</script>

*/