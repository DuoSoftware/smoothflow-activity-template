/**
 * Created by vmkde on 7/18/2018.
 */


const add = require('./lib/add');
const response = require('./response');


module.exports = {

    //General Information Smoothflow needs to know to before we can publish
    currentVersion: require('./package.json').version,

    //Add your activity reference here
    //eg : - activity : <your activity>
    //P.S : - you can only refer a single function for the activity, you can chain activities using the designer studio
    activity : add,

    //Add your activity name here
    //eg : - activity : <your activity name>
    activityName : 'add',

    label: 'Add Numbers',
    description: 'This activity will add 2 numbers',

    //Add expected names of input args to your activity
    //Placeholder name should begin with @
    //DataType name can be Integer, String or Float
    InputVariableNames : [
        {key: 'num1', placeholder:'@number1', required: true, "DataType": "Integer"},
        {key: 'num2', placeholder:'@number2', required: true, "DataType": "Integer"},

    ],

    //Your General Error message
    error : response.error,
    //Your General Success message
    error : response.success
};



