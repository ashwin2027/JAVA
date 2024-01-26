function isFirstElementPrime(arr) {
    if (arr.length === 0) {
        return false; 
    }

    const firstElement = arr[0];

    if (firstElement < 2) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(firstElement); i++) {
        if (firstElement % i === 0) {
            return false; 
        }
    }

    return true; 
}


const array1 = [7, 14, 21, 28];
console.log(isFirstElementPrime(array1)); 


function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let frequencyMap = new Map();

    arr.forEach(item => {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    });

    let mostFrequentItem;
    let highestFrequency = 0;

    frequencyMap.forEach((frequency, item) => {
        if (frequency > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = frequency;
        }
    });

    return mostFrequentItem;
}


const array2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(findMostFrequentItem(array2)); 



for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}



function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

const array3 = [1, 2, 3, 4, 5];
console.log(sumOfSquares(array3)); 

