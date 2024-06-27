document.getElementById('alterar_tema').addEventListener('click', function() {
    const body = document.body;
    const toggleIcon = document.querySelector('#alterar_tema i')

    body.classList.toggle('light-theme')

    if (body.classList.contains('light-theme')) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun')
    } else {
        toggleIcon.classList.remove('fa-sun')
        toggleIcon.classList.add('fa-moon')
    }
})