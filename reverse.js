function ReverseString(string){
    var reverse = "";

    for(var i =0; i < string.length; i++){
        var chr = string[i];
        var reverse = chr + reverse;
    }
    return reverse;
}

var string = "I love my work verymuch";
var result = ReverseString(string);
console.log(result);