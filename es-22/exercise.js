let primitive = true;

let type = typeof primitive;

switch (type) {
    case 'number':
        console.log('Il valore di primitive è di tipo numerico.');
        break;
    case 'string':
        console.log('Il valore di primitive è di tipo stringa.');
        break;
    case 'boolean':
        console.log('Il valore di primitive è di tipo booleano.');
        break;
    default:
        console.log('Il tipo di primitive non è definito.');
}