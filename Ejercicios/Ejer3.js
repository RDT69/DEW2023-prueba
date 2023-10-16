// Contar palabras.

function wordsCount(text, ...words) {
    let counts = Array(words.length).fill(0);
    words.forEach(w => {
        let index = text.indexOf(w);
        if (index >= 0) {
            counts[i]++;
            index = text.indexOf(w, inde+1);
        }

    });
    return counts;
}

let text = 'De las palabras de la lista la palabra está en la lista';
console.log(wordsCount(text, 'las'));