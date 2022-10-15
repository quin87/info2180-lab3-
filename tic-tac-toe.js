window.onload = function(){
    let boxes = document.getElementById('board').getElementsByTagName('div');
    let button = document.querySelector('.btn')
    let player1 = 1;
    let p1Array = [];
    let p2Array = [];
    let winConditions = [
        ['0', '4', '8'],
        ['6', '7', '8'],
        ['2', '5', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['3', '4', '5'],
        ['2', '4', '6'],
        ['0', '1', '2']
    ];


    for(i=0; i<boxes.length; i++){
        boxes[i].id = i;
        boxes[i].classList.add('square');
        boxes[i].addEventListener('click', handleClick, { once: true});
    }

    button.addEventListener('click', clicked);

    function handleClick(o){
        if(player1 == 1){
            o.target.innerHTML = 'X';
            o.target.classList.add('X');
            player1 = 0;
            p1Array.push(o.target.id);
            if(winner(p1Array)){
                document.getElementById('status').innerHTML = 'Congratulations! X is the Winner!';
                document.getElementById('status').classList.add('you-won');
                for(i=0; i<boxes.length; i++){
                    boxes[i].removeEventListener('click', handleClick, { once: true});
                }
            }
        }else {
            o.target.innerHTML = 'O';
            o.target.classList.add('O');
            player1 = 1;
            p2Array.push(o.target.id);
            if(winner(p2Array)){
                document.getElementById('status').innerHTML = 'Congratulations! O is the Winner!';
                document.getElementById('status').classList.add('you-won');
                for(i=0; i<boxes.length; i++){
                    boxes[i].removeEventListener('click', handleClick, { once: true});
                }
            }
        }
        if(winner(p1Array) != true && winner(p2Array) != true && (p1Array.length + p2Array.length) == 9){
            document.getElementById('status').innerHTML = 'Oh No! Seems like there was a draw';
        }     
    }

    function winner(array){
        for(i=0;i<winConditions.length;i++){
            var yes = 0;
            for(x=0;x<winConditions[i].length;x++){
                if(array.includes(winConditions[i][x])){
                    yes +=1;
                    if(yes == 3){
                        return true;
                    }
                } 
            }
        }
    }

    function clicked(e){
        player1 = 1;
        p1Array = [];
        p2Array = [];
        document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won');

        for(i=0; i<boxes.length; i++){
            boxes[i].innerHTML = '';
            boxes[i].classList.remove('O');
            boxes[i].classList.remove('X');
            boxes[i].addEventListener('click', handleClick, { once: true});
        }
    }
};