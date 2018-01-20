const { add, multiply } = require('../src/index');

test('Add', () => {
    const result = add( 2, 3 );

    expect( result ).toEqual( 5 );
});

test('Multiply', () => {
    const result = multiply( 2, 3 );

    expect( result ).toEqual( 6 );
});
