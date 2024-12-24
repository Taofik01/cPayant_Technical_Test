// stringManiuplation 

function transformString(input) {
    if (typeof input !== 'string') throw new Error('Input must be a string.');  //Check if the input is a string before any manipulation

    
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

    // We split the string into an array having one character to each set then we check for case and switch them and then we joined them back together
}

module.exports = { transformString };