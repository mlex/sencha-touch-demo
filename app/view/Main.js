Ext.define('MovieDatabase.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [],
    config: {
        items: [
            {
                xtype: 'movielist'
            }
        ],
        navigationBar:{
            items:[
                {
                    xtype:"button",
                    align:"right",
                    text:"New Movie",
                    id:"new_movie_button"
                }
            ]
        }
    }
});
