/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-tnt',

    isDevelopingAddon: function() {
      return true;
    },

    included: function(app) {
        this._super.included(app);

        app.import(app.bowerDirectory + '/d3/d3.js');
        app.import(app.bowerDirectory + '/tnt.tree/build/tnt.tree.js');
    }
};
