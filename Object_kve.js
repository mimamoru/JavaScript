// 通常のオブジェクトでは、次のメソッドが使えます。
// Object.keys(obj) – キーの配列を返します。
// Object.values(obj) – 値の配列を返します。
// Object.entries(obj) – [key, value] ペアの配列を返します。
// Map	Object
// 構文	map.keys()	Object.keys(obj)
// 戻り値	iterable	“本当の” Array
//obj.keys() ではなく、Object.keys(obj) と呼ぶ
//Object.* メソッドが単なる iterable ではなく “本当の” 配列オブジェクトを返す

//for..in ループのように、Object.keys/values/entriesはキーとして 
//Symbol(...) を使っているプロパティを無視します。
// Object.getOwnPropertySymbolsは Symbol を使っているキーのみの配列を返します。
// Reflect.ownKeys(obj) は すべての キーを返します。