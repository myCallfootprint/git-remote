const { add } = require('../src/index');

test('Add', () => {
    const result = add( 2, 3 );

    expect( result ).toEqual( 5 );
});
