window.onload = onLoad

function onLoad(){
    startNewGame();
}

const maps = {
    1: [
        [1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1],
    ]
}

function displayMap(level){
    console.log("now displaying map for level" + " " + level);
  
  for(let i = 0; i < maps[level].length; i++){
    displayMapRow(maps[level][i])
  }  
}

function startNewGame(){
    displayMap(1);
}
function displayMapRow(mapRow){
    const gameRoot = document.getElementById("game-root");
    
}