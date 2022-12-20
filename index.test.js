const { sum, inOneHour } = require('./index.js');

describe('funções de cálculo', ()=> {
    it('soma de dois números', ()=> {
        expect(sum(1,2)).toBe(3);
    });
});

describe('funções de tempo', ()=> {
    it('retorno do tempo em uma hora', ()=> {
        const realDateNow = Date.now.bind(global.Date);

        global.Date.now = () => 0;
        expect(inOneHour()).toBe(3600000);

        global.Date.now = realDateNow;
        console.log(global.Date.now());
    });
});
