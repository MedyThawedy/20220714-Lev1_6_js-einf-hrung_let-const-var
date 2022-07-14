/* d = Deklaration */

let z = 34;
console.log(z);

/* ü = Überschreibung */

z = 67;
console.log(z);

/* d */

let x = 34;
console.log(x);

/* ü */
x = 67;
console.log(x);

// d
const y = 34;
console.log(y);

// ü wird eine Fehlermeldung verursachen
// Uncaught TypeError: Assignment to constant variable.
y = 67;
console.log(y);