const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const elevenNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const hundred = 'hundred';


module.exports = function toReadable(number) {
    let numberToString = number.toString().split('');
    console.log(numberToString);

    // hundreds

    if (numberToString.length === 3 && numberToString[1] === '1' && numberToString[2] != '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${elevenNineteen[numberToString[2]-1]}`
        return result;
    }

    if (numberToString.length === 3 && numberToString[1] != '0' && numberToString[2] === '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${tens[numberToString[1] - 1]}`
        return result;
    }

    if (numberToString.length === 3 && numberToString[1] != '0' && numberToString[2] != '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${tens[numberToString[1] - 1]} ${units[numberToString[2] - 1]}`
        return result;
    }

    if (numberToString.length === 3 && numberToString[1] === '0' && numberToString[2] === '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred}`
        return result;
    }

    if (numberToString.length === 3 && numberToString[1] === '0' && numberToString[2] != '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${units[numberToString[2] - 1]}`
        return result;
    }

    // tens

    if (numberToString.length === 2 && numberToString[0] > 1 && numberToString[1] != '0') {
        let result = `${tens[numberToString[0] - 1]} ${units[numberToString[1] - 1]}`
        return result;
    }

    if (numberToString.length === 2 && numberToString[0] > 1 && numberToString[1] === '0') {
        let result = `${tens[numberToString[0] - 1]}`
        return result;
    }

    if (numberToString.length === 2 && numberToString[0] === '1' && numberToString[1] === '0') {
        let result = `${tens[0]}`;
        return result;
    }

    //from 10 to 19

    if (numberToString.length === 2 && numberToString[0] === '1' && numberToString[1] != '0') {
        let result = `${elevenNineteen[numberToString[1] - 1]}`
        return result;
    }

    if (numberToString.length === 2 && numberToString[0] > 1 && numberToString[1] === '0') {
        let result = `${tens[numberToString[0] - 1]}`
        return result;
    }

    //from 0 to 9

    if (numberToString.length === 1 && numberToString[0] != '0') {
        let result = `${units[numberToString[0] - 1]}`
        return result;
    }

    if (numberToString.length === 1 && numberToString[0] === '0') {
        let result = `zero`
        return result;
    }
}
