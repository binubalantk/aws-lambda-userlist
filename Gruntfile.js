var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
   lambda_invoke: {
      default: {
         options: {
            file_name: 'index.js'
         }
      }
   },
   lambda_deploy: {
      default: {
         function: 'sigmaListUser'
      }
   },
   lambda_package: {
        default: {
            options: {
                include_time:false
            }
    }
   }
});
grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])