

//====Checkers with Kings====
// RULES: EVERY PIECE STARTS ON A BLACK square.
//        PIECES ONLY MOVE DIAGNALLY
//        PIECES ONLY MOVE FORWARD...until crowned
//        PLAYER 1 = BOTTOM  PLAYER 2 = TOP of board
//
//===MINIMUM VIABLE PRODUCT===
// win state = remove opponents pieces from board...
// lose state = all your pieces are removed from the board.
// vs. player or computer
//      >start with vs player!
//      > then automate computer with random number generator and square id's
// turn Taking black/red alternate pieces (X's and O's) to move
//
// ===IMPROVEMENT===
// sound effects if moved/not moveable.
// glowing divs if destination selection.
// celebration if crowned.
// ====BUILD BOARD====
//CLASSES and DIVS>>
//
//    className = odd or even ??? dependent on board count... could be a better alternative to using numericals for entire board
//    divId option1 = board squareCount  ??? NUMBER ALL to limit game play? << Do this easier allows for more options.
//            className = color ??? May NOT be necessary, color is just a derivative of odd/even, and off even has greater semantic value.
//        divId option2 = gameplay squareCount !!!Critical Minimum needed for gameplay
//                ??? just wait to see what is needed, second class if needed.
//
//
//
// TIC TAC TOE >>use for loop to generate board DIV's (squares and rows)
//              x??? ARE ROW DIV'S NECCESSARY? YES to stack divs easily... though could use flexbox
//                  Rows could be used to place pieces... . (see even rows, odd rows piece placement below)
//  >start with smaller board  4x4 to test; traditional board is 8x8
//      >>*EXTRA user inputs to generate board size
//      DO NOT ALLOW PLAYERS TO PICK THEIR SIDE OF BOARD!
// >!!!CRITICAL - CREATE PLAYER 1 AND PLAYER 2 DIVs??? might be useful to easily do piece placement!!
//
//

// BOARD COLORS >>
//  once generated, use loop to assign numbered id's (counts) in order with NO breaks (which is why its done after not during creation)
//  IF STMT goes here ->Evaluate counts for odd/even properties.  FOR squares AND ROWs!!! (rows might be done during creation)
//  WILL not assign board colors! will use even odd class names, and reference them in CSS.
//       !!!CRITICAL Arrays start from ZERO!! NOT 1! so odd and even will be reversed on board.... unless you create a BLANK ENTRY to represent ARRAY[0] AND set i to 1 when looping through  IF using i as the argument for INDEX- -OR use i+1... no, better to force index position to align with board 1-64... ??? JUST MAKE A DECISION AND BE CONSISTENT.
//
//====PIECE PLACEMENT===
// RULES: EVERY PIECE STARTS ON A BLACK square.
//   !!!CRICTICAL ONLY BLACK SQUARES MAKE GAMEPLAY
//       BE CAREFUL: odd rows play on even #divs, even rows play on odd # num divs, so LOOP  would need to loop through and have alternate conditions for both.
//
//   !OR  could do 2 separate loops for player 1 and player 2 for only ROWs[i] needed...
//
// ====PLAYER 1 PLAYER 2 ====  ??? Should this be a class?? or array??
// DO NOT ALLOW PLAYERS TO PICK THEIR SIDE OF BOARD!
// Player 1 = BOTTOM and Player 2 on TOP.
// could create separate player 1 & 2 arrays... Probably best. if div is in player 1 array, add text(player 1 Token) etc.
//
// >start with X's and O's as div text  (also KINGX  and KINGO)
//      > NEXT Input alternate images  as div text
// >start with X
//      > NEXT use Input to allow user to choose.//
//
//   should pieces separate from DIVS or objects of Divs?
//    Currently they will be properties of DIVS, later they will be element objects<img>
//
//  Because the piece is a object of the DIV changing the div id/class will have no affect
//  Will need to move pieces (txt or img) by re-assigning value of text or image src attribute
//
//  *ALTERNATIVELY could have the "pieces" be a CSS background image in the div,
//    then only a class change would be needed to "move" the pieces to the next div...
//
//===== GAMEPLAY=====
//
//RULES: PIECES ONLY MOVE DIAGONALLY,...( ONLY ON BLACK SQUARES)...(!ONLY ON EVEN SQUARES!)
//
// Event Listeners...
//   PIECE SELECTION>
//      On Click piece divID goes into pieceSelection variable
//
//   DESTINATION SELECTION>>
//      On Click piece destionationDivID goes into desitination variable
//      Run evaluation module that determines whether move is allowed
//      If Allowed, call MovesPiece s
//      If Allowed call MovePiece and RemovePiece
//      If not allowed do nothing... (ugly sound)
//
//   PIECE ACTIONS>
//     MOVE:Substitute text value OR reappend image into destionationDiv
//     REMOVE:
//
//
//   On click  IF move is allowed i.e. destionationDivID === allowedDestination
//   then MOVE >> re
//
//nested if stmt:outer conditions test if KING| inner conditions normal gameplay
//      if (KINGX || KING0) {different set of rules 4 possible movements separate function?}
//      }else{ normal gameplay
// Arrayof movable positions depends on if odd or even placed pieces...if top or bottom.. if player 1 or player 2
//
//
//  DO NOT ALLOW PLAYERS TO PICK THEIR SIDE OF BOARD!
// ==ORDAINED DESTINATONS!==
//
//
// IF PLAYER 1...Bottom board... Odd Placement
//
//     1. CALC both possible div options are currentDivID  - 7  and  currentDivID -9  <<< (pass into SAME variable for each player(req1))
//        1a.  NO NEGATIVE VALUES! ALLOWED
//        1b.  ALL possible div options must be less than current div ID
//        1c.  ALL possible div options must be opposite current div class even/odd etc.
//    2.  MUST BE BLANK!  (no text or img already assigned)
//  ----- IF BOTH ARE TRUE THEN PASS INTO allowedDestination
//    3. IF calcDestination is FALSE do nothing (play ugly sound)
//    4. IF not Blank, SEE WHO'S IN THE desitination Box  you or opponents
//        4a. IF YOU do nothing (ugly sound)
//        4b. IF opponent evaluate JUMP OPPORTUNITY
//    7.  Change (currentDiv)EVALUATION DIV run evaluation loop again! (STEP 1-2) if allowable JUMP if not do nothing (ugly sound)
//    8. if JUMP is made change run evaluation from new currentDiv Position if JUMP opportunity exists JUMP... keep looping jumps till no oportunity OR end of board..
//
//
// IF PLAYER 2...Top board... Even Placement

//     1. BOTH possible div options are current DivID  +7  and  currentDivID +9
//        1a. NO VALUES OVER board squares.length allowed!!
//    2-8. all the same.
//
//====COMPUTER GAMEPLAY====
//
// How does the computer make a move?
//        It needs to know where its pieces are AND wh It needs to know where the opponents pieces are...
//        ... with out having to evaluate every piece on the board each time... Needs to be an ARRAY of pieces
//       It needs to know which pieces it can move... without testing everypiece every time...
// It needs Arrays of its pieces, opponents pieces, and it's playable pieces (still contingent on square evaluations)!
//
// It needs to be a good opponent, to it needs to know how to prioritize!
//      it needs to look for all jump opportunities first... (and/or KING opportunities). and double jumps over jumps!
//      then look for and elminate moves that avoid it getting jumped second, but still take them if its the only option
//      **Then it needs to evaluate the next steps and prioritize those... i.e. double jump vs getting jumped. or a double jump that leads to getting jumped.
//      Then it needs to "choose" from what's left of the available options via a random number generator
// ***What does a computer need to prioritize??? Are nested case/if statements enough??? OR does there need to be some sort of numeric ranking system???
//
//
// Why is tP necessary to  necessary?... to distinguish the types of functions they call... if any.
//
//  To Communicate to User ...NON- Playable squares could return nothing or return an alert (sound alert) with instructions.
//   Alternatively this could be used to distinguish which elements get an event listener in the first place....
//   Gameplay impact. When selecting pieces currently the onClick activates and passes currentlocation values into variables for EVERY SQUARE - This only needs to happen on playable squares... NO a playbale square could still not have a piece on it SO it only needs to happen on playablesquares that HAVE pieces in them.... Soooo need a DYNAMIC ARRAY or object that tracks pices??? or just run an individual square check every time... either way something has to be checked the square or the array so which is more efficient...?

//Is there any reason the program needs to know where every piece is on the board????
//YES FOR  vs. COMPUTER GAME PLAY!!! which would be done via random number generation..

//
//once generated, use loop and div Ids to alternate colors
//
// >>PLACE PIECES
//   RULES: EVERY PIECE STARTS ON A BLACK square.
//
//        PIECES ONLY MOVE FORWARD...until crowned
//
//
//assign class???
//      >
//
// **THEME**
//
// Token Images??
//
//
//
//     Option 2: is Leave as is, and use i+=2 to increment...
// ??? Will need to think this through, probably a waste of time to assign to all if won't be used.... NO WILL BE used to alternate colors, so div id's still needed... unless you create an alternate 'TOGGLE function to assign squares colors... Noooope that doesn't make sense class should represent color to easiy CSS.
