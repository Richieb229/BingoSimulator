 

var numbersCalled = [];

function playGame() {

    //Array containing 90 balls ordered
    var balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

    //All six ticket arrays
    var ticket1 = [1, 17, 22, 47, 52, 4, 36, 53, 60, 70, 26, 37, 49, 74, 81];
    var ticket2 = [23, 34, 55, 75, 83, 2, 15, 40, 58, 88, 19, 28, 44, 67, 89];
    var ticket3 = [6, 12, 41, 50, 73, 24, 33, 48, 76, 84, 7, 38, 57, 61, 86];
    var ticket4 = [5, 11, 32, 43, 78, 16, 39, 56, 63, 80, 8, 18, 20, 65, 90];
    var ticket5 = [10, 45, 59, 62, 82, 14, 29, 46, 64, 71, 9, 35, 66, 72, 87];
    var ticket6 = [13, 21, 30, 68, 77, 3, 25, 31, 51, 69, 27, 42, 54, 79, 85];

    document.getElementById('playGame').style.visibility = 'Hidden'; //Make the play game button visible

    var randomBall = _.shuffle(balls); //Use underscore.js library to randomise the array
    var i = 0;  // the index of the current item to show
    var rbLength = randomBall.length; //Get the length of the random array
    var ball = document.getElementById('text'); //Get the DOM Element which will display the random number


    var setInter = setInterval(function () { //Set the interval of the random ball call

        var boardCell; //Create var to 


        ball.innerText = randomBall[i];
        numbersCalled.push(randomBall[i]);
        console.log(numbersCalled);

        var singleBall = randomBall[i].toString(); //Get ball picked
        boardCell = "A_" + singleBall; //Append board cell ref to ball
        //console.log(boardCell); Debug to check correct value returned
        document.getElementById(boardCell).style.backgroundColor = "red"; //Set the background colour of the bingo board for picked random ball

        var numonTicket = 15;//Number of values on each ticket
        //Ticket 1 
        var compareTicket1 = _.intersection(ticket1, numbersCalled); //Compare like value in the ticket and array containing number called
        document.getElementById('ticket1Remain').innerText = numonTicket - compareTicket1.length + String.fromCharCode(13) + "To Go";//Set the 'To Go' value

        //Ticket 2 
        var compareTicket2 = _.intersection(ticket2, numbersCalled);
        document.getElementById('ticket2Remain').innerText = numonTicket - compareTicket2.length + String.fromCharCode(13) + "To Go";

        //Ticket 3 
        var compareTicket3 = _.intersection(ticket3, numbersCalled);
        document.getElementById('ticket3Remain').innerText = numonTicket - compareTicket3.length + String.fromCharCode(13) + "To Go";

        //Ticket 4 
        var compareTicket4 = _.intersection(ticket4, numbersCalled);
        document.getElementById('ticket4Remain').innerText = numonTicket - compareTicket4.length + String.fromCharCode(13) + "To Go";

        //Ticket 5 
        var compareTicket5 = _.intersection(ticket5, numbersCalled);
        document.getElementById('ticket5Remain').innerText = numonTicket - compareTicket5.length + String.fromCharCode(13) + "To Go";

        //Ticket 6
        var compareTicket6 = _.intersection(ticket6, numbersCalled);
        document.getElementById('ticket6Remain').innerText = numonTicket - compareTicket6.length + String.fromCharCode(13) + "To Go";

        //Check values in ticket to see if all values match
        if (ticket1.length == compareTicket1.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 1 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        //Check values in ticket to see if all values match
        if (ticket2.length == compareTicket2.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 2 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        //Check values in ticket to see if all values match
        if (ticket3.length == compareTicket3.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 3 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        //Check values in ticket to see if all values match
        if (ticket4.length == compareTicket4.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 4 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        //Check values in ticket to see if all values match
        if (ticket5.length == compareTicket5.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 5 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        //Check values in ticket to see if all values match
        if (ticket6.length == compareTicket6.length) {
            clearInterval(setInter);
            swal({
                title: "Bingo!",
                text: "Ticket 6 is a winner",
                imageUrl: "images/bingo-img.jpg"
            });
            document.getElementById('newGame').style.visibility = 'visible';
        }

        i++; //Increment the random array value to display


        //If another person wins (Can't in this demo) display Sorry you didn't win message
        if (i == rbLength) {
            clearInterval(setInter);
            swal("Sorry, you didn't win", "Better luck next time!");
        }
    }, 400); //Interval of random ball change
};

//On Click of value on ticket numbers
function checkTicketNumber(id) {

    
    var dabNumber = "";
    var ticketValue = document.getElementById(id).innerText;
    var ticketNumber = Number(ticketValue);
    var hasBeenCalled = numbersCalled;


    dabNumber = _.contains(hasBeenCalled, ticketNumber);

    if (dabNumber == true) {
        document.getElementById(id).style.backgroundColor = "red";
    }
    else {
        return false;
    } 
};