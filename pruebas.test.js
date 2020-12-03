test('Probar Objetos',() =>{
    const datos = {one: 1};
    datos ['two'] = 2;
    expect(datos).toEqual({one: 1, two: 2});
});

test('Probar un for',() =>{
    for(var i=1; i < 10; i++){
        for (var j=1; j<10; j++){
            //console.log('Result: ',i+j)
            expect (i+j).not.toBe(0)
        }
    }
});

test ('Validaciones con suma',()=>{
    const suma=3+4;
    expect(suma).toEqual(7);
    expect(suma).not.toEqual(6);
    expect(suma).toBeGreaterThan(6);
    expect(suma).toBeGreaterThanOrEqual(7);
    expect(suma).toBeLessThan(9);
    expect(suma).toBeLessThanOrEqual(9.5);
});


test('Suma de numeros flotantes',() =>{
    const valor = 0.1+0.3;
    expect(valor).toBeCloseTo(0.4)
});

test('Esta cadena no contine I',() =>{
    expect ('team').not.toMatch(/I/);
});

test('contiene la palabra stop',() =>{
    expect ('Christoper').toMatch(/stop/);
})


const shoppingList = [
    'diapers',
    'kleenes',
    'trash bags',
    'papper towels',
    'beer',
];

test('the sopping list has beerr on it',()=>{
    expect (shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
})


test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).not.toContain('Memo');
  });