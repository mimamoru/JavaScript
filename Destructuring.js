// 1番目、2番目の要素が不要の場合
let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title ); // Consul

//右辺は任意の反復可能(iterable)に対して使うことができます
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {
    name: "John",
    age: 30
  };
// key-value のループ
for (let [key, value] of Object.entries(user)) {
alert(`${key}:${value}`); // name:John, then age:30
}

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1); // Julius
alert(name2); // Caesar
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest[1].length);//21
alert(rest.length); // 2

//オブジェクトの非構造化 名前を認識
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
// { 元のプロパティ: ターゲットとなる変数 }=デフォルト
let {width: w=2000, height: h, title} = options;
// width -> w
// height -> h
// title -> title
alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200

//値がない場合に評価　width はプロンプトで尋ねられますが、 title は聞かれません。
let options = {
    title: "Menu"
  }; 
let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (プロンプトの結果)

//JavaScriptがメインコードフローの `{…}’ をコードブロックとして扱う動作しません
let title, width, height;
// この行はエラーです
//{title, width, height} = {title: "Menu", width: 200, height: 100};
// これでOKです
({title, width, height} = {title: "Menu", width: 200, height: 100});
alert( title ); // Menu

//複雑な非構造化
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
function showMenu({
    title = "Untitled",
    width: w = 100,  // width は w に
    height: h = 200, // height は h に
    items: [item1, item2] // items の最初の要素は item1 へ、次は item2 へ
}) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
}

showMenu(options);