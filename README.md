A simple (mobile) Web Frontend for the [movie-database](https://github.com/mlex/movie-database) using Sencha Touch 2.2.
The application needs a running movie-database backend. The uri to the backend is defined in *app.js*

    //...
    Ext.application({
      name: 'MovieDatabase',

      baseUrl: 'http://localhost:8080/movies',
      //...
	  
	  
To start the backend, clone the [movie-database](https://github.com/mlex/movie-database) repository and run
    
	mvn jetty:run
	
To start the frontend change into the sencha-touch-demo folder and run your favorite webserver  (e.g. pythons SimpleHTTPServer or mongoose)

    # Using python's SimpleHTTPServer
    python -m SimpleHTTPServer
	
	# Using mongoose
	mongoose -p 8123 -r ./
	
