const area = document.getElementById('area')
const contentWrapper = document.getElementById('content')
const modalResult = document.getElementById('modal-wrapper')
const overlay = document.getElementById('overlay')
const bntClose = document.getElementById('new-game')



let move = 0
let rusult = ''


area.addEventListener('click', e => {
	if (e.target.className == 'box') {
		move % 2 == 0 ? e.target.innerHTML = 'x' : e.target.innerHTML = '0'
		move++
		check()
	}
})


const check = () => {
	const boxes = document.getElementsByClassName('box')
	const arr = [
		//горизонталь
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		//вертикаль
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		//диагональ
		[0, 4, 8],
		[2, 4, 6]
	]

	for (let i = 0; i < arr.length; i++) {
		if (boxes[arr[i][0]].innerHTML == 'x' && boxes[arr[i][1]].innerHTML == 'x' && boxes[arr[i][2]].innerHTML == 'x') {
			result = 'крестики'
			prepareRes(result)
		} else if (boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
			result = 'нолики'
			prepareRes(result)
		}
	}
}

const prepareRes = (resWinner) => {
	contentWrapper.innerHTML = `Победили ${resWinner}`
	modalResult.style.display = 'block'
}


const closeModal = () => {
	modalResult.style.display = 'none'
	location.reload()
}

overlay.addEventListener('click', closeModal)
bntClose.addEventListener('click', closeModal)