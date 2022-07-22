let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let triangulo = document.getElementById('triangulo')
let result = document.getElementById('result')



function teste() {
    console.log(triangulo.style.borderWidth = a.value > 0 ? a.value : 8 + 'em 0 0 10em')
        // a + b = c
    if (b.value !== '' && c.value !== '') {
        console.log('salve')
        let r = Math.hypot(b.value, c.value)
        result.innerHTML = r
        console.log(r)
    }

}



// let input = document.getElementById('visor');
// let buttons = document.getElementsByClassName('btn');
// var changes = ['clear', 'del'];

// var symbols = ['+', '='];

// let teste = [];
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         if (changes.indexOf(buttons[i].value) === -1) {
//             input.value += buttons[i].value
//             if (buttons[i].value === 'r') {
//                 calcular()
//             }
//         } else {
//             if (buttons[i].value === changes[0]) {
//                 input.value = ''

//             } else {
//                 var caracter = input.value
//                 caracter = caracter.slice(0, -1)
//                 input.value = caracter
//             }
//         }
//     })
// }
// function calcular() {

//     var vis = input.value;
//     console.log('vis: ' + vis)
//     var nvis = vis.charAt(vis.length - 1);
//     console.log('nvis: ' + nvis)
//     vis = vis.slice(0, -1);
//     input.value = vis;

//     var resultado = 0;
//     resultado = input.value;
//     var conta = resultado.split('=')

//     console.log(conta[1])
//     var expo = conta[1].split('+')
//     for (let i = 0; i < expo.length; i++) {
//         var resul = (expo[i] ** 2)
//         resul += resul
//         console.log(resul)
//     }
//     input.value = eval(conta[1]);
//