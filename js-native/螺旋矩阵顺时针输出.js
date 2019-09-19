var test = [[1,2,3],[4,5,6],[7,8,9]];
var spiralOrder = function(matrix) {
	let result = [];
   while(true){
		if(matrix.length != 0&&matrix[0] != undefined&&matrix[0][0] != undefined)
        {
            result = result.concat(matrix.shift());
            matrix.forEach((item)=>{
               result = result.concat(item.splice(item.length-1,1));
            });

            if(matrix.length == 0||matrix[0] == undefined||matrix[0][0] == undefined){continue;}
            result = result.concat(matrix.pop().reverse());
            let temp = [];
            matrix.forEach((item)=>{
                temp = temp.concat(item.splice(0,1));
             });
             result = result.concat(temp.reverse());
            
        }else{
            break;
        }
    }
    return result;
};
console.log(spiralOrder(test));
