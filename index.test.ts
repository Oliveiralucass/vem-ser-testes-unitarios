import { ex10, ex2, ex6, ex7, ex9 } from "./index";

describe('teste do ex1', () => {
    test('verifica se resultado é tipo number', () => {
        expect(typeof ex2(12, 4)).toBe('number')
    })

    test('verifica resultado', () => {
        expect(ex2(12, 4)).toBe(16)
    })
});

describe('teste do ex6', () => {
    test('Verifica se o ano é bissexto', () => {
        expect(ex6(2048)).toBe(`é um ano bissexto`)
    })
})

describe('teste do ex7', () => {
    test('Verifica quantas vezes ANA BANANA apareceu no console', () => {
        expect(ex7()).toBe(9)
    });
})

describe('teste do ex9', () => {
    test('Verifica a diferença de idade entre dois valores', () => {
        expect(ex9(32, 12)).toBe(20)
    });
})

describe('teste do ex10', () => {
    test('Verifica quantas gerações passaram-se desde 1500 conforme ano informado', () => {
        expect(ex10("2054")).toBe(Math.floor((2054 - 1500) / 28))
    });

    test('Verifica se aceita string como parametro de ano', () => {
        expect(ex10("aaa")).toBeNaN()
    });
})