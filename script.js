const text = document.getElementById('text')

const buttonOne = document.getElementById('button-one').addEventListener('click', function changeColor() {
        document.querySelector('#text').style.color = 'black';})
const buttonTwo = document.getElementById('button-two').addEventListener('click', function changeBackgroundColor() {
    document.querySelector('.logo').style.backgroundColor = 'red'} ) 
const buttonThree = document.getElementById('button-three').addEventListener('click', function addShadow() {
    document.querySelector('.logo').style.boxShadow = '30px 20px 4px #999'})

    //resetting the original state 

/*
    const button = document.getElementsByClassName('button-container').addEventListener('dblclick', function doubleClick(){
        document.querySelector('.logo').style.backgroundColor = '#000'
        document.querySelector('#text').style.color = 'red';}    
    )


    */