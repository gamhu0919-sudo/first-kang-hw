/**
 * 앱 진입점 (Entry Point)
 * 모든 모듈을 조립하여 실행합니다.
 */
import { generateOneSet } from './lotto.js';
import { initTheme, toggleTheme } from './theme.js';
import { renderNumberSets, updateWishNumberOptions } from './ui.js';
import { updatePreview, copyToClipboard } from './comment.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM 요소 선택
    const elements = {
        drawBtn: document.getElementById('draw-button'),
        resultsContainer: document.getElementById('results-container'),
        themeToggleBtn: document.getElementById('theme-toggle'),
        setCountSelect: document.getElementById('set-count'),
        wishNumberSelect: document.getElementById('wish-number-select'),
        commentNickname: document.getElementById('comment-nickname'),
        commentContent: document.getElementById('comment-content'),
        previewContainer: document.getElementById('formatted-preview'),
        previewText: document.getElementById('preview-text'),
        copyBtn: document.getElementById('copy-comment-btn')
    };

    // 댓글 관련 요소 묶음 (미리보기용)
    const commentElements = {
        nick: elements.commentNickname,
        wish: elements.wishNumberSelect,
        content: elements.commentContent,
        previewText: elements.previewText,
        previewContainer: elements.previewContainer
    };

    // 2. 초기화
    initTheme(elements.themeToggleBtn);
    loadDisqus();
    
    // 3. 이벤트 리스너 등록
    
    // 번호 추첨 버튼
    elements.drawBtn.addEventListener('click', () => {
        const numSets = parseInt(elements.setCountSelect.value);
        const drawnSets = [];
        
        for (let i = 0; i < numSets; i++) {
            drawnSets.push(generateOneSet());
        }
        
        renderNumberSets(elements.resultsContainer, drawnSets);
        updateWishNumberOptions(elements.wishNumberSelect, drawnSets, () => {
            updatePreview(commentElements);
        });
    });

    // 테마 토글
    elements.themeToggleBtn.addEventListener('click', () => {
        toggleTheme(elements.themeToggleBtn);
    });

    // 댓글 입력 필드 변경
    [elements.commentNickname, elements.commentContent, elements.wishNumberSelect].forEach(el => {
        el.addEventListener('input', () => updatePreview(commentElements));
        el.addEventListener('change', () => updatePreview(commentElements));
    });

    // 복사 버튼
    elements.copyBtn.addEventListener('click', () => {
        copyToClipboard(elements.previewText.textContent);
    });

    // 초기 1회 실행
    elements.drawBtn.click();
});

/**
 * Disqus 스크립트 동적 로드
 */
function loadDisqus() {
    const d = document, s = d.createElement('script');
    s.src = 'https://first-kang-hw.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}
