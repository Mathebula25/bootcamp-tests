describe('Test my greet function', function () {
    it('Should return "hello, mahlori" when "mahlori" is called', function () {
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});