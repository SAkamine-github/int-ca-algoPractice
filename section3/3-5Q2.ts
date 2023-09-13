// 3-5 q2
// 整数 A と B の最大公約数を出力するプログラムを作成してください。
// ただし次の条件を満たすとき「 X は A と B の最大公約数である」と言います。
// 条件：X は A も B も割り切る 1 以上の整数の中で最大のものである

const numberA: number = 18;
const numberB: number = 30;

// 最大公約数を求める関数
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

console.log(gcd(numberA, numberB));
