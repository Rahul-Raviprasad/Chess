var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
var fill = true;
for(var i = 0; i < 8; i++) {
  for(var j = 0; j < 8; j++) {

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

//draw the game state
/*
var gameState =
[
  [{a8},{b8},{c8},{d8},{e8},{f8},{g8},{h8}],
  [{a7},{b7},{c7},{d7},{e7},{f7},{g7},{h7}],
  [{a6},{b6},{c6},{d6},{e6},{f6},{g6},{h6}],
  [{a5},{b5},{c5},{d5},{e5},{f5},{g5},{h5}],
  [{a4},{b4},{c4},{d4},{e4},{f4},{g4},{h4}],
  [{a3},{b3},{c3},{d3},{e3},{f3},{g3},{h3}],
  [{a2},{b2},{c2},{d2},{e2},{f2},{g2},{h2}],
  [{a1},{b1},{c1},{d1},{e1},{f1},{g1},{h1}],
];
//rows go from a to h and columns from 1-8

*/
//initial position of all 32 peices on the board
[{
  color: 'black',
  position: {
    row: '8',
    col: 'a'
  },
  name: 'rook'
},
{
  color: 'black',
  position: {
    row: '8',
    col: 'b'
  },
  name: 'knight'
},
{
  color: 'black',
  position: {
    row: 'c',
    col: '8'
  },
  name: 'bishop'
},
{
  color: 'black',
  position: {
    row: 'd',
    col: '8'
  },
  name: 'queen'
},
{
  color: 'black',
  position: {
    row: 'e',
    col: '8'
  },
  name: 'king'
},
{
  color: 'black',
  position: {
    row: 'f',
    col: '8'
  },
  name: 'bishop'
},
{
  color: 'black',
  position: {
    row: 'g',
    col: '8'
  },
  name: 'knight'
},
{
  color: 'black',
  position: {
    row: 'h',
    col: '8'
  },
  name: 'rook'
},
{
  name: 'pawn',
  color: 'black',
  position: {
    row: ''
  }
}


{
  color: 'white',
  position: {
    row: 'a',
    col: '1'
  },
  name: 'rook'
},
{
  color: 'white',
  position: {
    row: 'b',
    col: '1'
  },
  name: 'knight'
},
{
  color: 'white',
  position: {
    row: 'c',
    col: '1'
  },
  name: 'bishop'
},
{
  color: 'white',
  position: {
    row: 'd',
    col: '1'
  },
  name: 'queen'
},
{
  color: 'white',
  position: {
    row: 'e',
    col: '1'
  },
  name: 'king'
},
{
  color: 'white',
  position: {
    row: 'f',
    col: '1'
  },
  name: 'bishop'
},
{
  color: 'white',
  position: {
    row: '1',
    col: 'g'
  },
  name: 'knight'
},
{
  color: 'white',
  position: {
    col: 'h',
    row: '1'
  },
  name: 'rook'
}

existingPieces = [];
