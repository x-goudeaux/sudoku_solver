
//global variable
//accesible to all functions
var sol =
    [[0, 7, 0, 2, 3, 8, 0, 0, 0],
    [0, 0, 0, 7, 4, 0, 8, 0, 9],
    [0, 6, 8, 1, 0, 9, 0, 0, 2],
    [0, 3, 5, 4, 0, 0, 0, 0, 8],
    [6, 0, 7, 8, 0, 2, 5, 0, 1],
    [8, 0, 0, 0, 0, 5, 7, 6, 0],
    [2, 0, 0, 6, 0, 3, 1, 9, 0],
    [7, 0, 9, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 9, 7, 4, 0, 8, 0]];
//this function prints the board
var printBoard = function () {
    //print board
    //this is here to help you understand how the code works.
    //you should remove it when you write your own code.
   

    var num_id = 11;
    for( var i = 0; i < sol.length; i++){
        for(var j = 0; j < sol[i].length; j++){
                if(num_id % 10 == 0){
                    num_id++;
                }
                document.getElementById('r' + num_id).textContent = sol[i][j]
                num_id++;
            
        }
    }


    
};

//write the code to solve the puzzle here
//once solved you may need to call the printBoard function again
//to display the result
var solve = function() {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < N; j++)
        {
            if (sol[i][j] == 0)
            {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty)
        {
            break;
        }
    }
    if (isEmpty)
    {
        return true;
    }

    for(let num = 1; num <= N; num++)
    {
        if (check(sol, row, col, num))
        {
            sol[row][col] = num;
            if (solve())
            {
                printBoard();
            }
            else
            {
                sol[row][col] = 0;
            }
        }
    }
    return false;
  
};
function check(board, row, col, num)
{
     
    // Row has the unique (row-clash)
    for(let d = 0; d < board.length; d++)
    {
         
        // Check if the number we are trying to
        // place is already present in
        // that row, return false;
        if (board[row][d] == num)
        {
            return false;
        }
    }
 
   
    for(let r = 0; r < board.length; r++)
    {
          
        
        if (board[r][col] == num)
        {
            return false;
        }
    }
 

    let sqrt = Math.floor(Math.sqrt(board.length));
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;
 
    for(let r = boxRowStart;
            r < boxRowStart + sqrt; r++)
    {
        for(let d = boxColStart;
                d < boxColStart + sqrt; d++)
        {
            if (board[r][d] == num)
            {
                return false;
            }
        }
    }
 
   
    return true;
}

let N = sol.length;
printBoard();



