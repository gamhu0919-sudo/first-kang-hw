const drawButton = document.getElementById('draw-button');
const numbersDisplay = document.querySelector('.numbers-display');

function drawNumbers() {
    numbersDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        let color;
        if (number <= 10) {
            color = '#fbc400';
        } else if (number <= 20) {
            color = '#69c8f2';
        } else if (number <= 30) {
            color = '#ff7272';
        } else if (number <= 40) {
            color = '#aaa';
        } else {
            color = '#b0d840';
        }
        circle.style.backgroundColor = color;
        numbersDisplay.appendChild(circle);
    }
}

drawButton.addEventListener('click', drawNumbers);

// Initial draw
drawNumbers();