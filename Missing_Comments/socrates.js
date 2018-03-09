/*
The Lost Library of Socrates
Written by: Matthew Hill
Date of last edit: 16 November 2017
Contact: matthillprogramdeveloper@gmail.com

All comments removed on 6 March 2018 to be used as an exercise in
Code Bootcamp at theClubhou.se
 */

// This creates a variable named 'user' for later use.
var user;

var library = ["television","cat","banana","computer","ocean","couch","refrigerator","forest","printer","shampoo","table","vehicle","controller","shelf","fence","ottoman","cabinet","coaster","fence","bushes","picture","frame","weight"];


/*
This class holds values for the correct word and turns the answer into an array, the
current board in the form of an array and a list of letters already entered by the user.
It also contains functions for guessing the answer and/or letters.
 */
class Puzzle{

    constructor(word){
        this.word = word;
        this.answer = this.wordToArray(word);
        this.currentBoard = this.buildBoard(word);
        this.lettersGuessed = [];
    }
    // This loop turns the puzzle word into an array to check against the board array.
    wordToArray(word){
        let board = [];
        for(let letter of word){
            board.push(letter);
        }
        return board;
    }
    // This loop adds the number of spaces/letters for the answer word.
    buildBoard(word){
        let board = [];
        for(let letter of word){
            board.push("_");
        }
        return board;
    }
    // This function returns 1 of 3 options. Either true, false or "You already guessed that letter".
    guessLetter(letter){
        if(this.lettersGuessed.indexOf(letter) === -1){// Checks to see if the index of the letter was guessed previously.
            this.lettersGuessed.push(letter);// If it has not been guessed, it adds it to the lettersguessed array.
            if(this.answer.indexOf(letter) !== -1){// Checks to see if the guessed letter is in the array.
                for(let i = 0; i < this.answer.length; i++) {//Checks to see if the letter is in the answer.
                    if (this.answer[i] === letter) {
                        this.currentBoard[i] = letter;//Adds that letter to the currentBoard array.
                    }
                }
                return true;//

            }else{//
                return false;// alters if you are wrong.
            }
        }else{//tells you the letter has already been guessed.
            return "You already guessed this letter!";
        }
    }
    // tells you if your word guess is correct or not
    guessWord(word){
        let winner = false;
        let guess = this.wordToArray(word);

        if (guess.length === this.answer.length) {
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] !== this.answer[i]) {
                    winner = false;
                    break;
                } else {
                    winner = true;
                }
            }
        }else{
            winner = false;
        }
        // Ternary statement
        return winner ? true:false;

        /* translate to this if/else statement
        if(winner == true)
        {
          return "answer1";
        }
        else {
          return "answer2";
        }
        */
    }


}

/*
Holds name, level, score, remainign guesses, puzzle and inventory of specials. It also
has methods for calling puzzle methods and affects the score and guess values at the
user level.
*/
class User{

    constructor(name){
        this.name = name;
        this.level = 1;
        this.score = 0;
        this.guesses = 10;
        this.puzzle = null;
        this.specials = {inventory:{Streln: 1,Vowels: 1,PickALetter: 1,FreeLetter: 1 }};

    }

    useSpecial(type){
        //This is going to use buttons to start the function
        let special = this.specials.inventory;
        console.log("Made it inside the use special function."); //Console used for debugging
        switch(type){//

            case "Streln":
                if(special.Streln < 1){
                    alert("You do not have any Streln special abilities to use.")
                }else{
                    let streln = new Streln();
                    this.puzzle = streln.use(this.puzzle);
                    special.Streln--;
                }
                break;

            case "Vowels":
                if(special.Vowels < 1){
                    alert("You do not have any Vowels special abilities to use.")
                }else{
                    let vowels = new Vowels();
                    this.puzzle = vowels.use(this.puzzle);
                    special.Vowels--;
                }
                break;

            case "PickALetter":
                if(special.PickALetter < 1){
                    alert("You do not have any Pick A Letter special abilities to use.")
                }else{
                    let pickALetter = new PickALetter();
                    this.puzzle = pickALetter.use(this.puzzle);
                    special.PickALetter--;
                }
                break;

            case "FreeLetter":
                if(special.FreeLetter < 1){
                    alert("You do not have any Free Letter special abilities to use.")
                }else{
                    let freeLetter = new FreeLetter();
                    this.puzzle = freeLetter.use(this.puzzle);
                    special.FreeLetter--;
                }
                break;


        }

    }
//
    guessLetter(letter){
        let res = this.puzzle.guessLetter(letter);

        switch(res){
            case true:
                this.score +=13;
                return true;
                break;

            case false:
                this.guesses --; // decrement by 1
                return false;
                break;

            case "You already guessed this letter!":
                alert(res);
                return true;
                break;

        }

    }
//
    guessWord(word){
        let res = this.puzzle.guessWord(word);
        if(res){
            YouWin();
        }else{
            alert("Incorrect Guess");
            this.guesses --;
        }

    }


}




/*
This class shows the use of parent/child inheritance.
 */
class Special{

    use(currentPuzzle){
        let puzzle = currentPuzzle;
        //do some stuff
        return puzzle;
    }
}

/*
child classes that extend special override the .use()
function each one affects dthe puzzle differently.
 */

class Streln extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("s");
        puzzle.guessLetter("t");
        puzzle.guessLetter("r");
        puzzle.guessLetter("e");
        puzzle.guessLetter("l");
        puzzle.guessLetter("n");

        return puzzle;
    }
}
//
class Vowels extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("a");
        puzzle.guessLetter("e");
        puzzle.guessLetter("i");
        puzzle.guessLetter("o");
        puzzle.guessLetter("u");
        return puzzle;
    }
}
/*
Creates a menu allowing the user to xhoose an open blank from a prompt group.
*/
class PickALetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let menu = new Menu("Pick a space to reveal the letter", puzzle.currentBoard);
        let choice = "1";
        let chosenIndex = -1;
        while (choice !== "_"){//this loop stops if a user picks a hidden letter.
            chosenIndex = menu.displayReturnInt();
            choice = puzzle.currentBoard[chosenIndex];
            /* Creates a menu for remaining letters, prompts the user to pick a
            field on the word and
            */
        }
        let letter = puzzle.answer[chosenIndex];
        puzzle.guessLetter(letter);
        return puzzle;
    }
}


// Reveals an hidden letter in the puzzle
class FreeLetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let remaining = [];
        for(let i = 0; i < puzzle.answer.length; i++){
            if(puzzle.currentBoard[i] === "_") {
                remaining.push(puzzle.answer[i]);
            }
        }
        console.log("remaining",remaining);
        let randIndex = Math.round((Math.random()*(remaining.length-1)));
        console.log("random letter chosen",remaining[randIndex]);
        puzzle.guessLetter(remaining[randIndex]);
        return puzzle;
    }
}




// for guessing letters and words.

function letterGuess(key){// lets user press enter instead of using mouse click
    if(key.keyCode === 13){
        key.preventDefault();//
        let letter = document.getElementById("letterGuess").value.toLowerCase();
        let alphabet =/[a-zA-z]*/g;
        let testLetter = letter.replace(alphabet,"");
        if(letter.length === 1 && testLetter.length === 0){
            let guess = user.guessLetter(letter);// passes the chosen 'letter' as the argument to the .guessLetter()
                                                     //function of the user class.
                console.log("the guess here is "+guess);
                if (!guess){
                    alert(letter+ " is not a piece of the current puzzle.")
                }
        }else{
            alert("Your guess was not a valid letter!");

        }
        document.getElementById("letterGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

function wordGuess(key){// lets you press enter
    if(key.keyCode === 13){
        key.preventDefault();// Prevents the default action from occurring. (ie. Enter key will NOT submit entire form.)
        let word = document.getElementById("wordGuess").value.toLowerCase().trim();
        let alphabet =/[a-zA-z]*/g;
        let testWord = word.replace(alphabet,"");

        if(word.length > 0 && testWord.length === 0){
            user.guessWord(word);

        }else{
            alert("Your guess contained invalid or no characters!")
        }
        document.getElementById("wordGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

//
function Specials(type){
    user.useSpecial(type);

    let win = user.puzzle.guessWord(user.puzzle.currentBoard);
    if (win){
        YouWin();
    }
    UpdateInventory();
    UpdateBoard();
    UpdateHeader();
}

//
function UpdateHeader(){
    document.getElementById("header").innerHTML = "";
    let header = document.createTextNode(user.name + "_______"+user.guesses+" guesses remain_______Level: "+user.level+"_______"+user.score+" points");
    document.getElementById("header").appendChild(header);
}
//
function UpdateBoard(){
    document.getElementById("board").innerHTML = "";
    let boardString = " ";
    user.puzzle.currentBoard.forEach(function(v){
        boardString += v;
        boardString +=" ";
    });
    let board = document.createTextNode(boardString);
    document.getElementById("board").appendChild(board);
}
//
function UpdateInventory(){
    document.getElementById("streln").innerHTML = "";
    let streln = document.createTextNode(user.specials.inventory.Streln);
    document.getElementById("streln").appendChild(streln);

    document.getElementById("vowels").innerHTML = "";
    let vowels = document.createTextNode(user.specials.inventory.Vowels);
    document.getElementById("vowels").appendChild(vowels);

    document.getElementById("pickALetter").innerHTML = "";
    let pickALetter = document.createTextNode(user.specials.inventory.PickALetter);
    document.getElementById("pickALetter").appendChild(pickALetter);

    document.getElementById("freeLetter").innerHTML = "";
    let freeLetter = document.createTextNode(user.specials.inventory.FreeLetter);
    document.getElementById("freeLetter").appendChild(freeLetter);
}


// Get user's name
function Main(){
    let validator = new Validator();
    let userName = validator.getString("Please enter your name.");
    if (userName === null){ // If user presses cancel, game quits
        document.getElementById("header").innerHTML = "";
        document.getElementById("board").innerHTML = "User quit the game!";
        document.getElementById("guess").innerHTML = "";
        document.getElementById("specials").innerHTML = "";

    }else{
        user = new User(userName); // instantiates new User and Puzzle classes when name entered
        let randIndex = Math.round((Math.random()*(library.length-1)));
        user.puzzle = new Puzzle(library[randIndex]);

        UpdateHeader();
        UpdateInventory();
        UpdateBoard();
    }

}
//
function YouWin(){
    let types = ["Streln","Vowels","PickALetter","FreeLetter"];
    let randIndex1 = Math.round((Math.random()*(types.length-1)));
    let lettersLeft = 0;
    for(let letter of user.puzzle.currentBoard){
        if(letter = "_"){
            lettersLeft +=13;
        }
    }
    let score = ((user.puzzle.answer.length)*11)+lettersLeft;
    user.score += score;
    user.specials.inventory[types[randIndex1]]++;
    user.guesses++;
    user.level++;
    alert("The answer is "+user.puzzle.word.toUpperCase()+"!\nPoints awarded for completion: "+ score+"\nYou got a new special: "+types[randIndex1]+"\nYou got an extra guess!");

    let randIndex2 = Math.round((Math.random()*(library.length-1)));
    user.puzzle = new Puzzle(library[randIndex2]);

    UpdateHeader();
    UpdateBoard();
    UpdateInventory();

}
//
function YouLose(){
    document.getElementById("board").innerHTML = "Above is your final score.";
    document.getElementById("guess").innerHTML = "You have run out of guesses.";
    document.getElementById("specials").innerHTML = "Refresh the page to play again.";

}



Main();
