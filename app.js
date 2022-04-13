const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')





const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    const raqam1 = Math.floor(Math.random() * 6 + 1)
const raqam2 = Math.floor(Math.random() * 6 + 1)



img1.src = `images/dice${raqam1}.png`
img2.src = `images/dice${raqam2}.png`

const h1 = document.querySelector('h1')


if (raqam1 > raqam2) {
    h1.textContent = 'player 1 win !'
} else if (raqam1 < raqam2){
    h1.textContent = 'player 2 win'
} else {
    h1.textContent = 'Draw'
}

})

// const img1 = document.querySelector('.img1')
// const img2 = document.querySelector('.img2')


// const random1 = Math.floor(Math.random() *6 + 1)
// const random2 = Math.floor(Math.random() *6 + 1)

// img1.ser = `images/dice${random1}.png`
// img2.ser = `images/dice${random2}.png`


// const h1 = document.querySelector('h1')


// if (random1 > random2) {
//     h1.textContent = 'Player 1 win !'
// } else if (random1 < random2) {
//     h1.textContent = 'Player 2 win !'
// } else {
//     h1.textContent = 'Draw!'
// }    