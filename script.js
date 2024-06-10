let a = +prompt("Raqamni kiriting:");
let kvadrat = '';

while (isNaN(a) || a / 1 === 0) {
    a = +prompt('Iltimos, raqam kiriting!');
}

if (a % 2 === 0) {
    a = a + 1;
}

for (let i = 0; i < a; i++) {
    kvadrat = '';
    for (let b = 0; b < a; b++) {
        if (i == 0 || i == a - 1 || b == 0 || b == a - 1 || i == b) {
            kvadrat += "[*]";
        } else {
            kvadrat += "   ";
        }
    }
    console.log(kvadrat);
}