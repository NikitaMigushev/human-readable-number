const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninenty'];
const hundred = 'hundred';


module.exports = function toReadable(number) {
    let numberToString = number.toString().split('');
    console.log(numberToString);
    if (numberToString[2] === '0') {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${tens[numberToString[1] - 1]}`
        return result;

    } else {
        let result = `${units[numberToString[0] - 1]} ${hundred} ${tens[numberToString[1] - 1]} ${units[numberToString[2] - 1]}`
        return result;
    }
}
