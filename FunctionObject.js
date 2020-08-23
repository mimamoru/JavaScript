//関数名は “name” プロパティとしてアクセス可能
let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

//関数パラメータの数を返す別の組み込みのプロパティ “length”
//残りのパラメータはカウントされない
function many(a, b, ...more) { }
alert(many.length); // 2
function ask(question, ...handlers) {
    let isYes = confirm(question);
    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}
// 肯定的な解答では、両方のハンドラが呼ばれます
// 否定的な解答では、2つ目だけが呼ばれます
ask("Question?", () => alert('You said yes'), result => alert(result));

//カスタムプロパティ
function sayHi() {
    alert("Hi");
    // 何度実行したかカウントしましょう
    sayHi.counter++;
}
sayHi.counter = 0; // 初期値
sayHi(); // Hi
sayHi(); // Hi
alert(`Called ${sayHi.counter} times`); // 2度呼ばれました
//関数プロパティは時々クロージャを置き換えることができます。
function makeCounter() {
    // 次の代わり:
    // let count = 0
    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter;
}
let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1