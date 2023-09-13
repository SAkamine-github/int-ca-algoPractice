// // 3-5 q1

// 入力値 基準の数字
const numA: number = 11;

let checked: boolean = true;

if (numA === 1) {
  checked = false;
}

// 入力値が素数か調べる
for (let i: number = 2; i < numA; i++) {
  if (numA % i === 0) {
    check = false;
  }
}

// 素数ならYes、素数でないならNoを出力する
if (checked) {
  console.log("Yes");
} else {
  console.log("No");
}
