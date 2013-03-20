Ext.define('MovieDatabase.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [],
    config: {
        items: [
            {
                title: 'Movie Database',
                html: 'Hello World'
            }
        ]
    }
});
