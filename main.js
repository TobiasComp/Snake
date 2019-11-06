

const boardSize = 9;
drawBoard(boardSize);
var interval;

let snake = {
    length: 1,
    pos_x:0,
    pos_y:0,
    direction:"Right"  
}
generateRandomBlock();

function generateRandomBlock(){
    let randomNumber = Math.floor(Math.random()*(boardSize*boardSize));
    let random_y = Math.floor(randomNumber/boardSize);
    let random_x = randomNumber%boardSize;
    debugger;
    drawBlock( "p"+random_y+random_x);
}

function drawBlock(id){
    document.getElementById(id).style="background-color:black";

}
function drawBoard(size){
    let boardElement = document.getElementById("board");
    let boardBody = "";
    for (var i=0; i<size; i++) {
        boardBody += "<tr>"
        for (var j=0; j<size; j++){
            boardBody +="<td id=p"+ (i+"")+(j+"")+"></td>";

        }
        boardBody += "</tr>"

    }
    boardElement.innerHTML = boardBody;
}

function drawSnake(){
    document.getElementById("p"+snake.pos_y+snake.pos_x).style="background-color:white";

    switch(snake.direction){
        case "Up":
            if (snake.pos_y==0)
                snake.pos_y=8;
            else  
                snake.pos_y = (snake.pos_y-1);
            break;  
        case "Down":
            if (snake.pos_y==8)
                snake.pos_y=0;
            else
                snake.pos_y = (snake.pos_y+1);
            break;
        case "Left":
            if (snake.pos_x ==0)
                snake.pos_x = 8;
            else
                snake.pos_x = snake.pos_x-1;
            break;
        case "Right":
                if (snake.pos_x == 8)
                snake.pos_x = 0;
            else
                snake.pos_x = snake.pos_x+1;
            break;
    }       
    document.getElementById("p"+snake.pos_y+snake.pos_x).style="background-color:black";
}

function changeDirection(event){
        snake.direction = event.code.replace("Arrow","");
        console.log(snake,event);

}

function stopInterval(){
    clearInterval(interval);
}

function startInterval(){
    interval = setInterval(drawSnake,500);

}

document.addEventListener("keydown", event => {
    changeDirection(event);
}
);