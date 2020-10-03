// Number Conversion

// Explicit

let value = '200.00';

value; // string

Number(value);
parseInt(value);
parseFloat(value);

// Implicit Type Coercion - Automatic conversion to Number.

2 * '20';

3 - '2';

2020 * '2';

true * 2; // 2

null + 10; // 0 + 10  = 10

undefined * 2; //  NaN * 2 = NaN

true * false + 2 * null; //   1 * 0 + 2 * 0 = 0

true + '2' * (true + 10); //  true + "2" * 11   -> true + 22 = 23

// Boolean Type Conversion

// Explicit or Mannaul   use Boolean()  -- true or false
// 0, -0, "", undefined, null, NaN ---> false
// otherwise true

Boolean(undefined);
Boolean(null);
Boolean(NaN);
Boolean(0);
Boolean(-0);
Boolean('');

//
Boolean(' ');
Boolean('hello');
Boolean(1);

2 == 3;
2 == 2;
