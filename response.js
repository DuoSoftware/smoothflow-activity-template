module.exports = {

    error : () => {
        //Only values can change
        return({
            'code' : 400,
            'message' : 'your custom error message'
        })
    },

    success : () => {
        //Only values can change
        return({
            'code' : 200,
            'message' : 'your custom success message'
        })
    }
};
