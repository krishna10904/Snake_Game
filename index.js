document.addEventListener('DOMContentLoaded', function () {

    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0; // Score of the game
    let gameStarted = false; // Game status
    let food = { x: 300, y: 200 }; // {x: 15*20, y: 10*20} // -> cell coordinate -> pixels// top left pixels for food
    let snake = [{x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200}]; // [head, body, body, tail]

    let dx = cellSize; // +20
    let dy = 0;
    let intervalId;
    let gameSpeed = 200;
    
    function moveFood() {
        let newX, newY;

        do {
            newX = Math.floor(Math.random() * 30) * cellSize;
            newY = Math.floor(Math.random() * 30) * cellSize;
        } while(snake.some(snakeCell => snakeCell.x === newX && snakeCell.y === newY));

        food = { x: newX, y: newY };
    }
    function updateSnake() {
        const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(newHead); // Add new head to the snake

        // check collision with food
        if(newHead.x === food.x && newHead.y === food.y) {
            score += 10;
            moveFood();

            if(gameSpeed > 50) {
                clearInterval(intervalId);
                gameSpeed -= 10;
                gameLoop();
            }

        } else {
            snake.pop(); // Remove tail
        }
    }
