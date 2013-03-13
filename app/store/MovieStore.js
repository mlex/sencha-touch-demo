Ext.define('MovieDatabase.store.MovieStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MovieDatabase.model.Movie',
        data: [
            {title:"Star Wars", description:"In a galaxy far, far away..."},
            {title:"Lord of the Rings", description: "A ring to bind them all..."}
        ],
    }
});
