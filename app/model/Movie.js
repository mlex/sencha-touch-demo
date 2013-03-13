Ext.define('MovieDatabase.model.Movie', {
    extend: 'Ext.data.Model',

    config: {
        strategy: 'uuid',
        fields: [
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'}
        ]
    }
});
