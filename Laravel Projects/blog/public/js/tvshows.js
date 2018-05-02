let xhr = new XMLHttpRequest();

function getShows(){
    var userEntry = document.getElementById("userInput").value; 
    var moist2 ="https://api.tvmaze.com/search/shows?q="+userEntry;
    xhr.open('GET', moist2 , true);
    console.log("https://api.tvmaze.com/search/shows?q="+userEntry);
    xhr.send();
    xhr.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e){
    if(xhr.readyState == 4 && xhr.status == 200){    
        let response = JSON.parse(xhr.responseText);
        let userEntry = document.getElementById("userInput").value;
        console.log(response);
        displayStuff(userEntry, response);
    }
}

function displayStuff(userEntry, response){
    let dispText = "";
    for(let i = 0; i < response.length; i++){
        dispText = dispText + "<strong>Show Name: </strong>" + response[i].show.name
        + '<br><strong>Website: </strong> <a href="' + response[i].show.url + '">' + response[i].show.url + '</a>'
        + "<br><strong>Genres: </strong>" + response[i].show.genres 
        + "<br><strong>Summary: </strong>" + response[i].show.summary;
    }
    if(dispText != ""){
        document.getElementById("data").innerHTML = dispText;
    }else{
        document.getElementById("data").innerHTML = "Could not find that name";
    }
}
