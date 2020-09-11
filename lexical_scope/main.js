let a = 2;
function fn1() {
    let b = 1;
    function fn2() {
        let c = 3;
        console.log(2);
    }
    fn2();
}
fn1();

//レキシカルスコープとは、実行中のコードから見た外部スコープのこと。
//また、どのようにしてスコープを決定するかの仕様のこと。