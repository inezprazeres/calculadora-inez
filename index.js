const number9 = document.querySelector('.number-9')
const number8 = document.querySelector('.number-8')
const viewfinder = document.querySelector('.viewfinder-numbers')
const sum =document.querySelector('.sum')

/*const number8 = document.querySelector('.number-8')
const number7 = document.querySelector('.number-7')
const number6 = document.querySelector('.number-5')
const number5 = document.querySelector('.number-5')
const number4 = document.querySelector('.number-4')
const number3 = document.querySelector('.number-3')
const number2 = document.querySelector('.number-2')
const number1 = document.querySelector('.number-1')
const number0 = document.querySelector('.number-0')
const plus = document.querySelector('.button-plus')
const openparentheses = document.querySelector('.button-openpparentheses')
const closeparentheses = document.querySelector('.button-closeparentheses')
const multiply = document.querySelector('.button-multiply')
const divide = document.querySelector('.button-divide')
const minus = document.querySelector('.button-minus')
const equal = document.querySelector('.button-equal')
const posneg = document.querySelector('.button-posneg')
const clear = document.querySelector('.button-clear')
const dot = document.querySelector('.button-dot')*/




/*click no botao 9 
comentario de varias linhas
asdasdasd*/

//comentario de uma linha
//DOM arvore de elementos que posso manipular no java

number9.addEventListener('click',function(){
    console.log('viewfinder', viewfinder.textContent)
    viewfinder.textContent = viewfinder.textContent + 9
})


number8.addEventListener('click',function(){
    console.log ('viewfinder', viewfinder.textContent)
    viewfinder.textContent = viewfinder.textContent + 8
})

sum.addEventListener('click', function() {
    viewfinder.textContent = viewfinder.textContent + '+'
    console.log('')
})


/*const plus = document.querySelector('.button-plus')
const openparentheses = document.querySelector('.button-openpparentheses')
const closeparentheses = document.querySelector('.button-closeparentheses')
const multiply = document.querySelector('.button-multiply')
const divide = document.querySelector('.button-divide')
const minus = document.querySelector('.button-minus')
const equal = document.querySelector('.button-equal')
const posneg = document.querySelector('.button-posneg')
const clear = document.querySelector('.button-clear')
const dot = document.querySelector('.button-dot')*/

console.log(number9)
console.log(number8)
console.log(number7)
console.log(number6)
console.log(number5)
console.log(number4)
console.log(number3)
console.log(number2)
console.log(number1)
console.log(number0)
