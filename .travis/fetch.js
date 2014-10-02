var http = require('https');


var boardId = "9SJ3wCvt"
var requestUrl = "https://trello.com/b/" + boardId + ".json"

var options = {
  host: "trello.com",
  port: 443,
  path: '/b/' + boardId + ".json",
  method: 'GET'
};

http.request(options, function(res) {
    res.setEncoding('utf8');
    
    var data = "";
    
    res.on('data', function (chunk) {
        data += chunk;
        

    });
    
    res.on('end',function() {
        var object = JSON.parse(data);
        var listId;
        
        for (var i in object.lists) {
            if (object.lists[i].name == "Done") {
                listId = object.lists[i].id;
                break;
            }
        }
        
        if (listId === undefined) {
            console.error("List of Done not found");
            exit(-1);
        }
        
        console.log("List of finished card:");
        for (var i in object.cards) {
            var card = object.cards[i];
            if (card.idList == listId) {
                console.log(card.name);
            }
        }

        

    });
    
}).end();