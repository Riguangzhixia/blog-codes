Promise.all = arr => {
    let aResult = [];    //用于存放每次执行后返回结果
    return new Promise(function (resolve, reject) {
        let i = 0;
        next();    // 开始逐次执行数组中的函数(重要)
        function next() {
            arr[i].then(function (res) {
                aResult.push(res);    // 存储每次得到的结果
                i++;
                if (i === arr.length) {    // 如果函数数组中的函数都执行完，便resolve
                    resolve(aResult);
                } else {
                    next();
                }
            })
        }
    })
};

Promise.all = function (promise) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];
        if (promise.length === 0) {
            resolve(result)
        } else {
            function processValue(i, data) {
                result[i] = data;
                if (++index === promise.length) {
                    resolve(result)
                }
            }
            for (let i = 0; i < promise.length; i++) {
                Promise.resolve(promise[i]).then((data) => {
                    processValue(i, data)
                }, (err) => {
                    reject(err);
                    return err;
                })
            }
        }
    })
};