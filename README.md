# Do you wish you could safely get the Requirejs config object?

This plugin for [RequireJS](http://requirejs.org) will return the requirejs config object or any key from the config as specified.

## Install

You can use [bower](http://bower.io/) to install it easily:

```
bower install --save requirejs-plugin-config
```

## Plugins

 - **config** : For getting requirejs.config({path:{},shim:{}}) settings as a require.


## Documentation

## Basic usage

Put the plugins inside the `baseUrl` folder (usually same folder as the main.js
file) or create an alias to the plugin location:

main.js
```main.js
requirejs.config({
    baseUrl:'/js',
    paths : {
        //create alias to plugins (not needed if plugins are on the baseUrl)
        config: '../bower_components/requirejs-plugin-config/config'
    }
});

// use plugin 
define(['config!*', 'config!paths'], function(config, config1) {

config = {
    baseUrl:'/js',
    paths : {
        config: '../bower_components/requirejs-plugin-config/config'
    }
}

config1 = {
        config: '../bower_components/requirejs-plugin-config/config'
    }
});
```

## Removing plugin code after build

[r.js](https://github.com/jrburke/r.js/blob/master/build/example.build.js)
nowadays have the `stubModules` setting which can be used to remove the whole
plugin code:

```js
({
    // will remove whole source code of "json" and "text" plugins during build
    // JSON/text files that are bundled during build will still work fine but
    // you won't be able to load JSON/text files dynamically after build
    stubModules : ['json', 'text', 'requirejs-plugin-config']
})
```

For more plugins check [RequireJS Wiki](https://github.com/jrburke/requirejs/wiki/Plugins).

## Writing your own plugins

Check [RequireJS documentation](http://requirejs.org/docs/plugins.html) for
a basic reference and use other plugins as reference. RequireJS official
plugins are a good source for learning.

Also be sure to check [RequireJS Wiki](https://github.com/jrburke/requirejs/wiki/Plugins).

## License

requirejs-plugin-config is released under two licenses: new BSD, and MIT. You may pick the
license that best suits your development needs.

Copyright (c) 2015 Rodney Robert Ebanks foss@rodneyebanks.com
