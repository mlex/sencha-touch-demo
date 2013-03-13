Ext.define('MovieDatabase.store.MovieStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MovieDatabase.model.Movie',
        autoLoad: true
    }
});
