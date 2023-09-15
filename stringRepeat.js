const repeatStr = (n, s) => {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
};

const repeatStr2 = (n, s) => {
  return s.repeat(n);
};

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "####"));
console.log(repeatStr(2, "ha"));

console.log(repeatStr2(3, "*"));
console.log(repeatStr2(5, "####"));
console.log(repeatStr2(2, "ha"));
