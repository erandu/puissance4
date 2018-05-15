

const nbrOfCol = 7;
const nbrOfRow = 6;

let grid = [];
var stage

const cellWidth = 100;
const cellHeight = cellWidth;
const margin = 4;

const gridHeight = nbrOfRow * cellHeight + nbrOfRow * margin;
const gridWidth = nbrOfCol * cellWidth + nbrOfCol * margin;



function initGrid() {
  for (let i = 0; i < nbrOfRow; i++) {
    grid.push([]);
    for (let j = 0; j < nbrOfCol; j++) {
      grid[i].push(0);
    }
  }
}

const handleClick = function(event){
  const cell = event.target;
 // alert("click on " + cell.pos.x + ' ' + cell.pos.y)
  socket.emit('news', {id: id, pos_x: cell.pos.x });


}

function init() {
  initGrid();
  
  $('#demoCanvas').attr({width: gridWidth, height: gridHeight}).css({width: gridWidth, height: gridHeight});

  stage = new createjs.Stage("demoCanvas");
  let startX = margin;
  let startY = 0;

  for (let i = 0; i < nbrOfRow; i++) {
      for (let j = 0; j < nbrOfCol; j++) {
          var cell = new createjs.Shape();

            cell.graphics.beginFill("DeepSkyBlue").drawRect(startX, startY, cellWidth, cellWidth);
            cell.on("click", handleClick);

            cell.value = null;
            cell.pos = {
                x: j,
                y: i
            };
            cell.txt = new createjs.Text("", "bold " + (cellWidth + 5) + "px Arial", "#333");
            
            cell.txt.textBaseline = "alphabetic";
            cell.txt.x = startX + cellWidth / 8;
            cell.txt.y = startY + 4 / 5 * cellWidth;

            grid[i].push(cell);
            stage.addChild(cell);
            stage.addChild(cell.txt);

            startX += cellWidth + margin;
      }
      startX = margin;
      startY += cellHeight + margin;
  }
  stage.update();
  $("#victoire").html(""); 
  $("#victoire").css("background-color","white");
  $("#victoire").css("color","white");


}

function update_case_ui(grid) {

  


  for (let i = 0; i < nbrOfRow; i++) {
    for (let j = 0; j < nbrOfCol; j++) {
      
          if (grid[i][j]==id)
          {
            var cell = new createjs.Shape();
              cell.value = null;
              cell.pos = {
                x: j,
                y: i
                };
             cell.graphics.beginFill("Red").drawRect(margin + cell.pos.x*(margin + cellWidth),  cell.pos.y*(margin + cellWidth), cellWidth, cellWidth);
             stage.addChild(cell);
             stage.update();
          }

          else if (grid[i][j]!=0)
          {
            var cell = new createjs.Shape();
              cell.value = null;
              cell.pos = {
                x: j,
                y: i
                };
             cell.graphics.beginFill("Yellow").drawRect(margin + cell.pos.x*(margin + cellWidth),  cell.pos.y*(margin + cellWidth), cellWidth, cellWidth);
             stage.addChild(cell);
             stage.update();
          }
    }
  }
  
}


function connect() {
  socket.emit('co');
  $('#co').hide();
  $('#deco').show();
 

  
}


function disconnect() {
  socket.emit('deco');
  $('#co').show();
  $('#deco').hide();
  $('#info_connexion').html("Vous êtes déconnecté");
  $('#joueur').html("");
  $("#joueur_courant").html("");

  $("#victoire").html(""); 
  $("#victoire").css("background-color","white");
  $("#victoire").css("color","white");
}


function hide_deco() {
    $('#deco').hide();

}


