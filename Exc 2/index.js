let form = document.getElementById('calc-form');
let btn = document.getElementById('calc-btn');
let msg = document.getElementById('error-msg');
console.log(msg);
let input = document.getElementById('input');
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
    if (input.value === "") {
        alertInvalidInput("Input cannot be empty");
    }
    else if (isNaN(input.value)) {
        alertInvalidInput('Input MUST be a number');
    }
    else if (Number(input.value) < 1 || Number(input.value) > 10) {
        alertInvalidInput('Input MUST be in range');
    }
    else {
        msg.classList.add('hide');
        genTri(Number(input.value));
        resCon.classList.remove('hide');
    }
}

const genTri = (n) => {
    resHolder.innerHTML = "";
    let s = "*";
    for (let i = 1; i <= n; i++) {
        resHolder.innerHTML += `${s}`;
        if (i !== n) resHolder.innerHTML += `<br>`;
        s += '*';
    }
}