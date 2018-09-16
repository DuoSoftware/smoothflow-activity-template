/**
 * Created by vmkde on 1/26/2018.
 */

const expect  = require('chai').expect;
const add = require('../lib/add');



describe('Calculation Actions', (done) => {

    it('Should add the inputs', async () => {

        let res = await add({'num1' : 1, 'num2' : 1});
        expect(res).to.equal(2);

    });

    it('Should return a function', () => {

        expect(add).to.be.a('function');

    });



});