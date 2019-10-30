//promise和settimeout
setTimeout(function() {
    console.log(1)
 }, 0);
 
 new Promise(function(resolve, reject) {
   console.log(2);
   for (var i = 0; i < 10000; i++) {
     if(i === 10) {console.log(10)}
     resolve();
   }
    console.log(3)
 }).then(function() {
    console.log(4)
 });
 async function as1(){
     console.log(11);
     await as2();
     console.log(1111111);
 }
 async function as2(){
     console.log(2222);
 }
 console.log(5);
 as1();
