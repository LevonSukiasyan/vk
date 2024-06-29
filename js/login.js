loginInp = document.querySelector('.login-inp');
loginBtn = document.querySelector('.login-btn');
createAccount = document.querySelector('.create-btn')

loginBtn.addEventListener('click', function () {
    let storage = localStorage.getItem('registerNumber');

    if (loginInp.value === storage) {
        window.location.href = '/html/mainPage.html';
    }
})

createAccount.addEventListener('click', function () {
    window.location.href = '/html/register.html';
})