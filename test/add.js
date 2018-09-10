/**
 * Created by vmkde on 1/26/2018.
 */

const expect  = require('chai').expect;
const add = require('../lib/add');



describe('Calculation Actions', (done) => {

    it('Should add the inputs', () => {

        expect(add({'num1' : 1, 'num2' : 1})).to.deep.equal(2);

    });

    it('Should return a function', () => {

        expect(add).to.be.a('function');

    });



});