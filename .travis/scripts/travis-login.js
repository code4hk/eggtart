var https = require("https");
var querystring = require('querystring');

var key = process.argv[2];
if (key === undefined) {
    console.log("Argument missing");
    process.exit(-1);
}

var postData = JSON.stringify(
      {"github_token":key}
);

console.log(postData);

var options = {
  host: "api.travis-ci.org",
  accept: "application/vnd.travis-ci.2+json",
  port: 443,
  path: "/auth/github",
  method: 'POST',
  headers: {
          'Accept': 'application/vnd.travis-ci.2+json',
          'Content-Type': 'application/json',
          'Content-Length' : postData.length
  }
}


var req = https.request(options,function(res) {

    res.setEncoding('utf8');

    var data = "";

    res.on('data', function (chunk) {
        data += chunk;


    });

    res.on('end',function() {
	console.log(data);
    });

});

req.write(postData);
req.end();
