Ext.define('MovieDatabase.view.MovieList', {
    extend:'Ext.dataview.List',
    xtype:'movielist',
    config:{
        title:'Movie List',
        store:'MovieStore',
        itemTpl:'<b>{title}</b><p>{description}</p>'
    }
});
