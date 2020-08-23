alert( isFinite(" ") ); // true
alert( Infinity === Infinity ); // true
alert( NaN === NaN ); // false

valueOf()
//オブジェクトに基本データ型の値があればそれを返します。
alert( " ".valueOf() ); //空白
alert( "a".valueOf() )//a
alert(typeof "3".valueOf() )//string

//isNaN()を使うとNaNになり得る値はすべて「true」判定される
console.log(isNaN(0/0));//true
console.log(isNaN(NaN));//true
console.log(isNaN("こんにちは"));//true
console.log(isNaN(undefined));//true
//Number.isNaN()で正確に判定
console.log(Number.isNaN(0/0));//true
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("こんにちは"));//false
console.log(Number.isNaN(undefined));//false

//undefinedを判定するときは厳密等価演算子
console.log(null == undefined);//true
console.log(null === undefined);//false