function textToMorse(text) {
    const morseCode = {
        "A" : "· —"  , 
        "B" : "— · · ·",
        "C" : "— · — ·",
        "CH" : "— — — —",
        "D" : "— · ·",
        "E" : "·",
        "F" : "· · — ·",
        "G" : "— — ·",
        "H" : "· · · ·",
        "I" : "· ·",
        "J" : "· — — —",
        "K" : "— · —",
        "L" : "· — · ·",
        "M" : "— —",
        "N" : "— ·",
        "Ñ" : "— — · — —",
        "O" : "— — —",
        "P" : "· — — ·",
        "Q" : "— — · —",
        "R" : "· — ·",
        "S" : "· · ·",
        "T" : "—",
        "U" : "· · —",
        "V" : "· · · —",
        "W" : "· — —",
        "X" : "— · · —",
        "Y" : "— · — —",
        "Z" : "— — · ·",
        "0" : "— — — — —",
        "uno" : "· — — — —",
        "dos" : "· · — — —",
        "tres" : "· · · — —",
        "cuatro" : "· · · · —",
        "cinco" : "· · · · ·",
        "seis" : "— · · · ·",
        "siete" : "— — · · ·",
        "ochos" : "— — — · ·",
        "nueve" : "— — — — ·",
    };

    return text.toUpperCase()
        .split('')
        .map(char => morseCode[char] || '')
        .join('  ');
}

function morseToText(morse) {
    const morseCode = {
        "· —" : "A"  , 
        "— · · ·" : "B",
        "— · — ·" : "C" ,
        "— — — —" : "CH",
        "— · ·" : "D" ,
        "·" : "E" ,
        "· · — ·" : "F" ,
        "— — ·" : "G"  ,
        "· · · ·" : "H" ,
        "· ·" : "I"  ,
        "· — — —" : "J" ,
        "— · —":"K" ,
        "· — · ·" : "L" ,
        "— —" : "M" ,
        "— ·" : "N" ,
        "— — · — —" : "Ñ" ,
        "— — —" : "O" ,
        "· — — ·" : "P"  ,
        "— — · —" : "Q" ,
        "· — ·" : "R" ,
        "· · ·" : "S",
        "—" : "T",
        "· · —" : "U" ,
        "· · · —" : "V" ,
        "· — —" : "W"  ,
        "— · · —" : "X"  ,
        "— · — —" : "Y"  ,
        "— — · ·" : "Z"  ,
        "— — — — —": "0"
    };

    return morse.split('  ')
        .map(code => morseCode[code] || '')
        .join(' ');
}

const text = "Hola Mundo! 0";
const morsex = textToMorse(text);
console.log(morsex);

const decodedText = morseToText(morsex);
console.log(decodedText); 
