/*    
 * @license requirejs-plugin-config 0.0.1
 * Copyright(c) 2014, Rodney Robert Ebanks foss@rodneyebanks.com All Rights Reserved.
 * Available via the MIT or new BSD license.
 */

(function(){"use strict";define("config",["module"],function(module){var $config;function pluginLoad(name,req,onLoad,config){name==="*"?$config=config:$config=config[name]||{},onLoad($config)}function pluginNormalize(name,normalize){return name=normalize(name),name}function pluginWrite(pluginName,moduleName,write){var content=JSON.stringify($config);content='define("'+pluginName+"!"+moduleName+'", function(){\nreturn '+content+";\n});\n",write(content)}return{load:pluginLoad,normalize:pluginNormalize,write:pluginWrite}})})();