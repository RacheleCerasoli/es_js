let primitive = true;

let type = typeof primitive;

if (type === 'number') {
    console.log('Il valore di primitive è di tipo numerico.');
} else if (type === 'string') {
    console.log('Il valore di primitive è di tipo stringa.');
} else if (type === 'boolean') {
    console.log('Il valore di primitive è di tipo booleano.');
} else {
    console.log('Il tipo di primitive non è né numerico, né stringa, né booleano.');
}
