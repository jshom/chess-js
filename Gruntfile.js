module.exports = function(grunt) {
  grunt.initConfig({
    uglify : {
      options : {
        mangle : true,
        screwlE8 : true
      },
      dist : {
        files : {
          'js/scripts.js' : ['js/init.js', 'js/funs.js', 'js/main.js'],
          'dist/js/scripts.js' : ['js/scripts.js']
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
    imagemin : {
      dynamic : {
        files : [{
          expand : true,
          src : ['pieces/*.png'],
          dest : 'dist/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'imagemin']);
};
