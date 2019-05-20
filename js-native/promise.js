//js单线程，但是浏览器内部有许多线程。
/*异步执行：
    1.事件监听（事件）
    2.回调函数（ajax、fileAPI）
    3.promise语句（回调的另一种形式）+await/async
*/
//Node.js：无阻塞、高并发，所以异步执行很重要；
//回调嵌套会导致“回调地狱”，
//异步回调函数栈特殊，try、catch无法获取错误问题
//无法判断事件完成时间，回调之间难以联系，定义全局变量又容易被修改

var list = [1,2,3];

var square = function f1(num){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num*num)
        }, 1000);
    })
}
/*
//forEach导致本应该延时1秒的输出在三个一起完成后一起输出了
function test(){
    list.forEach(
        async function (x){
            var res = await square(x);
            console.log(res);
        }
    );
}
test();



//promise.then测试
list.forEach(
    function(x){
        var res = square(x).then = (
        console.log(x)
)
}
)

//for循环，这样的话每一个循环内都会等待promise里的延时一秒
async function asynctest(){
    for(let i=0;i<list.length;i++){
        var res = await square(list[i]);
        console.log(res);
    }
}
asynctest();*/
//递归
function loop(x){
    var list = [1,2,3];
    square(list[x]).then(()=>{
    console.log(list[x])
    x++;
    if(x<list.length){
        loop(x)
    }
})
}
loop(0);