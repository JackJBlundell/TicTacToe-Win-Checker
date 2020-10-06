function game(board)
{
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
      var row = board[i];
      var x_score = 0;
      var o_score = 0;

      for(var j = 0; j < row.length; j++) {
          if(row[j]=="x"){
          	x_score += 1;
          } else if(row[j]=="o"){
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

}

function check_diag(board)
{

}

const x_win_vert_board = [ ["x","x","x"], [,"x",], [,,"x"] ]
const o_win_vert_board = [ ["x",,"x"], ["o","o","o"], [,,"x"] ]

game(x_win_vert_board)
game(o_win_vert_board)
