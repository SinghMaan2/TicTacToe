let turn0 = true;
let win = document.querySelector(".winner");
let btns = document.querySelectorAll("button");

function checkWinner() {
    if ((btns[0].innerText == "X" && btns[1].innerText == "X" && btns[2].innerText == "X")) {
        btns[0].style.backgroundColor = 'red';
        btns[1].style.backgroundColor = 'red';
        btns[2].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });

    }
    else if ((btns[0].innerText == "0" && btns[1].innerText == "0" && btns[2].innerText == "0")) {
        btns[0].style.backgroundColor = 'red';
        btns[1].style.backgroundColor = 'red';
        btns[2].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
    }
    else if ((btns[0].innerText == "X" && btns[3].innerText == "X" && btns[6].innerText == "X")) {
        btns[0].style.backgroundColor = 'red';
        btns[3].style.backgroundColor = 'red';
        btns[6].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[0].innerText == "0" && btns[3].innerText == "0" && btns[6].innerText == "0")) {
        btns[0].style.backgroundColor = 'red';
        btns[3].style.backgroundColor = 'red';
        btns[6].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[0].innerText == "X" && btns[4].innerText == "X" && btns[8].innerText == "X")) {
        btns[0].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[0].innerText == "0" && btns[4].innerText == "0" && btns[8].innerText == "0")) {
        btns[0].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[3].innerText == "X" && btns[4].innerText == "X" && btns[5].innerText == "X")) {
        btns[3].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[5].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[3].innerText == "0" && btns[4].innerText == "0" && btns[5].innerText == "0")) {
        btns[3].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[5].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[6].innerText == "X" && btns[7].innerText == "X" && btns[8].innerText == "X")) {
        btns[6].style.backgroundColor = 'red';
        btns[7].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[6].innerText == "0" && btns[7].innerText == "0" && btns[8].innerText == "0")) {
        btns[6].style.backgroundColor = 'red';
        btns[7].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[1].innerText == "X" && btns[4].innerText == "X" && btns[7].innerText == "X")) {
        btns[1].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[7].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[1].innerText == "0" && btns[4].innerText == "0" && btns[7].innerText == "0")) {
        btns[1].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[7].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[2].innerText == "X" && btns[5].innerText == "X" && btns[8].innerText == "X")) {
        btns[2].style.backgroundColor = 'red';
        btns[5].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[2].innerText == "0" && btns[5].innerText == "0" && btns[8].innerText == "0")) {
        btns[2].style.backgroundColor = 'red';
        btns[5].style.backgroundColor = 'red';
        btns[8].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[2].innerText == "X" && btns[4].innerText == "X" && btns[6].innerText == "X")) {
        btns[2].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[6].style.backgroundColor = 'red';
        win.innerText = 'Winner is X';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }
    else if ((btns[2].innerText == "0" && btns[4].innerText == "0" && btns[6].innerText == "0")) {
        btns[2].style.backgroundColor = 'red';
        btns[4].style.backgroundColor = 'red';
        btns[6].style.backgroundColor = 'red';
        win.innerText = 'Winner is 0';
        refBtn.innerText = 'New Game';
        btns.forEach((btn) => {
            btn.disabled = true;
        });
    }

}
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn0) {
            btn.innerText = "0";
            turn0 = false;
        }
        else {
            btn.innerText = "X";
            turn0 = "true";
        }
        btn.disabled = true;

        checkWinner();
    })
});

let refBtn = document.querySelector(".refresh-btn");

function refreshPage() {
    btns.forEach((btn) => {
        btn.innerText = null;
        btn.disabled = false;
        win.innerText = null;
        turn0 = true;
    });
}

refBtn.addEventListener('click', refreshPage);
refBtn.addEventListener('click', () => {
    refBtn.innerText = 'Refresh';
});
refBtn.addEventListener('click', () => {
    btns.forEach((btn) => {
        btn.style.backgroundColor = 'greenyellow';
    });
})
