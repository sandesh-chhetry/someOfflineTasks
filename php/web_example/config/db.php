<?php
// create connection
  $conn = mysqli_connect('localhost','root','','test');

  // passing through the config.php file this is also can use
  // $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);


  if(mysqli_connect_errno()){
    echo "Failed to connect to MySQL ". mysqli_connect_errno();
  }
  else{
    // echo "connected successfully <br><br><br>";
  }
?>
