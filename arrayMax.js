function ArrarySum(num){
    var sum = 0;
    for (var i = 0; i < num.length; i++){
        var elements = num[i];
        sum = sum + elements;
    }
    return sum;
}

var num = [23,35,46,34,67,69,34];

console.log(ArrarySum(num));