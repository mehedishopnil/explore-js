function randomGenerator(n) {
    for (var i = 0; i < n; i++) {
        var RandomNum = Math.random() * 6;
        var output = Math.round(RandomNum);
        console.log(output); 
    }
}

console.log(randomGenerator(10));