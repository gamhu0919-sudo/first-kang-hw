/**
 * 화면 렌더링 및 UI 업데이트 로직
 */
import { getNumberColor } from './lotto.js';

/**
 * 추첨된 번호 세트들을 화면에 렌더링
 * @param {HTMLElement} container 
 * @param {number[][]} sets 
 */
export function renderNumberSets(container, sets) {
    container.innerHTML = '';
    
    sets.forEach(set => {
        const row = document.createElement('div');
        row.classList.add('numbers-display');

        set.forEach(number => {
            const circle = document.createElement('div');
            circle.classList.add('number');
            circle.textContent = number;
            circle.style.backgroundColor = getNumberColor(number);
            row.appendChild(circle);
        });
        
        container.appendChild(row);
    });
}

/**
 * 드롭다운(추첨기원번호) 옵션 갱신
 * @param {HTMLSelectElement} select 
 * @param {number[][]} sets 
 * @param {Function} callback 갱신 후 실행할 미리보기 콜백
 */
export function updateWishNumberOptions(select, sets, callback) {
    select.innerHTML = '<option value="">추첨기원번호 세트를 선택하세요</option>';
    
    sets.forEach((set, index) => {
        const setString = set.join(', ');
        const option = document.createElement('option');
        option.value = setString;
        option.textContent = `${index + 1}세트: ${setString}`;
        select.appendChild(option);
    });
    
    if (callback) callback();
}
