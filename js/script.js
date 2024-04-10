$("#saveForm").submit(function(event) {
    event.preventDefault();

    let username = $("#username").val();
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        type: "POST",
        url: "php/backend.php",
        data: {
            username: username,
            email: email,
            password: password
        },
        success: function(response) {
            let uname = encodeURIComponent(username)
            let userEmail = encodeURIComponent(email)
            let userPassword = encodeURIComponent(password)
            let message = encodeURIComponent(response)
            window.location.href = "userData.html?username=" + uname +
                "&email=" + userEmail + "&password=" + userPassword +
                "&message=" + message;
        }
    });
});
