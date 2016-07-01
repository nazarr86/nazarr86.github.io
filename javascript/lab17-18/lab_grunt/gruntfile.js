module.exports = function (grunt) {
    //описываем конфигурацию
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //задача по обьединению всех файлов js в один
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/script.min.js'
            }
        },
        //задача по минификации всех файлов js
        uglify: {
            dist: {
                src: 'dist/js/script.min.js',
                dest: 'dist/js/script.min.js'
            }
        },
        //задача по обьединению и минификации всех файлов css в один
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* Minified CSS */'
                },
                files: {
                    'dist/css/style.min.css' : ['src/css/*.css']
                }
            }
        },
        //задача которая отслеживае все изменения в указаных папках
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify']
            },
            css: {
                files: ['src/css/*.css'],
                tasks: ['cssmin']
            }
        }
    });

    //подгружаем необходимые плагины
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //регестрируем задачу
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);
}