document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleIcon = document.querySelector('#alterar_tema i')

    const theme = localStorage.getItem('theme')
    if (theme === 'light') {
        body.classList.add('light-theme')
        toggleIcon.classList.remove('fa-moon')
        toggleIcon.classList.add('fa-sun')
    } else {
        body.classList.remove('light-theme')
        toggleIcon.classList.remove('fa-sun')
        toggleIcon.classList.add('fa-moon')
    }

    document.getElementById('alterar_tema').addEventListener('click', function () {
        body.classList.toggle('light-theme')

        if (body.classList.contains('light-theme')) {
            toggleIcon.classList.remove('fa-moon')
            toggleIcon.classList.add('fa-sun')
            localStorage.setItem('theme', 'light')
        } else {
            toggleIcon.classList.remove('fa-sun')
            toggleIcon.classList.add('fa-moon')
            localStorage.setItem('theme', 'dark')
        }
    })
})