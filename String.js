let str = `Hello`;
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (空文字)
str[0] = 'h'; // エラー

let str = 'Hi';
alert( str[0].toLowerCase());  // h
alert( str ); // Hi

//すべての出現箇所
let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
//〜n は -(n+1) と全く同じ意味
//if (~str.indexOf(...)) は “もし見つかったら” 

let str = "stringify";

// これらは同じ文字列です
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
// ...が、slice は違います:
alert( str.slice(2, 6) ); // "ring" (同じ)
alert( str.slice(6, 2) ); // "" (空文字)
//slice とは違い負の値はサポートされていません。それらは 0 として扱われます。

// メソッド	選択対象…	負の値
// slice(start, end)	start から end まで	負の値を許可します
// substring(start, end)	start と end の間	負の値は 0 扱いです
// substr(start, length)	start から length 文字を取得	負の start を許可します