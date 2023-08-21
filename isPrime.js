
const isPrime = (num) => {
    if (num < 2) {
        return console.log(`${num} Is NOT Prime Number`)
    }
    // we will loop to num-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return console.log(`${num} Is NOT Prime Number`)
        }
    }
    return console.log(`${num} Is Prime Number`)
}

isPrime(13)
isPrime(12)
isPrime(2)
isPrime(9)
