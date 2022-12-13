let form = document.getElementById('calc-form');
let btn = document.getElementById('calc-btn');
let msg = document.getElementById('error-msg');
console.log(msg);
let inputA = document.getElementById('range-a');
let inputB = document.getElementById('range-b');
let resHolder = document.getElementById('res');
let resCon = document.getElementById('res-container');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('submitted');
    checkInput();
})

const alertInvalidInput = (msgContent) => {
    msg.innerHTML = msgContent;
    msg.classList.remove("hide");
    resCon.classList.add('hide');
}

const checkInput = () => {
    if (inputA.value === "" || inputB.value === "") {
        alertInvalidInput("Both inputs cannot be empty");
    }
    else if (isNaN(inputA.value) || isNaN(inputB.value)) {
        alertInvalidInput('Both inputs MUST be a number');
    }
    else if (Number(inputA.value) < 0 || Number(inputB.value) < 0) {
        alertInvalidInput('Both inputs MUST be a number');
    }
    else if (Number(inputA.value) > Number(inputB.value)) {
        alertInvalidInput('a must be less than b');
    }
    else {
        msg.classList.add('hide');
        resHolder.innerHTML = calcSum(Number(inputA.value), Number(inputB.value));
        resCon.classList.remove('hide');
        console.log
    }
}

const isPrime = (a) => {
    if (a <= 1) return false;
    if (a === 2) return true;
    for (let i = 2; i * i < a * a; i++) {
        if (a % i == 0) return false;
    }
    return true;
}

const calcSum = (a, b) => {
    let res = 0;
    console.log(`${a} ${b}`)
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) res += i;
    }
    console.log(res);
    return res;
}