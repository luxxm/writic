var http = require('http');
var qs = require('querystring');

var server = http.createServer(function (req, res) {
    if (req.method == "POST") {
        var recMsg = '';
        
        req.on("data", (data) => {
            recMsg += data;
        });

        req.on("end", () => {
            console.log(qs.parse(recMsg));
        });
    }
});

server.listen(8000);