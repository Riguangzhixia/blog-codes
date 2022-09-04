setImmediate(function() {
    console.log(1);
});

setTimeout(function() {
    console.log(2.2);
}, 0);

new Promise(function(resolve) {
    console.log(3);
    resolve();
    console.log(4);
}).then(function() {
    console.log(5);
});


console.log(6);

process.nextTick(function() {
    console.log(7);
});

console.log(8);

async function getData(){
    console.log(9)
}

async function readData() {
    console.log(10);
    await getData();
    console.log(11);
}

readData();