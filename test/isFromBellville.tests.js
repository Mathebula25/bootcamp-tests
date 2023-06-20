
describe('Test my isFromBellville function', function () {
    it('Should return true if from bellville', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});