$(document).ready(function () {
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const username = getQueryParam('username');
    const email = getQueryParam('email');
    const password = getQueryParam('password');
    const message = getQueryParam('message');

    $('#username').text(`Your name: ${username}`);
    $('#email').text(`Your email: ${email}`);
    $('#password').text(`Your password: ${password}`);
    $('#message').text(`${message}`);
    setTimeout(function() {
        $('#message').text('');
    }, 3000);
});