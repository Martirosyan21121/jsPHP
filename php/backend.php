<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "user";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO user.userdata (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE){
    echo "Data inserted successfully Thanks !!!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


