let currentPlayer = 'X';
let board  = document.getElementsByTagName("td");
let button = document.getElementsByTagName("button");

for(let i=0; i<board.length; i++)
{
    //Allow the user to move around the board and place the X and O's with the enter key
    document.onkeydown = function (e)
    {
        if(e.keyCode == '37' && document.activeElement.tabIndex-4 >= 0 && document.activeElement.tabIndex-4 < board.length)
        {
            board[document.activeElement.tabIndex-4].focus();
        }
        else if(e.keyCode == '39' && document.activeElement.tabIndex-2 >= 0 && document.activeElement.tabIndex-2 < board.length)
        {
            board[document.activeElement.tabIndex-2].focus();
        }
        else if(e.keyCode == '38' && document.activeElement.tabIndex-6 >= 0 && document.activeElement.tabIndex-6 < board.length)
        {
            board[document.activeElement.tabIndex-6].focus();
        }
        else if(e.keyCode == '40' && document.activeElement.tabIndex >= 0 && document.activeElement.tabIndex < board.length)
        {
            board[document.activeElement.tabIndex].focus();
        }
        else if(e.keyCode == '13' || e.keyCode == '32')
        {
            board[document.activeElement.tabIndex-3].click();
        }
    }

    
    /* Add onclick attribute to each box and adds X and O's accordingly with specific style for each*/
    board[i].onclick = function() 
    {
        if(currentPlayer === 'X'&& board[i].innerText==="")
        {
            board[i].innerHTML= 'X';
            
            board[i].style.color = "firebrick";
            currentPlayer = 'O';
            
            document.getElementById("nextPlayer").innerHTML = currentPlayer; 
            document.getElementById("nextPlayer").style.color = "dodgerblue";

        }
        else if(currentPlayer === 'O'&& board[i].innerText==="")
        {
            board[i].innerHTML = 'O';
            board[i].style.color = "dodgerblue";
            currentPlayer = 'X';
            document.getElementById("nextPlayer").innerHTML = currentPlayer; 
            document.getElementById("nextPlayer").style.color = "firebrick";
            
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
document.getElementById("button").addEventListener("click", function(){
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
