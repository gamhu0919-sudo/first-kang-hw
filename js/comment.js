/**
 * 댓글 미리보기 및 복사 기능
 */

/**
 * 댓글 미리보기 업데이트
 * @param {Object} elements DOM 요소들 
 */
export function updatePreview(elements) {
    const { nick, wish, content, previewText, previewContainer } = elements;
    
    const nickVal = nick.value || '익명';
    const wishVal = wish.value || '(미선택)';
    const contentVal = content.value || '대박 기원합니다!';
    
    const formatted = `[${nickVal}] 추첨기원번호: ${wishVal} | 내용: ${contentVal}`;
    previewText.textContent = formatted;
    previewContainer.style.display = 'block';
}

/**
 * 클립보드 복사 및 Disqus 이동
 * @param {string} text 
 */
export function copyToClipboard(text) {
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('댓글 내용이 클립보드에 복사되었습니다! 아래 Disqus 창에 붙여넣어주세요.');
        const disqus = document.getElementById('disqus_thread');
        if (disqus) disqus.scrollIntoView({ behavior: 'smooth' });
    }).catch(err => {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 직접 복사해주세요.');
    });
}
