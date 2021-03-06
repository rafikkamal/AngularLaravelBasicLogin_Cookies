const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss');

    mix.scripts([
    	'app.js'
    ], 'public/js/app.js');  

    mix.scripts([
    	'controllers/userController.js'
    ], 'public/js/controllers.js');  

    mix.scripts([
    	'models/userModel.js'
    ], 'public/js/models.js');  

    // mix.scripts([
    // 	'factories/authFactory.js'
    // ], 'public/js/factories.js');  

    mix.version([
        'js/app.js',
        'js/models.js',
        //'js/factories.js',
        'js/controllers.js'
    ]); 
});
