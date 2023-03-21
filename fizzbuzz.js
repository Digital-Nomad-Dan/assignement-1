function FizzBuzz(start, end){
    for(let num=start; num <= end; num++){
        if(num % 5 === 0 && num % 3 === 0){
            console.log("Fizzbuzz");
        }
        else if(num % 3 === 0){
            console.log("Fizz");
        }
        else if(num % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(num);
        }
        
    }
}

console.log(FizzBuzz(0, 25));