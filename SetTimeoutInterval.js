let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer 識別子
clearTimeout(timerId);
alert(timerId); // 同じ 識別子 (キャンセル後 null にはなりません 数値)

// 2秒のインターバルで繰り返し
let timerId = setInterval(() => alert('tick'), 2000);
// 5秒後に停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

//再帰的な setTimeout は実行の間の遅延を保証しますが、setInterval は保証しません
//setInterval
let i = 1;
setInterval(function() {
  func(i);
}, 100);
//再帰的な setTimeout
let i = 1;
setTimeout(function run() {
  func(i);
  setTimeout(run, 100);
}, 100);

//関数が setInterval/setTimeout に渡されたとき、内部参照がそこに作られスケジューラに保存されます。
//参照が他にない場合でもガベージコレクションの対象にはなりません。
// setInterval では cancelInterval が呼ばれるまで、関数はメモリ上に存在し続けます。