console.log('here we go');
function test(){
return new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log( value + ' world');
    });
}
async function astest(){
   var promi = new Promise(function (resolve, reject) {
        [1,2,3].forEach(async element => {
            await test();
        }); 
    });
    await promi;
}
astest();
!function (a){
    console.log(a)
    }(1)