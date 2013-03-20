Ext.define('MovieDatabase.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [],
    config: {
        items: [
            {
                xtype: 'movielist'
            }
        ]
    }
});
