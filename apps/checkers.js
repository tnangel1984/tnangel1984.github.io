// ***CHECK JUMPS!!!


// ==== BOARD BUILD FUNCTIONS HERE====

const getEvenOdd = (countEvaluated, outputClass)=>{
      if(countEvaluated%2 === 0){
           return outputClass = 'even';
      }else{
          return outputClass = 'odd';
      }  // determines squareClass2 = odd or even
}


// ====ON LOAD EVENTS HERE====
$(()=>{

  // ====BUILD THE BOARD ===== // creates a container,  creates player divs, appends to body
        $('body').append($('<container>'));
            //creates player 1&2 divs
        const $player1Div =$('<div>').addClass('player1');
        const $player2Div =$('<div>').addClass('player2');

  // ====VARIABLES HERE====
        let squareClass=""; let rowClass2=""; let squareClass2="";  let rowCount =1; let limit =8;
                // creates rows 1-8
        for (let rowCount=1; rowCount<=limit; rowCount++){
            rowClass2=getEvenOdd(rowCount,rowClass2);
            $('container').append($('<div>').addClass('row').addClass(rowClass2+'Row').attr('id','row'+rowCount));
  // Possibly move to function??// appends rows to respective player divs, but skips the middle tow rows
            if( rowCount<=3){
              $($player2Div).append($('#row'+rowCount));
              $('container').prepend($player2Div);
            }else  if(rowCount>5){
              $($player1Div).append($('#row'+rowCount));
              $('container').append($player1Div);
            }
                // Creates squares 1-8 per row, used the row count * 8 to get to next row count + square count in row to get to square counts.
                  for(j=1; j<=8; j++){
                      let squareCount = (rowCount-1)*8+j;
                      squareClass2= getEvenOdd(squareCount, squareClass2);
                      $('#row'+rowCount).append($('<div>').addClass('square').addClass(squareClass2).attr('id',squareCount).text(squareCount));
                  }
          }

  //===SQUARES: PLAYABLE vs NON-PLAYABLE ===
          //Creating a variable to separate playable/non-playable squares & pieces...
      const $playableSquares = $.merge($('.oddRow').find('div.even'), $('.evenRow').find('div.odd'));
      const $nonPlayableSquares = $.merge($('.oddRow').find('div.odd'), $('.evenRow').find('div.even'));
      const $openSquares = $.merge($('#row4').find('div.odd'),$('#row5').find('div.even'));

  // ===PIECES: PLAYER STAGING SET UP/ DEFINES PLAYERS PIECES (really player squares grouped by player)
      const $player1 = $.merge($('.player1').find($('.oddRow').find('div.even')), $('.player1').find($('.evenRow').find('div.odd')));
      const $player2 = $.merge($('.player2').find($('.oddRow').find('div.even')), $('.player2').find($('.evenRow').find('div.odd')));
                //$.merge() returns an array of html elements; not actual objects (if javascript arrays are input it returns normal js arrays)

      const p1Image = 'images/blk.jpg';
      const p2Image = 'images/wht.jpg';

      $player1.append($('<img>').attr('src', p1Image));
      $player2.append($('<img>').attr('src', p2Image));

//===STAGE GAME create intial game play functions & variables for SetUp ===
const sum= (x, y)=>{return x+y;}
const subtract= (x, y)=>{return x-y;}
      let player = $player2; //<---RANDOMIZE LATER
      let alternatePlayer =true;
      let playerOp=sum;
      let playerImage = p2Image;
      let opponentImage = p1Image;
      let $selectionDiv='';
      let $destinationDiv='';

  // console.log($player2);
  // Is there any advantage to having these as arrays vs an objects??

// ====FUNCTIONS HERE====
  const startGame =() =>{

    alert('Welcome to Checkers! \n Move diagonally across the board toward your opponent.\n Jump over your opponent to capture their pieces. \n First to capture all of their opponents peices wins.')
    // confirm('Ready to begin?')
        //simply need something to indicate that the game as began so turns can be counted.
    //1. Initiate play, select player at random.
    //2. Load player into player variable.
    //3. Do nothing... play should be initiated by on Click events...
    //4. How to loop from there.
    //5. in order to initate play, player turn has to be known. Because the onclick event is tied to player sets....
    //How to

  }

  const changeTurn = () =>{
    alternatePlayer=!alternatePlayer;
    console.log('change execution');
           //sets altP to the opposite value. i.e. changes it from true to not true: false
    if(alternatePlayer  === true){
      player=$player2;
      playerOp = sum;
      playerImage= p2Image;
      opponentImage = p1Image;
      playGame();
      console.log(playerImage);
    }else{
       player=$player1;
       playerOp=subtract;
       playerImage= p1Image;
       opponentImage = p2Image;
       playGame();

       console.log(playerImage);
       //Images?
// countTurn ++
    }


    //count the number of turns taken
    //on first turn run a random number generator to determine which player goes first.
    //alternate every turn there after TOGGLE True/FALSE
    //NEEDS PASS THE PLAYER INTO THE SELECT PIECE FUNCTION!
    // !!!Returns playerArray

    // changes player array, changes player img. Need to have one point of trigger.
    //change player turn >>>
  }

  const validateSelection = (player)=>{
      if($.inArray(event.currentTarget, player)>=0){
                // give currentTarget a glow.. in JQUERY
        $selectionDiv =$(event.currentTarget)
        console.log($(event.currentTarget));
      }else{
        alert('This is not Your piece.')
      }
  }

          // console.log(event.currentTarget);
            // console.log(player);
            // console.log($(event.currentTarget));
            // console.log($.inArray($(event.currentTarget),player));
          // const selectPiece = (event)=>{
          // }

  const selectDestination = ()=>{
          // check if img is appended
          console.log($destinationDiv);
      if(event.currentTarget.children === $('img')){
        console.log("You cannot move here this place is taken");
      }else{
        console.log('destination validation 1 complete');

       $destinationDiv = $(event.currentTarget);

      }
  }

 //  //
  const ordainMove = (player, selection, destination)=>{

    //**SHOULD THIS BE 3 SEPARATE FUNCTIONS??? Definitions, Moves, Jumps?
      let selectionId = Number(selection.attr('id'));
      let destinationId = Number(destination.attr('id'));
console.log(selectionId);console.log(destinationId);
    calcMoves(selectionId, destinationId);

    //Lists possible 1st moves... Doesn't change...
    // *From the vantage point of p1 move right +7 (p2 moveleft -7)
      // MoveRight = playerOp(selectionId,7);
      // MoveLeft = playerOp(selectionId,9);
      // JumpRight = playerOp(selectionId,14);
      // JumpLeft = playerOp(selectionId,18);

      if(destinationId=== MoveLeft || destinationId=== MoveRight){
            console.log('destination validation 2 complete'); //EXCUTE MOVE!
            move(playerImage, selection, destination);
              //validates 3 things: That Destination is ordained position, jump piece is an oppenents piece, AND that the piece IN THE THE DIRECTION OF the jump .
      }else{     //if (destinationId=== JumpLeft || destinationId=== JumpRight){
          let jumpCount = 1;
//***BLANK TEST NEEDED IN LOOPS!!!
          do {
              //validates 3 things:
              // That Destination is a moveable position, that jump piece is an oppenents piece, AND that the piece IN THE THE DIRECTION OF the jump .
              if(destinationId=== JumpLeft && $('#'+MoveLeft).attr('src', opponentImage)){

                  move(playerImage, selection, destination);
                  $('#'+MoveLeft).children().remove();
          //***Reset Selection & Destination ***NEED TO MAKE THIS INTO A FUNCTION!
                  selection = destination;
                  selectionId = destinationId;
                  destinationId = playerOp(selectionId,14);
                  calcMoves();
                  destination = destination.attr('id',destinationId);//<<---ERROR HERE!
                  if($(destination.children()).is('img')){
                    jumpCount =0;
                  }else{
                    jumpCount++;
                  }


              }else if(destinationId=== JumpRight && $('#'+MoveRight).attr('src', opponentImage)){

                  move(playerImage, selection, destination);//THEN MOVE RIGHT
                  $('#'+MoveRight).children().remove();  //jump(); //EXECUTE JUMP FUNCTION!!
                  selection = destination;
                  selectionId = destinationId;
                  calcMoves(selectionId, destinationId);
                  console.log(destination);
                  destinationId = playerOp(selectionId,14);

                  destination = destination.attr('id',destinationId);
                  console.log($(destination.children()));
                  console.log($(destination.children()).is('img'));
                  if($(destination.children()).is('img')){
                    jumpCount =0;
                    console.log('There are no more moves');
                  }else{
                    jumpCount++;
                  }
                  debugger
              }else if(jumpCount>1){
                jumpCount =0; //exit loop condition.
                console.log('There are no more moves');
              }else{

                jumpCount=0;
                console.log('This is not a valid move');
              }
          }

          while(jumpCount!==0);
    }
 }

 const move = (playerImage, selection, destination)=>{
     $(destination).append($('<img>').attr('src', playerImage));
     (selection.children()).remove();
     $openSquares.splice($.inArray(destination[0], $openSquares),1, selection[0]);//removes destination div from open spaces, adds selection div to open spaces.

     if (player === $player2){
         $player2.splice($.inArray(selection[0],$player2),1,destination[0]);// removes selected div from player array, adds new destination div to player array.
         console.log(player);
     }else{
         $player1.splice($.inArray(selection[0],$player1),1,destination[0]);
         console.log(player);
     }
}

const calcMoves = (selectionId, destinationId)=>{
  MoveRight = playerOp(selectionId,7);
  MoveLeft = playerOp(selectionId,9);
  JumpRight = playerOp(selectionId,14);
  JumpLeft = playerOp(selectionId,18);
}
      //make an ordain JUMP!

        //NEED TO CONFIRM END OF TURN!! Each time.


//====ON CLICK EVENTS HERE
const playGame =()=>{
    if($player1.length === 0 || $player2.length ===0){
       alert('We Have a Winner! Game Over');
       alert('Play Again?');
    }else{
    // alert('lets play!');
  }
    $selectionDiv='';
    $destinationDiv='';

    player.off().one('click',(event)=>{
        $selectionDiv='';
      validateSelection(player);
      console.log($selectionDiv);
      console.log('selction executed');
       // $(event.currentTarget).css('border', '3px solid blue' )
              //precise target gets a deselect onclick event goes here.
              //<<< NEED TO BE ABLE TO TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!!
    });

    $openSquares.off().one('click',(event)=>{
        console.log($selectionDiv);
        if($selectionDiv=== ''){
          playGame();
        }else{
          selectDestination();
          console.log($selectionDiv);
          //precise target gets a deselect onclick event goes here.
          ordainMove(player, $selectionDiv, $destinationDiv);
          changeTurn();
          }
   });
};
startGame();
playGame();
})





//TO DO! Next



    // 22. ****CHECK ALL STARS! ****
    // 22. If incorrect piece or invalid move need to reset game play NOT end turn.
    // 22. *** FIX CSS Squares move when window shrinks.



// ========= OUTLINE =========
  //===Define functions need to create and stage game===
  // getEvenOdd()
  // sum()
  // subtract()

//ON LOAD -
  //===CREATE BOARD===
    //  APPEND container to body
    //  create Divs player 1 & player 2 (basically containers for rows)
    //  create variables for class names of sqs & rows, and for rowCount & limit
    //  For Loop to Create rows
    //    If stmt to APPEND rows divs to player Divs
    //    Nested for loop to create squares divs & APPENDS squares to rows.

  //===STAGE BOARD===
    // create Arrays for playable (black), nonplayable (red), and open (2 rows of black squares not appended to initial playerdivs).
    // create Arrays of the SQUARES in each players div collection (merging arrays)
    // create player image VARIABLES
    // APPENDs respective images to the squares in each players array

  //===STAGE GAME ===
    //---Create game play Functions & Variables, set values for initial play--
    //create sum & subtract functions (for player Ops).
    //create & define player,playerOp,playerImage,opponentImage, and alternatePlayer.
            //These are the starting values, but will change as turns change.

  //===ALL OTHER GAME FUNCTIONS===
    // changeTurn()
    // validateSelection()
    // selectDestination()
    // ordainMove()
    //
    //
    // move()
    // calcMoves

//=== EVENT LISTENERS/HANDELERS ===
    // player.onclick ()
    //    calls validate selections and RETURNS A VALUE
    // openSquares.onclick()
    //

// 10. ====Map Game Play====
    // 1.click;
    // 2. select piece; confirms that it is okay to select this piece.
    // 3.click again;<< currently turn off one event listener, turn  on  another
    // 4. select destination;
    // 5. Run evaluations
    // 6. Make move(s) -->update arrays
    // 7. Make jump(s)  -->update arrays
    // 8. Next players turn
    // 9. Loop

//DONE!
//1.Build Board. 8x8
//
// 1.container.
// 2.player Divs
// 3.Row Divs
// 4.Square Divs
// 5. Append correct Rows to Player Divs
// 6. Import and assign Player images  ...could do this in board build
// 7. !!!!CRITICAL FIX ROW COUNT! WILL CHANGE ALL OTHER EVENTS :/
// 8. ADD EVENT HANDELERS Click img OR div... PUT it ON the div so the img inherits it? or limit to the img


// 11. SELECT PIECE event.target/currentTarget...
// 12. SELECT DESTINATION div event.target/currentTarget...
// 13. BUILD Evaluation LOGIC
// 14. BUILD MOVE Piece Function.
// 16. BUILD Jump Function
// 17. add REMOVE OPPONENT
// 18. LOOP Jump Function!
// 19. Players Turn...!!! Define images here/playerOperation/direction can you define everything here??
// 20. Need to re-visit event handlers and calls.
// 21. Update ARRAYS
// 22. Need to re-visit event handlers and calls.
// 21. Build in Border Limits!
// 20. TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!! NO NEED PLAYER CAN MAKE AS MANY SELECTIONS AS NEDED
// 24. Fixed attribute id errors in jump
//GAME PLAY Logic//
// CLICK1 --> selection ok?
//          > is it the player's piece?
//
// CLICK2 --> destination ok?
//          > is it blank? terminates here...
//          |
//          |   -> is it an ordained Move #?
//                  ->> Move
//          OR
//             -> is it an ordained Jump #?
//             -> is it an opponent that's being jumped? (is it in a move position)
//             -> is the opponent in the direction of the move? (that matches the jump direction)
//                  ->> Move
//                  ->> Remove opponent
//             -> RESETS selection & destionation for next evaluation!
//         LOOPS
//            -> repeats the evalation based on new destination
//            -> if no more jumps, alerts user, and sets exit loop condition...
//
//

//*Scoping will be a challenge if you separate functions...

//===RANDOM COMMENTS===//
// Player 1 /Player 2: oddRow evensquares Nested For Loop?  for rowOdd in Rows <=3
//        *** can jquery objects be treated  like regular objects
//   oddRow.even??  WOULD need to create an object like arrray????? might not be worth the time invested.
// PARENT/CHILDREN!!!  How can you leverage this relationship??... children would be in an array... loop through next sibling...
//object. (children.attribute(.id))?

//Why I'm currently adding the event listener to every square:
// For the current case, I will leave open the possibilty of adding an (annoying) alert function later assuming there's a player may have never played checkers before and will not know that the red squares are not playable...  * May change my mind later if I find this to be absolutely unecesary and unlikely, since the game will come with instructions after all. May be needed for game play....


//PLAYER SETUP version 1
// $('.player1').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/wht.jpg'));
// $('.player1').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/wht.jpg'));
//
// $('.player2').find($('.oddRow')).find('div.even').append($('<img>').attr('src', 'images/blk.jpg'));
// $('.player2').find($('.evenRow')).find('div.odd').append($('<img>').attr('src', 'images/blk.jpg'));

// ====
//
// $('.player2').find($('.oddRow')).find('div.even')

//===WHY doesn't this work??? ===
//       const $player2 = $.merge($('.player2').find($('.oddRow').find('div.even')), $('.player2').find($('.evenRow').find('div.odd')));
// ordainMove($player2, selectionTest, destinationTest);
//
// const ordainMove = (player, selection, destination)=>{
//   // ***OFF BOARD RESTRICTIONS NEED TO HAPPEN HERE ON THE OUTSIDE
//   // ONLY place MOVE restrictions here will run a separate one fo jumps.
// //Lists possible 1st moves... Doesn't change...
// console.log(player);
// console.log($player2);


//====== OLD FORMAT FOR ORDAIN MOVE  ===
// }else{
//     P1MoveLeft = Number(selection.attr('id'))-9;
//     P1MoveRight = Number(selection.attr('id'))-7;
//     P1JumpRight= Number(selection.attr('id'))-18;
//     P1JumpLeft = Number(selection.attr('id'))-14;
// }

//====JUMP RULES====
 //Jumps are always #rowsAway*7 or #rowsAway*9 from current position.
 //piece jumped must belong to the opponent.
//Opponent positions LIMIT the direction of the jump!
// NEED TO PASS PLAYER IMAGE INTO  A VARIABLE FOR USE HERE AND FOR PIEE SELECTIONS!

//===GET HELP ON THIS WHY DID IT TRACK ALL SELECTIONS===
// player.on('click',(event)=>{
//   validateSelection(player);
//   console.log('selction executed');
//
//     ($($openSquares)).on('click',(event)=>{
//     player.off();
//
//        selectDestination();
//
//         ordainMove(player, $selectionDiv, $destinatonDiv);
//
//         changeTurn();
//
//         ($($openSquares)).off();
//
//    })
//    });
   // selectPiece();
// === Change variables to update onclick functions===
//GOAL is to tie listeners to variables, then change the varibale definitions by dynamically updating the arrays behind them, or switching between arrays(on turn). This way the on click functions are never touched and this limitst the number of points of change...

//Question is ohw to call the functions? Is it better to use callbacks or global variables???

   //----ALTERNATIVE--- posibilities are n rows aways from postion times 7 or 9¡, couls incorporate row count in calcing possibilities. This would allow the computer to identify all pot7ential possiblities on the board for a given piece....!  Could evaluate for any multiple of -7 or 9 so long as they are not blank... but would need to change jump evaluations... !!! Might also be useful for the board restrictions!

   //==**NO NEED FOR THOUGHTS ON BORDERS USER CANT SELECT WHAT DOESN'T EXIST!!1**==//
   // last square is at each row[square[0]] &  each row[square[7], all squares in row 1 and all squares in row 8
   // how to leverage this? ...
   //  with current code must test left/Right move/jump values first.
   //  if either <0 or > 64 = null
   // How to handle sides??? Depends on direction
   // ! If move/jump right or left is not a multiple of 8???
   // is a
   // for p1 From second right column, move/right is a multiple of 8
   //     off board is a multiple of 8 +1
   //for p2 From second right column, move/right is a multiple of 8
   //     off board is a multiple of 8+1
   // DOES NOT ALIGN WITH CURRENT LEFT RIGHT ...
   // based on current: if p1 is different from p2 move right
   // For p2 From second left, a move left is a multiple of 8+1
   //     off board is a  multiple of 8
   //
   // p1 right%8!=0 not divisible = border move = null...
   // p2 right(reall left) /8 =0 - border move = null...
   // This requires an if statement...
   // Alternative is to create arrays and check values
   // if (moveRight%8===0 && playerOp == 1){ moveRight = null}
   // if (moveLeft%8===0 && playerOp == 1){ moveLeft = null}
   // if (moveLeft%8!===0 && playerOp ==2){moveRight = null}
   //// if (moveRight%8!===0 && playerOp ==2){moveRight = null}
// if (moveRight%8===0 && playerOp == 1){ moveRight = null}
//// *borders are NOT needed to prevent user from clicking across the BOARD, Becausewrap arounds are red
//
//
//
//****LIMIT WHAT THE PLAYER CAN DO TO GUIDE THEM TO THE CORRECT PROGRAM FLOW!
// STOP CHANGE TURN! ON WRONG MOVE OR PIECE
// need an error handler onerror exit loop there are no more plays.
//JUMPS NEED TO BE RESET VIA FUNCTION
