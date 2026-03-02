/**
 * 로또 번호 생성 및 데이터 관련 순수 로직
 */

/**
 * 1~45 사이의 중복 없는 6개 번호 생성 및 정렬
 * @returns {number[]}
 */
export function generateOneSet() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * 번호 대역별 지정 색상 반환
 * @param {number} number 
 * @returns {string} Color Hex Code
 */
export function getNumberColor(number) {
    if (number <= 10) return '#fbc400';
    if (number <= 20) return '#69c8f2';
    if (number <= 30) return '#ff7272';
    if (number <= 40) return '#aaa';
    return '#b0d840';
}
