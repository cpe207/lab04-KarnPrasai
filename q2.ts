function arrayStringify(a) {
  let astring = "";
  for(let i = 0;i<a.length;i++) {
    astring += a[i];
  }
  return astring;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

//กานต์ ปราศัย 660610742