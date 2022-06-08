const input = document.querySelector('#input');
const bth = document.querySelector('#bth');
const result = document.querySelector('#result');
const total = document.querySelector('#total')
let i = 0

//add event

bth.addEventListener('click', (e) => {
    if (input.value === '') return 
    createDeleteElements(input.value)
    input.value = ''
})



// create and delete todo
function createDeleteElements(value) {
    i++
    const li = document.createElement('li')
    const bth = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    bth.className = 'bth'
    bth.textContent = 'Удали, не позорься!!!'
    li.appendChild(bth)

    // remove todo
    bth.addEventListener('click', (e) => {
        i--
        
        total.textContent = i
        result.removeChild(li)
        
    })

    //toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

total.textContent = i

    result.appendChild(li)
}