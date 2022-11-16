function febonacci(n){
    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return[0, 1];
    }
    else{
        var febo = febonacci(n-1);
        var alternative = febo[n-1] + febo [n-2];
        febo.push(alternative);
        return febo;
    }

}

console.log(febonacci(10));