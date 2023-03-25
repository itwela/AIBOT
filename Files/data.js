const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}