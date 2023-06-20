
describe('Test my countAllPaarl function', function () {
    it('Should return right regNum', function () {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);

        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });

});