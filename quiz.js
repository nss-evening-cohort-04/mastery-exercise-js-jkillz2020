var myTreeHeight = document.getElementById("height").value;
var myTreeCharacter = document.getElementById("character").value;
button = document.getElementById("grow-tree");
var treeObject = {
  height : myTreeHeight,
  character : myTreeCharacter
};
newLine = "";

function buildTree() {
  var treeStuff = validateInputs();
 growTree(treeStuff) }

  function growTree(treeObject){
  for (var i = 1; i <= treeObject.height; i++) {
      newLine = "";
      for (var j = 0; j <= treeObject.height-i-1; j++) {
        newLine += " ";
      }
  for (var j = 1; j<= 2*i - 1; j++) {
        newLine += treeObject.character;
      }
    //LINE IS ENTERED TO BREAK THE LOOP AND THE FORUMLA CONTINUES ON THE NEXT LINE TO MAKE TREE SHAPE*****
      console.log(newLine);
    }
}

//****FUNCTION VALIDATES INPUT FROM USER TO ENSURE THERE ARE VALUES ENTERED IN BOTH BOXES*******

function validateInputs() {
  if (((document.getElementById("height").value).length == 0) || ((document.getElementById("character").value).length == 0)) {
    alert("Please enter both a height and a character!");
    
  }
  else {
    var height = document.getElementById("height").value;
    var character = document.getElementById("character").value;
    var treeObject = {
    height: height,
    character: character
  }
  return treeObject;
  }
}

button.addEventListener("click", buildTree);

function enterKeyPressed(keypress){
  if (keypress.which === 13) {
    buildTree();
  }
}

document.addEventListener("keydown", enterKeyPressed);