function game(board)
{
    var vert_result = check_vert(board)
    var hoz_result = check_hoz(board)
    var diag_result = check_diag(board)

    if(vert_result == 1 || hoz_result == 1 || diag_result == 1){
      return "X Wins"
    }
    else if(vert_result == -1 || hoz_result == -1 || diag_result == -1){
      return "O Wins"
    }
    else {
      return "No Winner"
    }
}

function check_vert(board)
{

    for(row in board)
    {
      var x_score = 0;
      var o_score = 0;
        for(col in board)
        {
          if(col == "x")
          {
           //Add one to X score for row
            x_score += 1;
          }
          else if (col == "o")
          {
            //Add one to O score for row
          }
        }
        if(x_score==3)
        {
          //If X has 3 in the current row
          return -1;
        }
        else if (o_score==3)
        {
          //If O has 3 in the current row
          return 1;
        }
        else
        {
          return 0;
        }
    }
}

function check_hoz(board)
{

}

function check_diag(board)
{

}

const tictactoe = [ ["x",,], [,"x",], [,,"x"] ]

game(tictactoe)
