// Rover Object Goes Here
// ======================
var roverObj = {
direction: "N",
x: 0,
y: 0,
travelLog: []
}
// ======================
function turnRight(rover){
  switch (rover){
      case "N":
      roverObj.direction = "E";
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
      case "S":
      roverObj.direction = "W";
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
      case "E":
      roverObj.direction = "S"
      console.log("Rover is now facing "+roverObj.direction);
      break;
     
      case "W":
      roverObj.direction = "N"
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
  }
}

function turnLeft(rover){
  switch (rover){
      case "N":
      roverObj.direction = "W";
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
      case "S":
      roverObj.direction = "E";
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
      case "E":
      roverObj.direction = "N"
      console.log("Rover is now facing "+roverObj.direction);
      break;
     
      case "W":
      roverObj.direction = "S"
      console.log("Rover is now facing "+roverObj.direction);
      break;
      
    }
  
  }

  function moveForward(rover){
    if((roverObj.x >= 0 && roverObj.x <= 10) && (roverObj.y >= 0 && roverObj.y <= 10)){
      if ( rover == "W" ){
        roverObj.x -= 1;
        console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
      }
      if (rover == "N"){
        roverObj.y -= 1;
        console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
      }
      if (rover == "S"){
        roverObj.y += 1;
        console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
      }
      if (rover == "E"){
        roverObj.x += 1;
        console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
      }
    }
    }

function moveBackwards(rover){
  if((roverObj.x >= 0 && roverObj.x <= 10) && (roverObj.y >= 0 && roverObj.y <= 10)){
    if ( rover == "W" ){
      roverObj.x += 1;
      console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
    }
    if (rover == "N"){
      roverObj.y += 1;
      console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
    }
    if (rover == "S"){
      roverObj.y -= 1;
      console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
    }
    if (rover == "E"){
      roverObj.x -= 1;
      console.log("Rover moves to "+roverObj.x+" "+roverObj.y)
    }
  }
  }

  function roverMove(command){
    var facing = "";
    var position = []; 
      
    for (var a = 0; a < command.length; a++){
        
        if (command[a] == "f"){
          facing = roverObj.direction;
          moveForward(facing);
          
          position[0] = roverObj.x;
          position[1] = roverObj.y;
        } 
        if (command[a] == "b"){
          facing = roverObj.direction;
          moveBackwards(facing);
          
          position[0] = roverObj.x;
          position[1] = roverObj.y;
        } 
        if ( command[a] == "r"){
          if((roverObj.x >= 0 && roverObj.x <= 10) && (roverObj.y >= 0 && roverObj.y <= 10)){
            facing = roverObj.direction;
          turnRight(facing);
          }
        }
        if (command[a] == "l"){
          if((roverObj.x >= 0 && roverObj.x <= 10) && (roverObj.y >= 0 && roverObj.y <= 10)){
            facing = roverObj.direction;
          turnLeft(facing);
          }
        }
      }
      roverObj.travelLog.push(position);
     
      if (roverObj.x == 0 && roverObj.y == 0 ){
          console.log("Rover stays at "+roverObj.x+", "+roverObj.y+" and is facing "+roverObj.direction)
      }
     
      else if ((roverObj.x >= 0 && roverObj.x <= 10) && (roverObj.y >= 0 && roverObj.y <= 10)){
      console.log("Rover has travelled to "+roverObj.travelLog+" and now is facing "+roverObj.direction)
    }

    else {
      roverObj.travelLog = [];
      roverObj.x = 0;
      roverObj.y = 0;
      roverObj.direction = "N";
      console.log("Rover has travelled to "+position+"  and is off the map, reset to beginning point "+roverObj.x+", "+roverObj.y+", and beginning position facing "+roverObj.direction)
    }
    }

// Second Rover (Red) Object Goes Here
// Red starts at 5,5 and Facing S
// ======================
var redObj = {
  direction: "S",
  x: 5,
  y: 5,
  travelLog: []
  }
  // ======================
  function turnRightRed(red){
    switch (red){
        case "N":
        redObj.direction = "E";
        console.log("Red is now facing "+redObj.direction);
        break;
        
        case "S":
        redObj.direction = "W";
        console.log("Red is now facing "+redObj.direction);
        break;
        
        case "E":
        redObj.direction = "S"
        console.log("Red is now facing "+redObj.direction);
        break;
       
        case "W":
        redObj.direction = "N"
        console.log("Red is now facing "+redObj.direction);
        break;
        
    }
  }
  
  function turnLeftRed(red){
    switch (red){
        case "N":
        redObj.direction = "W";
        console.log("Red is now facing "+redObj.direction);
        break;
        
        case "S":
        redObj.direction = "E";
        console.log("Red is now facing "+redObj.direction);
        break;
        
        case "E":
        redObj.direction = "N"
        console.log("Red is now facing "+redObj.direction);
        break;
       
        case "W":
        redObj.direction = "S"
        console.log("Red is now facing "+redObj.direction);
        break;
        
      }
    
    }
  
    function moveForwardRed(red){
      if((redObj.x >= 0 && redObj.x <= 10) && (redObj.y >= 0 && redObj.y <= 10)){
        if ( red == "W" ){
          redObj.x -= 1;
          console.log("Red moves to "+redObj.x+" "+redObj.y)
        }
        if (red == "N"){
          redObj.y -= 1;
          console.log("Red moves to "+redObj.x+" "+redObj.y)
        }
        if (red == "S"){
          redObj.y += 1;
          console.log("Red moves to "+redObj.x+" "+redObj.y)
        }
        if (red == "E"){
          redObj.x += 1;
          console.log("Red moves to "+redObj.x+" "+redObj.y)
        }
      }
      }
  
  function moveBackwardsRed(red){
    if((redObj.x >= 0 && redObj.x <= 10) && (redObj.y >= 0 && redObj.y <= 10)){
      if ( red == "W" ){
        redObj.x += 1;
        console.log("Red moves to "+redObj.x+" "+redObj.y)
      }
      if (red == "N"){
        redObj.y += 1;
        console.log("Red moves to "+redObj.x+" "+redObj.y)
      }
      if (red == "S"){
        redObj.y -= 1;
        console.log("Red moves to "+redObj.x+" "+redObj.y)
      }
      if (red == "E"){
        redObj.x -= 1;
        console.log("Red moves to "+redObj.x+" "+redObj.y)
      }
    }
    }
  
    function redMove(command){
      var face = "";
      var pos = []; 
        
      for (var a = 0; a < command.length; a++){
          
          if (command[a] == "f"){
            face = redObj.direction;
            moveForwardRed(face);
            
            pos[0] = redObj.x;
            pos[1] = redObj.y;
          } 
          if (command[a] == "b"){
            face = redObj.direction;
            moveBackwardsRed(face);
            
            pos[0] = redObj.x;
            pos[1] = redObj.y;
          } 
          if ( command[a] == "l"){
            if((redObj.x >= 0 && redObj.x <= 10) && (redObj.y >= 0 && redObj.y <= 10)){
              face = redObj.direction;
            turnLeftRed(face);
            }
          }
          if (command[a] == "r"){
            if((redObj.x >= 0 && redObj.x <= 10) && (redObj.y >= 0 && redObj.y <= 10)){
              face = redObj.direction;
            turnRightRed(face);
            }
          }
        }
        redObj.travelLog.push(pos);
      
      if (redObj.x == 5 && redObj.y == 5){
        console.log("Red stays at "+redObj.x+", "+redObj.y+" and facing "+redObj.direction)
      }

      else if ((redObj.x >= 0 && redObj.x <= 10) && (redObj.y >= 0 && redObj.y <= 10)){
        console.log("Red has travelled to "+redObj.travelLog+" and now is facing "+redObj.direction)
      }

      else {
        redObj.travelLog = [];
        redObj.x = 5;
        redObj.y = 5;
        redObj.direction = "S";
        console.log("Red has travelled to "+pos+"  and is off the map, reset to beginning point "+redObj.x+", "+redObj.y+", and beginning position facing "+redObj.direction)
      }
      }

// Third Rover (Blue) Object Goes Here
// Blue starts at 4,3 and Facing W
// ======================
var blueObj = {
  direction: "W",
  x: 4,
  y: 3,
  travelLog: []
  }
  // ======================
  function turnRightBlue(blue){
    switch (blue){
        case "N":
        blueObj.direction = "E";
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
        case "S":
        blueObj.direction = "W";
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
        case "E":
        blueObj.direction = "S"
        console.log("Blue is now facing "+blueObj.direction);
        break;
       
        case "W":
        blueObj.direction = "N"
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
    }
  }
  
  function turnLeftBlue(blue){
    switch (blue){
        case "N":
        blueObj.direction = "W";
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
        case "S":
        blueObj.direction = "E";
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
        case "E":
        blueObj.direction = "N"
        console.log("Blue is now facing "+blueObj.direction);
        break;
       
        case "W":
        blueObj.direction = "S"
        console.log("Blue is now facing "+blueObj.direction);
        break;
        
      }
    
    }
  
    function moveForwardBlue(blue){
      if((blueObj.x >= 0 && blueObj.x <= 10) && (blueObj.y >= 0 && blueObj.y <= 10)){
        if ( blue == "W" ){
          blueObj.x -= 1;
          console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
        }
        if (blue == "N"){
          blueObj.y -= 1;
          console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
        }
        if (blue == "S"){
          blueObj.y += 1;
          console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
        }
        if (blue == "E"){
          blueObj.x += 1;
          console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
        }
      }
      }
  
  function moveBackwardsBlue(blue){
    if((blueObj.x >= 0 && blueObj.x <= 10) && (blueObj.y >= 0 && blueObj.y <= 10)){
      if ( blue == "W" ){
        blueObj.x += 1;
        console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
      }
      if (blue == "N"){
        blueObj.y += 1;
        console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
      }
      if (blue == "S"){
        blueObj.y -= 1;
        console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
      }
      if (blue == "E"){
        blueObj.x -= 1;
        console.log("Blue moves to "+blueObj.x+" "+blueObj.y)
      }
    }
    }
  
    function blueMove(command){
      var f = "";
      var p = []; 
        
      for (var a = 0; a < command.length; a++){
          
          if (command[a] == "f"){
            f = blueObj.direction;
            moveForwardBlue(f);
            
            p[0] = blueObj.x;
            p[1] = blueObj.y;
          } 
          if (command[a] == "b"){
            f = blueObj.direction;
            moveBackwardsBlue(f);
            
            p[0] = blueObj.x;
            p[1] = blueObj.y;
          } 
          if ( command[a] == "r"){
            if((blueObj.x >= 0 && blueObj.x <= 10) && (blueObj.y >= 0 && blueObj.y <= 10)){
              f = blueObj.direction;
            turnRightBlue(f);
            }
          }
          if (command[a] == "l"){
            if((blueObj.x >= 0 && blueObj.x <= 10) && (blueObj.y >= 0 && blueObj.y <= 10)){
              f = blueObj.direction;
            turnLeftBlue(f);
            }
          }
        }
        blueObj.travelLog.push(p);
      
      if (blueObj.x == 4 && blueObj.y == 3){
        console.log("Blue stays at "+blueObj.x+", "+blueObj.y+" and is facing "+blueObj.direction)
      }  
        
      else if ((blueObj.x >= 0 && blueObj.x <= 10 && blueObj.x != 4) || (blueObj.y >= 0 && blueObj.y <= 10 && blueObj.y != 3)){
        console.log("Blue has travelled to "+blueObj.travelLog+" and now is facing "+blueObj.direction)
      }
      
      else {
        blueObj.travelLog = [];
        blueObj.x = 4;
        blueObj.y = 3;
        blueObj.direction = "W";
        console.log("Blue has travelled to "+p+"  and is off the map, reset to beginning point "+blueObj.x+", "+blueObj.y+", and beginning position facing "+blueObj.direction)
      }
      }