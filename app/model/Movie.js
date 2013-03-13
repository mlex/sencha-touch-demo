Ext.define('MovieDatabase.model.Movie', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'}
        ]
    }
});
