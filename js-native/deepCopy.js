function copy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                result[key] = deepCopy(obj[key]);
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
var obj = {
    a:1,
    b:{name:'彭飞'},
    c:[1,2,3]
}
var ob2 = copy(obj)


function maxchildlen(s){
    var maxstr = '';
    var maxlen = 0;
    for(var i=0;i<s.length;i++){
        var char = s.charAt(i);
        var index = maxstr.indexOf(char);
        if(index === -1){
            maxstr += char;
            maxlen = maxlen<maxstr.length?maxstr.length:maxlen;
        }
        else{
            maxstr = maxstr.substr(index + 1) + char;
            //从当前重复项开始重新记录maxstr
        }
    }
    return maxlen;
}

function getDeep(treeData){
    let floor = 0;
    let max = 0;
    function getfloor(data,floor){
        data.forEach(e => {
            e.floor = floor;
            if(floor > max){
                max = floor;
            }
            if(!!e.children && e.children.length > 0){
                each(e.children,floor + 1)
            }
        })
    }
    each(treeData,1);
    return max;
}

function deepClone(item){
    if(typeof item != 'object'){
        return item;
    }
    const obj = {};
    for(let key in item){
        if(Array.isArray(item[key])){
            obj[key] = item[key].map(item => this.deepClone(item));
        }else if(Object.prototype.toString.call(item) === '[Object Object]'){
            obj[key] = this.deepClone(item[key])
        }
        else if(typeof item[key] === 'function'){
            obj[key] = item[key].bind(obj);
        }else{
            obj[key] = item[key];
        }
    }
    return obj;
}