Ext.define('MovieDatabase.model.Movie', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        fields: [
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'}
        ],
        proxy:{
            url:'http://localhost:8080/movies',
            headers:{
                'Accept':'application/json'
            },
            type:'rest',
            reader:{ type:'json' }
        }
    }
});
