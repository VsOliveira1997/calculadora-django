let result = document.getElementById('result');
let error = document.getElementById('error');

function msg_error() {
    if (result.className == 'alert alert-success d-block') {
        result.classList.remove('d-block');
        result.classList.add('d-none');
    }
    error.classList.remove('d-none');
    error.classList.add('d-block');

}

function success(a, b) {
    let r = Math.hypot(a, b);
    if (error.className == 'alert alert-danger d-block') {
        error.classList.remove('d-block');
        error.classList.add('d-none');
    }
    result.classList.remove('d-none');
    result.classList.add('d-block');

    result.innerHTML = r.toFixed(2) + ' Esse é o valor da Hipotenusa';
    return r.toFixed(0);
}

function hipotenusa() {
    let b = document.getElementById('b');
    let c = document.getElementById('c');
    console.log(b);
    console.log(c);
    let triangulo = document.getElementById('triangulo');
    if (b.value !== '' && c.value !== '') {
        let x = success(b.value, c.value);
        triangulo.style.borderLeftWidth = x > '0' ? x + 'em' : 8 + 'em';
    } else {
        msg_error();
    }
}