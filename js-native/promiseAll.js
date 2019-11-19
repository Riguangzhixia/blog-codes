Promise.all = function (promise) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];
        if (promise.length === 0) {
            resolve(result)
        } else {
            function processValue(i, data) {
                result[i] = data
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