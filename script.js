window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // 헤더 높이 고려
        const sectionHeight = section.clientHeight;
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
});

/*다크모드 전환 */

  const button = document.getElementById('theme-toggle');
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

