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
                itemtap:'showEditMovieForm'
            },
            'movieform button': {
                tap: 'saveMovie'
            }
        }
    },

    showEditMovieForm: function(component, index, target, record) {
        this.getMain().push({
            xtype:"movieform",
            record:record
        });
    },

    saveMovie: function(component) {
        var main = this.getMain();
        var newMovieButton = this.getNewMovieButton();
        var form = component.up("movieform");

        var movie = form.getRecord();
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
            xtype: "movieform",
            record:Ext.create('MovieDatabase.model.Movie')
        });
    }
});
