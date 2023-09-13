// 2-3 Q3
// 実行の初めにlogをクリアする
// console.clear();

// // 入力値 文字列の長さ
const strLength: number = 4;
// 入力値 文字列
const str: string = "baab";

// 出力用変数 同じ文字があった場合にカウントを増やす
let count: number = 0;

for (let i: number = 0; i < strLength; i++) {
  // 文字列のi番目を示すループ
  for (let j: number = i + 1; j < strLength; j++) {
    // console.log("2番目のループ",str[j])
    if (str[i] === str[j]) {
      count++;
    }
  }
}

console.log(count);
