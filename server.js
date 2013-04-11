var express = require('express'),
    fs = require('fs'),
    app = express.createServer(express.logger()),
    port = 5555,
    dirname = __dirname;

// app.use(express.static(dirname));

app.listen(port, function() {
  console.log("serving on port " + port + " files in " + dirname);
});

app.get('/tutorials/:id', function(req, res){
  fs.readFile( 'tutorials/' + req.params.id + ".html", 'utf8', function( err, data ) {
    console.log( data );
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send({
      id: req.params.id,
      html: data
    });
  });

});
