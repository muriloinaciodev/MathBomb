function getElements() {
    divMenu = document.getElementById('menu');
    divGame = document.getElementById('game');
}

function startGame() {
    divMenu.style.display = 'none'
    divGame.style.display = 'block'
    divGame.children['input'].focus()
    streak = 0
    randomCalculation()
}

function randomCalculation (){
    let n1 = Math.floor(Math.random()*10)
    let n2 = Math.floor(Math.random()*10)
    res = n1*n2
    divGame.children['calculation'].innerHTML = `${n1} &times; ${n2}`
}

function inputEnter(event) {
    if (event.key == 'Enter') {
        if (divGame.children['input'].value == res) {
            randomCalculation()
            divGame.children['input'].value = '';
            streak++
            divGame.children['streak'].innerText = `Numero de Acertos: ${streak}`
        } else {
            alert(`Você acertou ${divGame.children['streak'].innerText} contas de tabuada`)
            location.reload()
        }
    }
}

