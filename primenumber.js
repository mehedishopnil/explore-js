function primeNumber(n){
    for (var i =2; i < n; i++){
        if (n % i == 0){
            return "Your Number is Not a Prime Number";
        }
    }
    return "Your Number is a Prime Number";
}

console.log(primeNumber(139));