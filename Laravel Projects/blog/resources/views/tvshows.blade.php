<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/tvshows.css">
    <script src="js/tvshows.js"></script>
    <title>Movies</title>
</head>
<body>
    <h1>About a movie...</h1>
    <label class="ask">What movie are you interested in? </label>
    <input type="text" id="userInput" />
    
    <button type="submit" onclick="getShows()">submit</button>
    <br><br>

    <div id="data"></div>

</body>
</html>