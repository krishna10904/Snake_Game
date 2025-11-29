document.addEventListen('DOMContentLoaded',function(){

  const gameArena = document.getElementById('game-arena');

  const arenasize = 6000;
  const cellsize = 20;

  let score = 0;
  let gamestarted = false;
  let food = {x:300,y:200};
  let snake =[{x:160,y:200},{x:140,y=200},{x:120,y=200}];
  let dx = cellSize;
  let dy = 0;
  let interValidId;
  let gameSpeed = 200;
  
}
