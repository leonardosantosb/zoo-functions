const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem parametro na funcao', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('verifica se o zoo esta fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });

  it('verifica se o zoo esta aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = ('The zoo is open');
    expect(actual).toEqual(expected);
  });

  it('verifica se o zoo esta fechado', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });

  it('leia a mensagem 1', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error);
  });

  it('leia a mensagem 2', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error);
  });

  it('leia a mensagem 3', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error);
  });

  it('leia a mensagem 4', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error);
  });
});
