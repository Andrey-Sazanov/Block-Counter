let total = document.getElementById('total')
let type = document.getElementById('type')
let amount = document.getElementById('amount')
let env = 34        
const btn = document.getElementById('btn')
let amountOfStacks = 0
let info = document.getElementById('info')
btn.addEventListener('click',()=>{
    amountOfStacks = (amount.value/total.value)*34
    let block = {
        'type ':type.value,
        'amount ':amount.value,
        'amount of stacks ':amountOfStacks
    }
    info.innerHTML = ` Type of block: ${type.value} Amount of Stacks: ${amountOfStacks} Previous blocks : ${localStorage.getItem('block')}`
    localStorage.setItem('block',JSON.stringify(block))
    console.log('Где Мой Нос!?')
    env-=1
    if(env==0){
        info.innerHTML = "space ended"
    }
})
