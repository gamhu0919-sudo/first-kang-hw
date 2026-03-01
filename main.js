const drawButton = document.getElementById('draw-button');
const resultsContainer = document.getElementById('results-container');
const themeToggle = document.getElementById('theme-toggle');
const setCountSelect = document.getElementById('set-count');

// Theme toggle logic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

function generateOneSet() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function getNumberColor(number) {
    if (number <= 10) return '#fbc400';
    if (number <= 20) return '#69c8f2';
    if (number <= 30) return '#ff7272';
    if (number <= 40) return '#aaa';
    return '#b0d840';
}

function drawAllSets() {
    resultsContainer.innerHTML = '';
    const numSets = parseInt(setCountSelect.value);

    for (let i = 0; i < numSets; i++) {
        const sortedNumbers = generateOneSet();
        const row = document.createElement('div');
        row.classList.add('numbers-display');

        for (const number of sortedNumbers) {
            const circle = document.createElement('div');
            circle.classList.add('number');
            circle.textContent = number;
            circle.style.backgroundColor = getNumberColor(number);
            row.appendChild(circle);
        }
        resultsContainer.appendChild(row);
    }
}

drawButton.addEventListener('click', drawAllSets);

// Initial draw
drawAllSets();