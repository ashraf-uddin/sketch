$(document).ready(function(){
  createDivs(16);
  changeColor();
  clearCanvas();
  changeGridSize();
});

//creates the 16 divs to use as squares
function createDivs(gridDimension) {
  $(".container").children().remove();
  $(".container").append("<table>");
  for(i=0; i < gridDimension; i++) {
    $(".container").append("<tr>");
    for(j=0; j < gridDimension; j++) {
      $(".container").append("<td></td>")
      $("td").css("height", 800/gridDimension);
      $("td").css("width", 800/gridDimension);
    }  
    $(".container").append("</tr>");
  }
  $(".container").append("</table>");
  drawOnCanvas(getColor());
};

// allows user ot draw on canvas
function drawOnCanvas(color) {
  $("td").hover(function() {
    $(this).css("background-image", "none");
    $(this).css("background-color", color);
  });
};

function getColor() {
  return $("#chooseColor").val();
}

// allow user to select color to draw with
function changeColor() {
  $('select').on('change', function() {
    var color = this.value;
    drawOnCanvas(color);
  });
};

// clear canvas when "Clear" button is clicked
function clearCanvas() {
  $("#clear").click(function() {
    $("td").css("background-color", "white");
    $("td").css("background-image", "none");
  });
};

// change the dimension of grid by asking user for new size, only allows number
function changeGridSize() {
  $("#gridSize").click(function() {
    var userDimension = prompt("Enter the grid size (i.e. enter 10 for a 10*10 grid)")
    while (isNaN(userDimension) === true) {
      userDimension = prompt("Please enter a number for the grid size."); 
    }
    createDivs(userDimension);
  });
};
