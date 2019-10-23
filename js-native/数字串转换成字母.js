var result = [''];
var types = 0;
function transform(str){
    if(str.slice(0) !== ''){
        let new1 = str.slice(1);
        var temp = result[types];
        result[types] += String.fromCharCode(parseInt(str.slice(0,1))+64);
        transform(new1);
        if(10 <= parseInt(str.slice(0,2)) &&  parseInt(str.slice(0,2)) <= 26){
            types++;
            let new2 = str.slice(2);
            result.push( temp + String.fromCharCode(parseInt(str.slice(0,2))+64));
            transform(new2);
        }
    }
}
transform('1111111111');
console.log(result);