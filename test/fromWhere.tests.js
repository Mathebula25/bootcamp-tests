
describe('Test my fromWhere function', function () {
    it('Should match right town with its reg number', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville');
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});