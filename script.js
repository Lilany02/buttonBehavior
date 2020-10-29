const text = document.getElementById('text')

const buttonOne = document.getElementById('button-one').addEventListener('click', function changeColor() {
        document.querySelector('#text').style.color = 'black';})
const buttonTwo = document.getElementById('button-two').addEventListener('click', function changeBackgroundColor() {
    document.querySelector('.logo').style.backgroundColor = 'red'} ) 
const buttonThree = document.getElementById('button-three').addEventListener('click', function addShadow() {
    document.querySelector('.logo').style.boxShadow = '30px 10px 4px #333'})

    //resetting the original state 
