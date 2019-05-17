var list = [1,2,3,];

var square = function f1(num){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num*num)
        }, 1000);
    }).then((value) => {
        console.log(value)
    })
}

function test(){
    list.forEach(
        async function (x){
            var res = await square(x);
            console.log(res);
        }
    );
}
test();


/*list.forEach(
    function(x){
        var res = square(x).then = (
        console.log(x)
)
}

)*/

/*async function asynctest(){
    for(let i=0;i<list.length;i++){
        var res = await square(list[i]);
        console.log(res);
    }
}
asynctest();*/
