Ext.define('MovieDatabase.view.MovieForm', {
    extend: 'Ext.form.Panel',
    xtype: 'movieform',

    config: {
        title: 'MovieForm',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        name: 'title',
                        xtype: 'textfield',
                        label: 'Title'
                    },
                    {
                        name: 'description',
                        xtype: 'textfield',
                        label: 'Description'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Save Movie',
                ui: 'confirm'
            }
        ]
    }
});