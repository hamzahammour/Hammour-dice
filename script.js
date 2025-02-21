let balance = 10;
function updateBalance() {
    document.getElementById("balance").innerText = `رصيد: ${balance} LTC`;
}
function rollDice() {
    let bet = parseFloat(document.getElementById("bet").value);
    let rollUnder = parseInt(document.getElementById("rollUnder").value);
    let result = document.getElementById("result");
    if (!bet || bet > balance) {
        result.innerText = "رهان غير صالح!";
        return;
    }
    if (!rollUnder || rollUnder < 1 || rollUnder > 100) {
        result.innerText = "رقم غير صالح!";
        return;
    }
    let roll = Math.floor(Math.random() * 100) + 1;
    if (roll < rollUnder) {
        balance += bet;
        result.innerText = `فزت! النرد: ${roll}`;
    } else {
        balance -= bet;
        result.innerText = `خسرت! النرد: ${roll}`;
    }
    updateBalance();
}
updateBalance();
