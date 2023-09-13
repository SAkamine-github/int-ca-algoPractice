// 2-3 Q2
// 1 以上 N 以下の整数のうち、 2 でも 3 でも 5 でも割り切れない数の個数を数えるプログラムを作成してください。

// 入力値;
const inputs: number = 40;

let result: number = 0;

for (let i: number = 1; i <= inputs; i++) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
    result += 1;
  }
}
console.log(result);
