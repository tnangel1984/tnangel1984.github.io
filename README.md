# tnangel1984.github.io
Uses HTML,JS,JQUERY, & CSS.

====KEY CHALLENGES===
Event listeners: Turning on and off, elminating multiple clicks.
JQUERY Objects vs JS vs Elements: Knowing which are called.
Variable Scope & Functions: Decided whether to return a local variable value or change a global variable.

=====Would Like To Add ===
vs. Computer and program strategic decision making  (i.e. prioritizing jumping the player, avoiding moving to spaces where compute can be jump)

====Directions=====
'Welcome to Checkers! Move diagonally across the board toward your opponent.Jump over your opponent to capture their pieces.  First to capture all of their opponents peices wins.'

 ====Map of Game Play====
    // 1.click;
    // 2. select piece; confirms that it is okay to select this piece.
    // 3.click again;
    // 4. select destination;
    // 5. Run evaluations
    // 6. Make move(s) -->update arrays
    // 7. Make jump(s)  -->update arrays
    // 8. Next players turn
    // 9. Loop


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
    // calcMoves()

//=== EVENT LISTENERS/HANDELERS ===
    // player.onclick ()
    //    calls validate selections and RETURNS A VALUE
    // openSquares.onclick()
    //

/