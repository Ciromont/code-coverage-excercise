const adder = require('../../services/adder');

describe("Test de suma", function(){
    let _numberA;
    let _numberB;

    it("Debería devolver la suma entre numberA y numberB", function(){
        _numberA = 6;
        _numberB = 7;

        const result = adder.add(_numberA, _numberB);

        expect(result).toEqual(13);
    });
}
)