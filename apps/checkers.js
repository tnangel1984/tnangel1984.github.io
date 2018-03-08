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

//*Scoping will be a challenge if you separate functions....



//****LIMIT WHAT THE PLAYER CAN DO TO GUIDE THEM TO THE CORRECT PROGRAM FLOW!
///***NEED TO FIGURE OUT FUNCTION FLOW


//  ---- Alternative to changing the eventHandler is to have three separate ones tied to 3 different dynamic arrays that are constanty updating... unless you tie player pieces to images you can re-append the images and the onclick event would always follow.
// If player & playable   3 arrays constantly beign update...still has to happen
// If image re-append no changes
// If total board -reassign once in program float... re-assignment happend each time...
// Leaves open to many useless possibilities for clicking squares. Limit users control flow and for game progression.

//GOAL is to tie listeners to variables, then change the varibale definitions by dynamically updating the arrays behind them, or switching between arrays(on turn). This way the on click functions are never touched and this limitst the number of points of change...

//Question is ohw to call the functions? Is it better to use callbacks or global variables???



// ====FUNCTIONS HERE====

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
                //$.merge() returns an array of jquery elements; not actual objects (if javascript arrays are input it returns normal js arrays)
                    // console.log($('.player2').find($('.oddRow').find('div.even')));
                    // console.log($('.player2').find($('.evenRow').find('div.odd')));
                    // console.log($.merge($('.player2').find($('.oddRow').find('div.even')), $('.player2').find($('.evenRow').find('div.odd'))));
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
      playerOp = sum;//<--mneeeds to be a functio
      playerImage= p2Image;
      opponentImage = p1Image;
      playGame();
      console.log(playerImage);
    }else{
       player=$player1;
       playerOp=subtract;// <--neeeds to be a function;
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
        // debugger;
       $destinationDiv = $(event.currentTarget);

      }
  }

 //  //
  const ordainMove = (player, selection, destination)=>{
    // ***OFF BOARD RESTRICTIONS NEED TO HAPPEN HERE ON THE OUTSIDE
    //**SHOULD THIS BE 3 SEPARATE FUNCTIONS??? Definitions, Moves, Jumps?
      let selectionId = Number(selection.attr('id'));
      let destinationId = Number(destination.attr('id'));
console.log(selectionId);console.log(destinationId);
    //Lists possible 1st moves... Doesn't change...
      MoveLeft = playerOp(selectionId,7);
      MoveRight = playerOp(selectionId,9);
      JumpLeft = playerOp(selectionId,14);
      JumpRight = playerOp(selectionId,18);
// debugger
      if(destinationId=== MoveLeft || destinationId=== MoveRight){
            console.log('destination validation 2 complete'); //EXCUTE MOVE!
            move(playerImage, selection, destination);
              //validates 3 things: That Destination is ordained position, jump piece is an oppenents piece, AND that the piece IN THE THE DIRECTION OF the jump .
      }else{     //if (destinationId=== JumpLeft || destinationId=== JumpRight){
          let jumpCount = 1;
//***BLANK TEST NEEDED IN LOOPS!!!
          do {
              //validates 3 things: That Destination is a moveable position, that jump piece is an oppenents piece, AND that the piece IN THE THE DIRECTION OF the jump .
debugger
              if(destinationId=== JumpLeft && $('#'+MoveLeft).attr('src', opponentImage)){
                  move(playerImage, selection, destination);
                  $('#'+MoveLeft).children().remove();
          //***Reset Selection & Destination ***NEED TO MAKE THIS INTO A FUNCTION!
                  selection = destination;
                  selectionId = destinationId;
                  destinationId = playerOp(selectionId,14);
                  destination = destination.attr('id',destinationId);
      //*****WILL NEED TO CHANGE TO PLAYER IMAGE
                  jumpCount++;

              }else if(destinationId=== JumpRight && $('#'+MoveRight).attr('src', opponentImage)){
                  move(playerImage, selection, destination);//THEN MOVE RIGHT
                  $('#'+MoveRight).children().remove();  //jump(); //EXECUTE JUMP FUNCTION!!
                  destination = MoveRight;
                  selection = destination;
                  selectionId = destinationId;
                  destinationId = playerOp(selectionId,14);
                  destination = destination.attr('id',destinationId);
                  jumpCount++;

              }else if(jumpCount>1){
                jumpCount =0; //resets jump count; Could use this to add msg celebrating doubles or triples.
                console.log('There are no more moves');
              }else{
                debugger
                jumpCount=0;
                console.log('This is not a valid move');
              }
          }
          // WHAT IS THE CORRECT EXIT CONDITION?? Exit loop when there are no more Jump conditions which means the message changes
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

      //make an ordain JUMP!
      //----ALTERNATIVE--- posibilities are n rows aways from postion times 7 or 9¡, couls incorporate row count in calcing possibilities. This would allow the computer to identify all pot7ential possiblities on the board for a given piece....!  Could evaluate for any multiple of -7 or 9 so long as they are not blank... but would need to change jump evaluations... !!! Might also be useful for the board restrictions!

//***UPDATE NEEDE CURRENTLY ONLY P2!!!

          //checks that destination selected is within range of allowable moves, then calls move.


//****  REVISED PLAYER CHANGES AND BUILD TURN TAKING BEFORE MOVING FORWARD!
      // const ordainJump =(player, selection, destination)=>{
        //Move Evaluation may need to be separate from a jump evaluationso that jumps can be looped, jump evaluations need to be looped for double and triple jumps...
        //Run check blanks..
        //NEED TO CONFIRM END OF TURN!! Each time.


//====ON CLICK EVENTS HERE
//****CHANGED ALL PLAYER 2 TO NEW PLAYER VARIABLE VALUE TOGGLES BETWEEN PLAYERS
const playGame =()=>{
  console.log('lets play!');
  $selectionDiv='';
  $destinationDiv='';

    player.on('click',(event)=>{
      // event.preventDefault();
      // debugger
      validateSelection(player);
      console.log($selectionDiv);
      console.log('selction executed');
      // (player).off();
                 // $(event.currentTarget).css('border', '3px solid blue' )
              //precise target gets a deselect onclick event goes here.
              //<<< NEED TO BE ABLE TO TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!!
    });

        ($openSquares).on('click',(event)=>{
            player.off();
            if($selectionDiv= ''){
              playGame();
            }else{
              // event.preventDefault();
              // $openSquares.off();
              debugger
                 selectDestination();
                 debugger
                  console.log($selectionDiv);
                  //precise target gets a deselect onclick event goes here.
                  ordainMove(player, $selectionDiv, $destinationDiv);
                  changeTurn();
              }
       });
       // selectPiece();

};



// How should selection be limited?  Based on Turns  So first I need to establish that its player 1's turn.
//Then i need  that player to be passed through a parameter  and it's peices selected/ turned ON.
//Then i need the peice clicked to be checked to ensure that they are in the players set of playable peices
  // $('img').on('click', selectDestination);
//Destination must be Nested... reassign img listener...

// Two options, place event listener on ALL squares then run allowables
// Place event listerns on SOME squares... then run allowables
//if THE listener is on all squares you can make alerts for red squared moves...
// This would require the same logic to limit squares in the first place so mght as well build that logic..
//...time to create variables for playable spaces.

//The ONLY way to do this is via objects or arrays...

// May Likely result in a change to the player piece staging portion of the code.
playGame();
})






//TO DO! Next
    // 15. Players Turn...!!! Define images here/playerOperation/direction can you define everything here??
    // 18. Update ARRAYS
    // 19. Need to re-visit event handlers and calls.
    // 20. TOGGLE SELECT -DESELECCT IF PLYAER CHANGES MIND!!!
    // 21. Build in Border Limits!
    // 22. *** FIX CSS Squares move when window shrinks.



    //special considerations for boundaries! - any square along the sides of the board ONLY has ONE option for moving, NOT tow
    // GOAL - Condition FLOW should be structured to progress as follows:
    //   From  zero possibilities for moves to ONE possibility moves to TWO possibility moves.
    //        ...maybe run border check algorithm first... and separate? as opposed to having it built in to the normal evaluation function...


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

//=== EVENT LISTENERS/HANDELERS ===
    // player.onclick ()
    //    calls validate selections and RETURNS A VALUE
    // openSquares.onclick()
    //

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

// 11. SELECT PIECE event.target/currentTarget...
// 12. SELECT DESTINATION div event.target/currentTarget...
// 13. BUILD Evaluation LOGIC
// 14. BUILD MOVE Piece Function.
// 16. BUILD Jump Function
// 17. add REMOVE OPPONENT
// 18. LOOP Jump Function!




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
