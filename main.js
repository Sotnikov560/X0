let step = 0
const cells = document.querySelectorAll('.cell')
const button = document.querySelector('button')

function check() {
    if (cells[0].innerHTML === 'X' && cells[1].innerHTML === 'X' && cells[2].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[0].innerHTML === '0' && cells[1].innerHTML === '0' && cells[2].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[3].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[5].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[3].innerHTML === '0' && cells[4].innerHTML === '0' && cells[5].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[6].innerHTML === 'X' && cells[7].innerHTML === 'X' && cells[8].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[6].innerHTML === '0' && cells[7].innerHTML === '0' && cells[8].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[0].innerHTML === 'X' && cells[3].innerHTML === 'X' && cells[6].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[0].innerHTML === '0' && cells[3].innerHTML === '0' && cells[6].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[1].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[7].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[1].innerHTML === '0' && cells[4].innerHTML === '0' && cells[7].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[2].innerHTML === 'X' && cells[5].innerHTML === 'X' && cells[8].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[2].innerHTML === '0' && cells[5].innerHTML === '0' && cells[8].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[0].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[8].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[0].innerHTML === '0' && cells[4].innerHTML === '0' && cells[8].innerHTML === '0') {
        alert('Победили Нолики')
    } else if (cells[2].innerHTML === 'X' && cells[4].innerHTML === 'X' && cells[6].innerHTML === 'X') {
        alert('Победили Крестики')
    } else if (cells[2].innerHTML === '0' && cells[4].innerHTML === '0' && cells[6].innerHTML === '0') {
        alert('Победили Нолики')
    }
}

cells.forEach((element) => {
    element.addEventListener('click', e => {
        // console.log(element)
        if (step % 2 === 0) {
            element.innerHTML = 'X'
        } else { element.innerHTML = '0' }
        step++
        check()
    })
})

button.addEventListener('click', e => {
    cells.forEach((element) => {
        element.innerHTML = ''
    })

})