Ext.define('MovieDatabase.model.Movie', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: [
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'}
        ],
        proxy:{
            url: MovieDatabase.app.baseUrl,
            headers:{
                'Accept':'application/json'
            },
            type:'rest',
            reader:{ type:'json' }
        }
    }
});
