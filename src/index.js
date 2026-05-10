module.exports = function reverse(n) {
    let number = Math.abs(n) + '';
    let string = '';
    for (let i = number.length - 1; i >= 0; i--) {
      string += number[i];
    }
    return Math.abs(+string);
};
