let initialValue = prompt("Введіть слово");
let value = initialValue.replace(/\s+/g, "").toLowerCase();
let len = value.length;

let isPalindrome;

for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
    isPalindrome = true;
}

if (isPalindrome) {
    alert(`Слово ${initialValue} є паліндромом`);
} else {
    alert(`Слово ${initialValue} Не є паліндромом`);
}
