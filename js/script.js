document.getElementById("saveForm").addEventListener("submit", function (event) {
    event.preventDefault();


    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "php/backend.php", true)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("message").innerHTML = xhr.responseText
            setTimeout(function () {
                document.getElementById("message").innerHTML = ""
            }, 3000)
        }
    }
    xhr.send("username=" + username + "&email=" + email + "&password=" + password)
})