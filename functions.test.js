const functions = require('./functions');

test('Probar la suma de 2 + 2 es igual 4',() =>{
    expect(2+2).toBe(4);
});

test('Probar la suma de 2 + 2 es igual 4 con una funcion',() =>{
    expect(functions.suma(2,2)).toBe(4);
});

test('Probar la suma de 2 + 2 No es igual 5',() =>{
    expect(functions.suma(2,2)).not.toBe(5);
});

test('Probar la resta de 6 + 2 es igual 4 con una funcion',() =>{
    expect(functions.resta(6,2)).toBe(4);
});

test('Should be null', () =>{
    expect (functions.isNull()).toBeNull();
});

test('Validar nombre usuario', ()=>{
    expect(functions.createUser()).toEqual({
        //console.log("Usuario: ",,
        //los expecto solo comparan, no pueden manejar console
        nombre:'Memo',
        apellido:'Vargas'
    });
});


test('Validar hola mundo',() =>{
    expect(functions.holaMundo()).toBe('¡Hola Mundo!')
});