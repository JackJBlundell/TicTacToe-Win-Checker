function game(board)
{
  //Printing the board
    console.log("\nTic Tac Toe:\n")
    console.log(board[0][0]+" | "+board[0][1]+" | "+board[0][2]+"\n"+
                "----------\n"+
                board[1][0]+" | "+board[1][1]+" | "+board[1][2]+"\n"+
                "----------\n"+
                board[2][0]+" | "+board[2][1]+" | "+board[2][2]+"\n"
    )

    var vert_result = check_vert(board)
    var hoz_result = check_hoz(board)
    var diag_result = check_diag(board)

    if(vert_result == 1 || hoz_result == 1 || diag_result == 1){
      console.log("X Wins")
    }
    else if(vert_result == -1 || hoz_result == -1 || diag_result == -1){
     console.log("O Wins")
    }
    else {
      console.log("No Winner")
    }
}

function check_vert(board)
{
  for(var i = 0; i < board.length; i++) {
      var x_score = 0;
      var o_score = 0;

      for(var j = 0; j < board.length; j++) {
          if(board[i][j]=="x"){
          	x_score += 1;
          } else if(board[i][j]=="o"){
          	o_score +=1;
          }
      }

      if(x_score==3){
      	return 1
      } else if(o_score==3){
      	return -1
      }
  }
  return 0;
}

function check_hoz(board)
{
  for(var i = 0; i < board.length; i++) {
      var x_score = 0;
      var o_score = 0;

      for(var j = 0; j < board.length; j++) {
          if(board[j][i]=="x"){
            x_score += 1;
          } else if(board[j][i]=="o"){
            o_score +=1;
          }
      }

      if(x_score==3){
        return 1
      } else if(o_score==3){
        return -1
      }
  }
  return 0;
}

function check_diag(board)
{

}

//DIFFERENT BOARD RESULTS
const x_win_vert_board = [ ["x","x","x"], ["o","x","x"], ["x","o","o"] ]
const o_win_vert_board = [ ["x","","x"], ["o","o","o"], ["","","x"] ]
const x_win_hoz_board = [ ["x","","x"], ["x","o","o"], ["x","","x"] ]
const o_win_hoz_board = [ ["x","o","x"], ["o","o","o"], ["","o","x"] ]
const no_win = [ ["x","o","x"], ["o","x","o"], ["o","x","o"] ]

game(x_win_vert_board)
game(o_win_vert_board)
game(x_win_hoz_board)
game(o_win_hoz_board)
game(no_win)
