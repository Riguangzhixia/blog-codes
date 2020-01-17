# 字符串转义

## *eval 不推荐

```-js
var expression = "1+6/2";
console.log(eval(expression));
```

## *Function构造器

```-js
var expression = "1+6/2";
let fn = new Function('return ' + expression);fn = new Function('return ' + expression);
console.log(fn());
```

## *setTimeOut|setInterval
