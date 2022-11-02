const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Conta a quantidade de elefantes residentes', () => {
    const actual = handlerElephants('count');
    const expected = (4);
    expect(actual).toEqual(expected);
  })

  it('mapeia o nome dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = (['Ilana', 'Orval', 'Bea', 'Jefferson',]);
    expect(actual).toEqual(expected);
  })

  it('media de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = (10.5);
    expect(actual).toEqual(expected);
  })

  it('sem parametro na funcao', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  })

  it('retorna a localizacao dos elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toBe(expected);
  })

  it('retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toBe(expected);
  })

  // it('dias da semana sem monday', () => {
  //   const actual = handlerElephants('availability');
  //   const expected = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Tuesday'];
  //   expect(actual).toEqual(expected);
  // })
});