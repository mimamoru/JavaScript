// JSON.stringify : オブジェクトをJSONに変換します。
// JSON.parse : JSONをオブジェクトに変換します。

//カスタムの “toJSON” JSON.stringifyは利用可能であればそれを自動で呼び出します
let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};
alert(JSON.stringify(room)); // 23
alert(JSON.stringify(meetup));
/*
{
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",
    "room": 23
}
*/

//JSON.parse
// meetup.date の値は文字列であり、Date オブジェクトではありません。
// Date になるような復帰関数を JSON.parse に渡しましょう。
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
schedule = JSON.parse(schedule, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
alert(schedule.meetups[1].date.getDate()); 