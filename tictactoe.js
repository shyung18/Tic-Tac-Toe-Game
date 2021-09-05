let currentPlayer = 'X';
let board  = document.getElementsByTagName("td");
let restart_button = document.getElementsByTagName("restart_button");
let next_player = document.getElementById("nextPlayer");

//board = [3, 4, 5, 6, 7, 8, 9, 10, 11] where content equal the tabIndex
for(let i=0; i<board.length; i++)
{
    //Allow the user to move around the board and place the X and O's with the enter key
    document.onkeydown = function (e)
    {
        const current_new_position = document.activeElement.tabIndex;

        //ex. Go Left: If current tabIndex = 6, then board[6 - 4] = board[2] = 5, the left tabIndex.
        const left_new_position = current_new_position - 4;
        const right_new_position = current_new_position - 2;
        const up_new_position = current_new_position - 6;
        const enter_position = current_new_position - 3;

        // All the positions (board index) has to be within 0 and 8
        const goLeftCondition = left_new_position >= 0 && left_new_position < board.length;
        const goRightCondition = right_new_position >= 0 && right_new_position < board.length;
        const goUpCondition = up_new_position >=0 && up_new_position < board.length;
        const goDownCondition = current_new_position >= 0 && current_new_position < board.length;

        switch(e.key) {
            case "Left":
            case 'ArrowLeft':
                goLeftCondition && board[left_new_position].focus();
                break;
            case "Right":
            case 'ArrowRight':
                goRightCondition && board[right_new_position].focus();
                break;
            case "Up":
            case 'ArrowUp':
                goUpCondition && board[up_new_position].focus();
                break;
            case "Down":
            case 'ArrowDown':
                goDownCondition && board[current_new_position].focus();
                break;
            case 'Enter':
                board[enter_position].click();
                break;            
        }

        if(e.code == 'Space')
        {
            board[enter_position].click();
        }
    }
    
    /* Add onclick attribute to each box and adds X and O's accordingly with specific style for each*/
    board[i].onclick = function() 
    {
        if(currentPlayer === 'X' && board[i].innerText==="")
        {
            board[i].innerHTML= 'X';
            
            board[i].style.color = "firebrick";
            currentPlayer = 'O';
            
            next_player.innerHTML = currentPlayer; 
            next_player.style.color = "dodgerblue";

        }
        else if(currentPlayer === 'O'&& board[i].innerText==="")
        {
            board[i].innerHTML = 'O';
            board[i].style.color = "dodgerblue";
            currentPlayer = 'X';
            next_player.innerHTML = currentPlayer; 
            next_player.style.color = "firebrick";
        }

        if(checkWinner())
        {
            /*Remove onclick attributes from each box elements so that you can't keep playing*/
            //Also remove the focus on the boxes so that it highlights the winner alert instead
            for(let j=0; j<board.length; j++)
            {
                board[j].blur();
                document.getElementsByTagName('td')[j].onclick = '';
            }
        }
        
    }
    
    
}

//Reloads the page when you click the restart button
document.getElementById("restart_button").addEventListener("click", function(){
    window.location.reload();
  });

function checkWinner()
{
    /* Checks all the possible ways to win. Does not check for ties */
    if((board[0].innerText + board[1].innerText + board[2].innerText === 'XXX' || board[0].innerText + board[1].innerText + board[2].innerText === 'OOO') ||
        (board[3].innerText + board[4].innerText + board[5].innerText === 'XXX' || board[3].innerText + board[4].innerText + board[5].innerText === 'OOO') ||
        (board[6].innerText + board[7].innerText + board[8].innerText === 'XXX' || board[6].innerText + board[7].innerText + board[8].innerText === 'OOO') ||
        (board[0].innerText + board[3].innerText + board[6].innerText === 'XXX' || board[0].innerText + board[3].innerText + board[6].innerText === 'OOO') ||
        (board[1].innerText + board[4].innerText + board[7].innerText === 'XXX' || board[1].innerText + board[4].innerText + board[7].innerText === 'OOO') ||
        (board[2].innerText + board[5].innerText + board[8].innerText === 'XXX' || board[2].innerText + board[5].innerText + board[8].innerText === 'OOO') ||
        (board[0].innerText + board[4].innerText + board[8].innerText === 'XXX' || board[0].innerText + board[4].innerText + board[8].innerText === 'OOO') ||
        (board[2].innerText + board[4].innerText + board[6].innerText === 'XXX' || board[2].innerText + board[4].innerText + board[6].innerText === 'OOO')
    )
    {
        /* Display who the winner is depending on who ended the game*/
        if(currentPlayer === "X")
        {
            let winner = document.createElement("p");
            winner.innerHTML = "O is the Winner";
            winner.tabIndex = 12;
            winner.id="winner";
            document.body.appendChild(winner);
            document.getElementById('winner').focus();
        }
        else
        {
            let winner = document.createElement("p");
            winner.innerHTML = "X is the Winner";
            winner.tabIndex = 12;
            winner.id="winner";
            document.body.appendChild(winner);
            document.getElementById('winner').focus();
        }
        return true;
    }
    else
    {
        return false;
    }
}
