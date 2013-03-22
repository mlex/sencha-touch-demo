Ext.define('MovieDatabase.controller.Movies', {
    extend: 'Ext.app.Controller',

    requires: 'Ext.MessageBox',

    config: {
        refs: {
            main: 'main',
            newMovieButton: '#new_movie_button'
        },
        routes: {
            'movies/new': 'showCreateMovieForm',
            'movies/:id': 'showEditMovieForm'
        },
        control: {
            newMovieButton: {
                tap: function() {
                    this.redirectTo("movies/new");
                }
            },
            'movielist':{
                show: function() {this.getNewMovieButton().show()},
                hide: function() {this.getNewMovieButton().hide()},
                itemtap: function(component, index, target, record) {
                    this.redirectTo("movies/"+record.getId());
                }
            },
            'movieform button': {
                tap: 'saveMovie'
            }
        }
    },

    showEditMovieForm: function(id) {
        var record = Ext.StoreManager.get('MovieStore').getById(id);
        if (record) {
            this.getMain().push({
                xtype:"movieform",
                record:record
            });
        }
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
                main.getActiveItem().refresh();
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
