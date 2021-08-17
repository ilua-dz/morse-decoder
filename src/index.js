const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

//declare Morse to Bin conformity Object
let morseBin = {};
for (let i in MORSE_TABLE) morseBin[i] = MORSE_TABLE[i];
for (let i in morseBin) {
  morseBin[i] = i.split('').reduce((binChar, x) => {
    if (x === '-') binChar.push('11')
    if (x === '.') binChar.push('10')
    return binChar;
  }, []);
  if (morseBin[i].length < 5)
    while (morseBin[i].length < 5) morseBin[i].unshift('00');
  morseBin[i] = morseBin[i].join('');
}

//declare Bin to Readable conformity Object
let binReadable = {};
for (let i in morseBin) {
  binReadable[morseBin[i]] = MORSE_TABLE[i]
}
binReadable["**********"] = ' ';

//convert input to array
let arr = [];
for (i = 10; i < a.length+1; i += 10) arr.push(a.slice(i - 10, i));

//construct output array
for (let key in binReadable) {
  for (i=0;i<arr.length;i++) {
    if (arr[i] === key) arr[i] = binReadable[key];
  }
}

//construct output string
return arr.join(''); 
}

module.exports = {
    decode
}
