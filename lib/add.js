module.exports = (data) =>{
    //Always return a promise
    return new Promise(function(resolve) {
        resolve(parseInt(data.num1)+parseInt(data.num2))
    });

};

