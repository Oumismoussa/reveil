let paragraphe = document.querySelector('.paragraphe')

// if (navigator.vibrate){
//     paragraphe.innerText = 'Ca marche'
// } else{
//     paragraphe.innerText = 'Ca ne marche pas'
// }

// let vibrateS = document.querySelector('.button1')
// let vibrateP = document.querySelector('.button2')

// function vibrate(ms){
//     navigator.vibrate(ms);
// }

// vibrateP.addEventListener('click',function startVibrate(){ 
// navigator.vibrate([300,100,300,100])}
// );


let date1 = new Date();
let reveil = document.querySelector('.paragraphe')

let heurelocale = date1.toLocaleString('fr-FR',{
    hour: 'numeric',
    minute: 'numeric',
   });
document.querySelector('.paragraphe').innerHTML = heurelocale;
reveil.classList.add('paragraphemodif')

if( heurelocale == '14:05' ){
    navigator.vibrate([300,100,300,100])} else {
        paragraphe.innerText = 'Tu peux dormir'
    }