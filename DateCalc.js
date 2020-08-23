//new Date や Date.parse で時刻を含まない日付文字列をパースすると、UTC 00:00:00
//new Date(2014, 10, 10) などとしたときは地方時 00:00:00
let date = new Date(2014,11,10);//Wed Dec 10 2014 00:00:00 GMT+0900 (日本標準時)
let date2 = new Date("2014-11-10");//Mon Nov 10 2014 09:00:00 GMT+0900 (日本標準時)

date.setDate(1); // 月の1日を設定します
alert( date );
date.setDate(0); // 最小日は1なので、先月の最後の日になります
alert( date ); // 31 Dec 2015

// Date.parse は経過時間をミリ秒単位で返す。
// Date を得るには new Date に渡す。
// new Date に直接文字列渡しても同じ挙動
msec = Date.parse("Thu, 06 Sep 2012 00:00:00 +0900"); // 1346857200000
date = new Date(msec); // Date
date = new Date("Thu, 06 Sep 2012 00:00:00 +0900"); // Date

//比較するときは getTime
s = "Thu, 06 Sep 2012 00:00:00 +0900"
new Date(s) == new Date(s) // false
new Date(s) === new Date(s) // false
new Date(s).getTime() == new Date(s).getTime() // true
new Date(s).getTime() === new Date(s).getTime() // true
