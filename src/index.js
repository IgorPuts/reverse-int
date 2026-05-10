module.exports = function reverse(n) {
  const abs = String(Math.abs(n));
  const arr1 = abs.split('');
  const arr2 = arr1.reverse();
  const result = arr2.join('');
  const reversnum = Number(result);
  return reversnum;
};
