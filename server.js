 	// set up ========================
 	var express  = require('express');
    var app      = express();                               // create our app w/ express

    // configuration =================                      // set the static files location /public/img will be /img for users
    app.use(express.static(__dirname + ''));                 

    
    app.all('/*', function(req, res, next) {
    	// Just send the index.html for other files to support HTML5Mode

        res.sendFile('index.html', { root: __dirname });

    });


    // listen (start app with node server.js) ======================================
    app.listen(80);
    console.log("App listening on port 8080");	