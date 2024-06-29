let input = document.querySelector('.register-inp');
let btn = document.querySelector('.register-btn');

input.addEventListener('input', function(event) {
    const currentValue = event.target.value;
    let isNum = +currentValue.slice(1);

    if (isNum  && currentValue.startsWith('+374') && currentValue.length ===  12) {
        localStorage.setItem('registerNumber', currentValue)

    }
});

btn.addEventListener('click', function () {
    let storage = localStorage.getItem('registerNumber')

    if (storage) {
        window.location.href = '/html/mainPage.html';
    }
})