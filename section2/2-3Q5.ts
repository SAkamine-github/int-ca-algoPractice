// 2-3 Q5
// N 個の整数 A 0,A 1,…,A N−1と整数 K が与えられます。
// これらの N 個の整数から、和が K 以下となるように 2 つの数を選ぶ方法は何通りあるか求めるプログラムを作成してください。
// ただし選んだ 2 つの整数の添字 (Aiの i) が等しくなってはいけないものとします。

const a: number = 2100;
console.clear();
const leapYearCheck = (year: number) => {
  // （1）西暦年号が4で割り切れる年をうるう年とする。
  if (year % 4 === 0) {
    console.log("(1)の判定内");
    // （2）（1）の例外として、西暦年号が100で割り切れ
    // 閏年の中でも、下記条件のときはNoを出力する
    if (year % 100 === 0) {
      // １００で割り切れる場合かつ400で割り切れない場合
      if (year % 400 !== 0) {
        console.log("No");
        // 100で割り切れないとき
      } else {
        console.log("Yes");
      }
      // 4で割り切れないとき
    } else {
      console.log("4で割り切れないとき");
      console.log("Yes");
    }
  } else {
    console.log("(1)の判定外");
    console.log("No");
  }
};

leapYearCheck(a);
