// Logical Operators

// OR - ||
true || false;

1 || 2;

'Mustafe' || true;

undefined || false;

'' || -0;

0 || false || -1 || false;

// False Values
// false, null, undefined, "", 0, -0

// AND - &&
console.log('--------------------------');
1 && 2;

null && undefined;

1 && 'hello' && Infinity && 'Javascript';

'Mustafe' && 'Muse' && '2020' && '' && false;

// NOT Operator !

console.log('------------- NOT Operator ! ------------------');
!undefined;
!null;
!2020;
!0;
!NaN;
!'';
!'yes';
!false;
!true;
!!false;

// Nullish coalescing operator (??)
console.log('---------- Nullish Operator ?? ---------------');

0 || true;
0 ?? true;

null ?? true;
undefined ?? 2020;
false ?? 2020;
