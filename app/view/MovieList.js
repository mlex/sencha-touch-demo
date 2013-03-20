Ext.define('MovieDatabase.view.MovieList', {
    extend:'Ext.dataview.List',
    xtype:'movielist',
    config:{
        title:'Movie List',
        data:[
            {title:"Star Wars", description:"In a galaxy far, far away..."},
            {title:"Lord of the Rings", description:"A ring to bind them all..."}
        ],
        itemTpl:'<b>{title}</b><p>{description}</p>'
    }
});