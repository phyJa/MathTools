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

function mmc(...numbers) {
    
    let newNumbers = numbers

    let mmc = 1

    let divisor = 2

    let divisorWasApplied
    
    while(
        newNumbers.some(
            (element) => (element > 1)
        )
    ) {
        divisorWasApplied = false
        for(let i = 0; i < newNumbers.length; i++) {
            if(isPrime(divisor)) {
                if(newNumbers[i] % divisor === 0) {

                    newNumbers[i] /= divisor

                    if(!divisorWasApplied) {
                        mmc *= divisor
                        divisorWasApplied = true
                    }
                } 
            }
        }

        if(
            newNumbers.every(
                (number) => number % divisor !== 0
            )
        )  divisor++
    }
    return mmc
}

function mdc(...numbers) {
    
    let newNumbers = numbers

    let mdc = 1

    let divisor = 2
    
    while(
        newNumbers.some(
            (element) => (element > 1)
        )
    ) {

        if(
            newNumbers.every(
                (number) => number % divisor === 0
            )
            
            &&

            isPrime(divisor)
        ) {

            mdc *= divisor

            for(let i = 0; i < newNumbers.length; i++)
                newNumbers[i] /= divisor
    
        }
        
        else if(
            newNumbers.every(
            (number) => number % divisor !== 0
        )) divisor++

        else {
            
            for(let i = 0; i < newNumbers.length; i++) {
                if(isPrime(divisor)) {
                    if(newNumbers[i] % divisor === 0) {
                        newNumbers[i] /= divisor
                    } 
                } else divisor++
            }
        }
       
        
        //console.log(newNumbers)
        
    }

    return mdc

}

console.log(mdc(99, 9, 69))

//console.log(`The prime factors of ${testNum} are: ${decomposeInPrimeNumbers(testNum)}`)