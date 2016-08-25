module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: ['src/**/*.js']
    },
    clean: ['doc', 'dist', 'temp'],
    jsdoc: {
      doc: {
        src: ['src/**/*.js', 'README.md'],
        options: {
          destination: 'doc',
          template: "node_modules/ink-docstrap/template",
          configure: "jsdoc.conf.json"
        }
      }
    }
  });

  // Load grunt plugin tasks from pre-installed npm packages
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Local task: Copy README
  grunt.registerTask(
    'create_readme',
    'Copy README to package dist',
    function() {
      grunt.file.copy('README.md', 'dist/README.md');
      grunt.log.ok('Copied README to package dist.');
    }
  );

  // Local task: Copy meteor source files straight to dist folder.  Meteor
  // build process will handle minification and whatever other task have to
  // happen.
  grunt.registerTask(
    'copy_meteor_sources_to_dist',
    'Copying meteor sources to dist.',
    function() {
      grunt.file.copy('src', 'dist');
      grunt.log.ok('Meteor sources copied unprocessed.');
    }
  );

  // Complete, combined build task
  grunt.registerTask('build', [
    'eslint',
    'clean',
    'jsdoc',
    'copy_meteor_sources_to_dist',
    'create_readme'
  ]);

};
