/**
 * 테마 토글 및 localStorage 유지 기능
 */

const THEME_KEY = 'lotto-theme-preference';

/**
 * 초기 테마 설정 불러오기
 * @param {HTMLElement} toggleBtn 
 */
export function initTheme(toggleBtn) {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 저장된 테마가 있으면 적용, 없으면 시스템 설정 따름
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
    }
}

/**
 * 테마 토글 처리
 * @param {HTMLElement} toggleBtn 
 */
export function toggleTheme(toggleBtn) {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}
