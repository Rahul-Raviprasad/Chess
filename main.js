var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
var fill = true;
for(var i = 0; i < 8; i++) {
  for(var j = 0; j < 8; j++) {
    //ctx.fillRect(i*100, j*100, 100, 100);
    if(fill) {
      ctx.fillRect(i*100, j*100, 100, 100);
      fill = false;
      ctx.fillStyle = "green";
    } else {
      ctx.fillRect(i*100, j*100, 100, 100);
      fill = true;
      ctx.fillStyle = "black";
    }
  }
}
