// Map はオブジェクトとは違い、キーは文字列には変換されません。任意の型のキーが利用可能です。
// Map はキーとしてオブジェクトを使うこともできます。
let john = { name: "John" };

// 各ユーザに対し、訪問回数を保持しましょう
let visitsCountMap = new Map();
// john は map のキーです
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john) ); // 123
let visitsCountObj = {}; // オブジェクトを用意
// object Object] は オブジェクト のキーです
visitsCountObj[john] = 123; // john オブジェクトをキーとして使用
// That's what got written!
alert( visitsCountObj["[object Object]"] ); // 123

//map.set 呼び出しは map 自身を返すので、呼び出しを “チェーン” することができます:
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
// キー(野菜)の反復
for (let vegetable of recipeMap.keys()) {
alert(vegetable); // cucumber, tomateos, onion
}
// 値(量)の反復
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// [key, value] エントリーの反復
for (let entry of recipeMap) { // recipeMap.entries() と同じ
    alert(entry[0]+entry[1]); // cucumber500 (など)
}
recipeMap.forEach( (value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
  });



const obj = { banana: 3, orange: 5, meat: 6 }
let map = new Map();
map.set('1', 1);
map.set(1, 2);
map.set(obj, 4);

map.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); //1:1 ,1:2,[object Object]:4
  });
alert( map.get(obj) );//4

let obj2 = Object.fromEntries(map.entries()); //Object.fromEntries: Map から オブジェクト
Object.keys(obj2).forEach(function (key) {
  console.log(`${key}:${obj2[key]}`);//1: 2,[object Object]: 4
});
alert( obj2[obj]);//4

let map2 = new Map(Object.entries(obj2));//Object.entries(obj) オブジェクトから Map を生成
map2.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); //1: 2,[object Object]: 4
  });
alert( map.get(obj));//4

// map.keys() は配列ではなく、反復可能(iterable) を返すためです。
// Array.from を使うことで、それを配列に変換できます:
let map = new Map();
map.set("name", "John");
// Error: numbers.push is not a function
// let keys = map.keys();
// keys.push("more");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); // name, more

let set = new Set(["oranges", "apples", "bananas"]);
set.forEach((value, valueAgain, set) => {
    console.log(`${value}:${valueAgain}`);//oranges:oranges,apples:apples,bananas:bananas
});
// set.keys() – 値に対する iterable なオブジェクトを返します。
// set.values() – set.keys と同じで、Map との互換性のためです。
// set.entries() – [value, value] のエントリのための iterable なオブジェクトを返します。Map の互換性のために存在します。