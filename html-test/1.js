var map = {
    "13": "13米",
    "14": "14米",
    "18": "18米",
    "9.6": "9.6米",
    "4.2": "4.2米",
    "4.5": "4.5米",
    "11.7": "11.7米",
    "13.5": "13.5米",
    "7.6": "7.6米",
    "12.5": "12.5米"
};

function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}
var set = [...objToStrMap(map)].reverse();
set.forEach(function(item,index){
    console.log(item);
});