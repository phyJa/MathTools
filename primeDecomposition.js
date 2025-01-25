function isPrime(number) {
    let divisor = 2
    while (divisor <= Math.floor(number/divisor)) {
        if(number % divisor === 0)
            return false
        else {
            divisor++
            continue
        }
    }
    return true
}

function decomposeInPrimeNumbers(number) {
    
    let num = number

    let primeFactor = 2

    let factors = []

    while (num > 1) {

        if(isPrime(primeFactor)) {
            if(num % primeFactor === 0) {
                num = num / primeFactor
                factors.push(primeFactor)
                continue
            } else
                primeFactor++
        } 

        else
            primeFactor++
    }

    return factors

}

let testNum = 56015

console.log(`The prime factors of ${testNum} are: ${decomposeInPrimeNumbers(testNum)}`)