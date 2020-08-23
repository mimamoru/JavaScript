let fruits = ["Apple", "Orange", "Plum"];
// 配列要素の反復処理
for (let fruit of fruits) {
    alert(fruit);
}
//配列に対しては for..in は使うべきではありません。
for (let key in arr) {
    alert(arr[key]); // Apple, Orange, Pear
}

//配列をクリアする最もシンプルな方法は arr.length = 0;
let arr = [1, 2, 3, 4, 5];
arr.length = 2; // 2つの要素に切り捨てる
alert(arr); // [1, 2]
arr.length = 5; // length を戻す
alert(arr[3]); // undefined: 値は返ってきません

//配列は Symbol.toPrimitive を持っておらず、valueOf もなく、toString 変換のみを実装しているため、
//[] は空文字列になり、[1] は "1" に、[1,2] は "1,2" になります。
alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"

let arr = ["a", "b"];
arr.push(function () {
    alert(this);
})
alert(arr);// "a","b",function(){alert(this );}
arr[2](); // "a","b",function(){alert(this );}

let arr = ["I", "go", "home"];
delete arr[1]; // "go" を削除
alert(arr[1]); // undefined
// now arr = ["I",  , "home"];
alert(arr.length); // 3

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // インデックス 1 から 1 要素を削除
alert(arr); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// 最初の 3 要素を削除し、別のものに置換
let e = arr.splice(0, 3, "Let's", "dance");
alert(e)//"I", "study", "JavaScript"
alert(arr)//"Let's", "dance","right", "now"

//開始インデックス "start" から "end" let str = "test";
let arr = ["t", "e", "s", "t"];
alert(str.slice(1, 3)); // es
alert(arr.slice(1, 3)); // e,s
alert(str.slice(-2)); // st
alert(arr.slice(-2)); // s,t("end" は含みません)

let arr = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};
alert(arr.concat(arrayLike)); // 1,2,[object Object]
//配列のようなオブジェクトが Symbol.isConcatSpreadable プロパティを持つ場合、代わりにその要素が追加
let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
alert(arr.concat(arrayLike)); // 1,2,something,else

arr.forEach(function (item, index, array) {
    // ... item に対して何か処理をする
});

// arr.indexOf(item, from) はインデックス from から item を探し、見つかった場所のインデックスを返します。そうでない場合は -1 になります。
// arr.lastIndexOf(item, from) は同じですが、右から左に見ていきます。
// arr.includes(item, from) はインデックス from から item を探し、見つかった場合、true を返します。
let arr = [null, 0, false];
delete arr[1];
alert(arr.indexOf(null)); //0
alert(arr.indexOf(false)); //2
alert(arr.indexOf(undefined)); // -1
alert(arr.indexOf(NaN)); // -1(0 になるべきですが, === 等値は NaN では機能しません)
alert(arr.includes(undefined)); //true
alert(arr.includes(NaN)); //true

//arr.find メソッド arr.findIndex メソッドはインデックスを返します
//arr.filter(fn)
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

//arr.map 
let result = arr.map(function (item, index, array) {
    // item の代わりに新しい値を返します
})
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
alert(lengths); // 5,7,6

//arr.sort アイテムは、デフォルトでは文字列としてソート  arr.reverse は arr 内の要素の順序を逆転
let arr = [1, 2, 15];
arr.sort();
alert(arr);  // 1, 15, 2
arr.sort((a, b) => a - b);
alert(arr);  // 1, 2, 15

//arr.reduce と arr.reduceRight 
let value = arr.reduce(function (previousValue, item, index, arr) {
    // ...
}, initial);
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

//find、filter、map　のような関数を呼び出すほとんどの配列メソッドは、sort の例外を除いて、任意の追加パラメータ thisArg を受け取ります。
//thisArg パラメータの値は func での this
let user = {
    age: 18,
    younger(otherUser) {
        return otherUser.age < this.age;
    }
};
let users = [
    { age: 12 },
    { age: 16 },
    { age: 32 }
];
// user より若いすべてのユーザを見つけます
let youngerUsers = users.filter(user.younger, user);