var array = generateArray();

function generateArray() {
    
    let numbers = [];
    
    for (var i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * (100 + 1));
        numbers.push(randomNumber);
    }

    array = numbers;

    showArray(numbers,"#array-desordenado")

    return numbers;
}

function showArray(numbers, idCampo){
    
    let array = document.querySelector(idCampo);

    var stringNumbers = '';

    numbers.forEach(number => {
        stringNumbers += `| ${number} `;
    });

    array.textContent = stringNumbers + '|';

}

function quickSort(array, lowOrig, highOrig) {

    let pivot = array[Math.floor((lowOrig + highOrig) / 2)];

    let low = lowOrig;
    let high = highOrig;


    while (low <= high) {

        while (array[low] < pivot) {
            low++;
        }

        while (array[high] > pivot) {
            high--;
        }

        if (low <= high) {
            let temp = array[low];
            array[low] = array[high];
            array[high] = temp;

            low++;
            high--;
        }

        if (lowOrig < high) {
            quickSort(array, lowOrig, high);
        }

        if (low < highOrig) {
            quickSort(array, low, highOrig);
        }
    }

    showArray(array, "#array-ordenado");

    return array;

}