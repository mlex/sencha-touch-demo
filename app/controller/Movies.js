Ext.define('MovieDatabase.controller.Movies', {
    extend: 'Ext.app.Controller',

    requires: 'Ext.MessageBox',

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
            },
            'movieform button': {
                tap: 'saveMovie'
            }
        }
    },

    saveMovie: function(component) {
        var main = this.getMain();
        var newMovieButton = this.getNewMovieButton();
        var form = component.up("movieform");

        var movie = Ext.create('MovieDatabase.model.Movie');
        form.updateRecord(movie);

        movie.save({
            success: function() {
                Ext.StoreManager.get('MovieStore').add(movie);
                main.pop();
            },
            failure: function() {
                Ext.Msg.alert('Error', 'Something went wrong.');
            }
        });
    },

    showCreateMovieForm: function() {
        this.getMain().push({
            xtype: "movieform"
        });
    }
});
