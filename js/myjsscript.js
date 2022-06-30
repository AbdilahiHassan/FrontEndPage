
"use strict";

var  myh1 = document.getElementsByTagName("h1")[1];
console.log(myh1);
myh1.innerHTML ="Abdilahi khaliif xaaji hassan";
myh1.style.color ="blue";
//myboard.innerHTML= "<div> <p> box in my box</p></div>";
//myboard.innerHTML= ""; this is makeing emty 
var Createbtn = document.getElementById("Createbtn");
Createbtn.addEventListener("click", myfunction);


var myList = document.getElementById("myList");
var newListitem = document.createElement("li");
newListitem.innerHTML = "Banana";
myList.appendChild(newListitem);

var fruitList = ["Banana", "Mango", "Lemon", "Oranage "];
for (const fruit of fruitList) {
    var newListitem = document.createElement('li');
    newListitem.innerHTML = fruit;
    myList.appendChild(newListitem);
}

//myfunction();

function myfunction(){

      var  myboard = document.getElementById("board");
      myboard.style.backgroundColor = "gray";
      myboard.style.height = "300px";
      myboard.style.width = "300px";
      myboard.style.border = "3px solid black";
      
      for (let amount = 0; amount <9; amount++) {
          // console.log(amount);
          var myredCube;
          var mygreenCube;
          if(amount % 2 == 0){
              
            myredCube =   document.createElement("div");
               myredCube.className ="redCube";
               myredCube.innerHTML = amount;
              myboard.appendChild(myredCube);
            }else{
                mygreenCube =   document.createElement("div");
                mygreenCube.className ="greenCube";
                mygreenCube.innerHTML = amount;
           myboard.appendChild(mygreenCube);

       }
        
      }
      
}
