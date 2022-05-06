<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- icon -->
    <link rel="shortcut icon" href="./public/img/icon.png" type="image/x-icon">
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
    <!-- css -->
    <link rel="stylesheet" href="../public/css/spinner.css">
    <title>Cargando</title>
</head>
<body>
    <div class="spinner"></div>
    <span class="smalltext">Cargando...</span>
    <script>
        
        // timer
        setTimeout(() => {
            location.assign("../public/index.html")
            // window.open("../public/index.html")
        }, 5000);

    </script>

</body>
</html>