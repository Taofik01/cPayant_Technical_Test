// stringManiuplation 

function transformString(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string.');

    
    return input.split('').map((char) => {
        if ('aeiouAEIOU'.includes(char)){
            return '';
        } 
        else if (char  === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}

module.exports = { transformString };