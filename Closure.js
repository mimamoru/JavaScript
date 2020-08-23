// エンジンは関数の最初の時点でローカル変数 x を知っています。
// が、let までは "初期化されていません" (利用できません)
let x = 1;
function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}
func();

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function () { // 射手(shooter) 関数
            alert(i); // その番号を表示するべき
        };
        shooters.push(shooter);/*  */
        i++;
    }
    return shooters;
}
let army = makeArmy();
army[0](); // 射手 番号 0 表示 10
army[5](); // また 番号 5 ですが表示は 10...
// ... すべての射手は 0, 1, 2, 3... の代わりに 10 が表示されます

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () { // shooter function
            alert(i); // should show its number
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5