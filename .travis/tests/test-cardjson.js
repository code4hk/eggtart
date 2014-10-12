var assert = require("assert")
var CardJson = require("../cardjson.js")

describe('contentparser', function(){
    
    it('parse valid data', function(){
        var data = "__Time__\n2/10/2014\n\n__Description__\nDescription\n\n\n\n__Comment__\nYour Comment\n\n";
        
        var cardJson = new CardJson();
        var object = cardJson.parse(data);
        console.log(object);
        assert(object.hasOwnProperty("time") ,"Time field should be existed");
        assert(object.hasOwnProperty("description"));
        assert(object.hasOwnProperty("comment"));
        
        assert(object.time === "2/10/2014\n\n");
        
    })
});
