module.exports = function(grunt) {
  grunt.initConfig({
    uglify : {
      dist : {
        files : {
          'dist/js/scripts.js' : 'js/scripts.js'
        }
      }
    },
    htmlmin : {
      dist : {
        options : {
          removeComments : true,
          collapseWhitespace : true
        },
        files : {
          'dist/index.html' : 'index.html'
        }
      }
    },
    cssmin : {
      options : {
        shorthandCompacting : true
      },
      dist : {
        files : {
          'dist/css/style.css' : 'css/style.css'
        }
      }
    },
    watch:{
			options:{livereload:true},
			files:['*/**','dist/**'],
			tasks:[]
		},
  		express:{
  			all:{
  				options:{
  					port:4500,
  					hostname:'localhost',
            bases:['./dist'],
  					livereload:true
  				}
  			}
  		}

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin']);
  grunt.registerTask('server', ['express', 'watch']);
}
