function add(a,b,c){
    return a+b+c;
}
function add1(x){
    return add.bind(undefined,x);
}

