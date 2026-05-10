module.exports = function reverse(n) {
  let number = `${Math.abs(n)}` + '';
  let string = '';
  for (let i = number.length - 1; i >= 0; i--) {
    string += number[i];
  }
  return `${+string}`;
};
const abs = String(Math.abs(n));
  const arr1 = abs.split('');
  const arr2 = arr1.reverse();
  const result = arr2.join('');
  const reversnum = Number(result);
  return reversnum;
