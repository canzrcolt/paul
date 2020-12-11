
const container = document.querySelector('#container')
const roundedBox = document.querySelector('.rounded-box')
const arryText = Array.from(document.querySelectorAll('.text'))
const arryHidden = Array.from(document.querySelectorAll('.hidden'))
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')


const createTheme = (btn) => {
    const btnOne = btn.className === "btn1"
    const btnTwo = btn.className === "btn2"
    const btnThree = btn.className === "btn3"
    const btnOneOn = () => btn1.classList.toggle('btnOn')
    const btnTwoOn = () => btn2.classList.toggle('btnOn')
    const btnThreeOn = () => btn3.classList.toggle('btnOn')
    
    const themeOne = () => {
        container.classList.toggle('container-background');
        btnOneOn()
    }
    const themeTwo = () => {
        container.classList.toggle('ocean-background')
        btnTwoOn()
    }
    const themeThree = () => {
        container.classList.toggle('why-background')
        btnThreeOn()
    }
    
    if(btnOne){
        btn.addEventListener('click', themeOne)
        
    } else if(btnTwo){
        btn.addEventListener('click', themeTwo)
    } else if (btnThree){
        btn.addEventListener('click', themeThree)   
    }
} 

createTheme(btn1)
createTheme(btn2)
createTheme(btn3)

