let exit = document.querySelector('.exit');
let account = document.querySelector('.account-part');
let accountMenu = document.querySelector('.account-menu');

account.addEventListener('click', function () {
    accountMenu.classList.toggle('open-close');
})

exit.addEventListener('click', function () {
    window.location.href = '/html/login.html';
})