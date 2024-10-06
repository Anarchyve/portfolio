// 스크롤 이벤트를 최적화하는 throttle 함수
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// 스크롤 시 섹션에 따라 네비게이션 항목 활성화
const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // 헤더 높이 고려
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
};

// 스크롤 이벤트에 throttle을 적용하여 성능 최적화
window.addEventListener('scroll', throttle(handleScroll, 100));

// 다크모드 전환 기능
const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
