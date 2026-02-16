
let i1 = 3;

while (i1) {
  alert( i1-- );
} 



let i2 = 0;
while (++i2 < 5) alert( i2 ); // 1, 2, 3, 4

let i22 = 0;
while (i22++ < 5) alert( i22 ); // 1, 2, 3, 4, 5



for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4


for (let i4 = 0; i4 < 10; i4++) {
    if (i % 2 == 0) {
        alert( i4 );
    }
}


let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}



