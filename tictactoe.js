let currentPlayer = 'X';
let board  = document.getElementsByTagName("td");

/* Add onclick attribute to each box and adds X and O's accordingly with specific style for each*/
for(let i=0; i<board.length; i++)
{
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
            for(let j=0; j<board.length; j++)
            {
                document.getElementsByTagName('td')[j].onclick = '';
            }
        }
    }
    
}

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
            let winner = document.createElement("H1");
            winner.innerHTML = "O is the Winner";
            document.body.appendChild(winner);
        }
        else
        {
            let winner = document.createElement("H1");
            winner.innerHTML = "X is the Winner";
            document.body.appendChild(winner);
        }
        return true;
    }
    else
    {
        return false;
    }
}



