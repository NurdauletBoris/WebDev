
alert( null || 2 || undefined ); // 2, takes the first truthy


alert( alert(1) || 2 || alert(3) ); // 1 then 2, because alert() returns undefined


alert( 1 && null && 2 ); // null, takes the first falsy


alert( alert(1) && alert(2) ); // 1 and then undefined, alert() returns undefined --> falsy


alert( null || 2 && 3 || 4 ); // 3, the result of 2&&3 -> 3, then null || 3 || 4 - first truthy -> 3


if (age >= 14 && age <= 90) {
    alert("Between 14 and 90 inclusively.")
}


if (!(age >= 14 && age <= 90)) {
    alert("Outside of range between 14 and 90 inclusively.")
}
if (age < 14 || age > 90) {
    alert("Outside of range between 14 and 90 inclusively.")
}


if (-1 || 0) alert( 'first' ); // truthy, -1 || 0 = -1
if (-1 && 0) alert( 'second' ); // falsy, -1 && 0 = 0
if (null || -1 && 1) alert( 'third' ); // truthy, null || -1 && 1  ->  null || 1  ->  1


let userName = prompt("Who's there?", '');

userName === 'Admin'
? (
    (pass => pass === 'TheMaster'
        ? alert('Welcome!')
        : pass === '' || pass === null
        ? alert('Canceled')
        : alert('Wrong password')
    )(prompt("Password?", ''))
    )
: userName === '' || userName === null
    ? alert('Canceled')
    : alert("I don't know you");

