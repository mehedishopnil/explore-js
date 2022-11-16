var num = [4,6,8,5,4,3,6,4,2,7,4,9];

var UniqueName = [];

for (var i = 0 ; i < num.length; i++){
    var elements = num[i];

    var index = UniqueName.indexOf(elements);
    if (index == -1){
        UniqueName.push(elements);
    }

}

console.log(UniqueName); 