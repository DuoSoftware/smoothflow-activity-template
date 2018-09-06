module.exports = {

    error : () => {
        return({
            'code' : 400,
            'message' : 'your custom error message'
        })
    },

    success : () => {
        return({
            'code' : 200,
            'message' : 'your custom success message'
        })
    }
};
