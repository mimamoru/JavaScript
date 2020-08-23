let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
    this.current = this.from;
    return this;
    }, 
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
for (let num of range) {
    alert(num); // 1, そして 2, 3, 4, 5
}

let arrayLike = { // インデックスとlengthを持っている => 配列ライク
    0: "Hello",
    1: "World",
    length: 2
};
for (let item of arrayLike) {}// エラー (Symbol.iterator はないので)
let arr = Array.from(arrayLike); 
for (let item of arr) {
  alert(item);//ok
}