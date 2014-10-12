
var CardJson = function() {
    
}

CardJson.prototype.parse = function(input) {
    var res = {};
    var token = input.split("\n");
    
    var data = "";
    var field;
    
    var re=/^__([a-zA-Z][a-zA-Z0-9]*)__$/;
    for (var i in token) {
        var line = token[i];
        if (line.match(re) != null) {
            if (field != undefined) {
                res[field] = data;    
            }
            field = line.replace(re,"\$1").toLowerCase();
            data = "";            
        } else {
            data = data + line + "\n";
        }
    }
    
    if (field != undefined) {
        res[field] = data;    
    }
    
    return res;    
}

module.exports = CardJson;
