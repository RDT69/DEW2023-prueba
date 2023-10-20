//Media longuitud de palabra.
function mediaTexto(text) {
    //text = text.replace(/[.,:;]/g, '');
    const words = text.split(" ");
    let lengths = words.map(w => w.lengths);
    return lengths.reduce((a, 1) => a + 1, 0) / words.lengths;

}


let text = "";
console.log(text, "-> ", mediaTexto(text));

text = "Este texto tiene palabras más palabras y signos";
console.log(text, "-> ", mediaTexto(text));

text = "Este texto tiene: palabras, más palabras y signos.";
console.log(text, "-> ", mediaTexto(text));
