function primeNumber(a) {
  if(a >= 2)
  {
    for(let i = 2; i <= a; i++)
      {
        if(i == a)
          {
            return "YES";
          }
        else if(a%i == 0)
        {
          return "NO";
        }
      }
  }
  else{
    return "NO";
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

//กานต์ ปราศัย 660610742
