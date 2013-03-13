Ext.define('MovieDatabase.controller.Movies', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            newMovieButton: '#new_movie_button'
        },
        control: {
            newMovieButton: {
                tap: 'showCreateMovieForm'
            },
            'movielist':{
                show: function() {this.getNewMovieButton().show()},
                hide: function() {this.getNewMovieButton().hide()},
            }
        }
    },
    showCreateMovieForm: function() {
        this.getMain().push({
            xtype: "movieform"
        });
    }
});
