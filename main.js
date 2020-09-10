let a = 0;
var b = 0;
function c() { }

console.log(b);

window.d = 1;
let d = 2;
console.log(d);






//debuggerは記述した地点で読み込みをストップしてくれる。

//varやfunctionで定義したものは、windowオブジェクトのプロパティとして値が保持される。→グローバルスコープ
//letやconstで定義したものは、scriptの方に表示される。→スクリプトスコープ

//グローバルオブジェクトは省略して記述できる。
//例) console.log(window.b);ではなく、console.log(b);

//JavaScriptでは、windowオブジェクトそのものをグローバルスコープとなる。
//一般的にはスクリプトスコープもグローバルスコープと呼ばれるが、実際には異なるものであるという認識も必要。(9行目)

