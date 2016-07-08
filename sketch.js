  var playing = false;
  var fingers;
  var button;
  
function preload() {

}
function setup() {
  createCanvas(640, 480);
  table = loadTable("data/GPScombined.csv", "csv", "header",readTable);
  
  //["Goat", "Leopard", "Zebra"]

  //cycle through the table
  for (var r = 0; r < table.getRowCount(); r++)
    for (var c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }

}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function readTable(data) {
  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");

  print(table.getColumn("yaw"));
}