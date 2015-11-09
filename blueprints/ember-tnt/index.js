module.exports = {
  description: '',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-tnt and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('tnt.tree', 'namlook/tnt.tree');
  }
};
