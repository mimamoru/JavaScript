//名前付き関数
// 関数の内側から関数を参照することができます。
// 関数の外側からは見えません。
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // 自身を再度呼ぶために func を使用
    }
};
sayHi(); // Hello, Guest
// しかしこれは動作しません:
func(); // Error, func は未定義(関数の外からは見えません)

//sayHi の値が変わるかもしれない
let sayHi = function (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest"); // Error: sayHi is not a function
    }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Error, 入れ子の sayHi 呼び出しはこれ以上動作しません！