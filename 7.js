function sumOfNodes(l) {
  let leftCount = Math.pow(2, l - 1);

  let v = [];

  for (let i = 1; i <= l; i++) {
    v.push([]);
  }

  for (let i = 1; i <= leftCount; i++) {
    v[l - 1].push(i);
  }

  for (let i = l - 2; i >= 0; i--) {
    let k = 0;

    while (k < v[i + 1].length - 1) {
      v[i].push(v[i + 1][k] + v[i + 1][k + 1]);
      k += 2;
    }
  }

  let sum = 0;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < v[i].length; j++) {
      sum += v[i][j];
    }
  }

  return sum;
}

let l = 3;

console.log(`Sum of all nodes : ${sumOfNodes(l)}`);
