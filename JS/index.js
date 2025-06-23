/*--
File: index.js
other Files: style.css,index.html validate.js 
parctice using jquery validation plug in.learned how to link both js files to .css and html sendding back actions using functions.practiced keeping track of variables. 
Jorge Mejia , UMass Lowell Computer Science, jorge_mejia1@student.uml.edu
credits:Bro Code JavaScript tutorial Url:https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=2158s
Copyright (c) JM 
updated by JM on june 16, 2025
-->*/

var elForm, elMinRow, elMaxRow, elMinCol, elMaxCol,elerror,elTableR_C;


elForm    = document.getElementById('RangeForm');
elMinRow  = document.getElementById('minRow');
elMaxRow  = document.getElementById('maxRow');
elMinCol  = document.getElementById('minCol');
elMaxCol  = document.getElementById('maxCol');
elerror = document.getElementById('error');

function retrieveValues() {

  var minRow = elMinRow.value;
  var maxRow = elMaxRow.value;
  var minCol = elMinCol.value;
  var maxCol = elMaxCol.value;
  var tableHTML = "";
  var tablehead = "<th> 0 </th>";
  //extra th for the first child covered
  
// converting to ints so that i can check if input is  a string or charachter and alert
  minRow = parseInt(minRow);
  maxRow = parseInt(maxRow);
  minCol = parseInt(minCol);
  maxCol = parseInt(maxCol);

  console.log(minRow);
  console.log(maxRow);
  console.log(minCol);
  console.log(maxCol);

  
  

/*//range is taken care by html min and max 
 if (
    isNaN(minRow) || isNaN(maxRow) ||
    isNaN(minCol) || isNaN(maxCol)
  ) 
  {
    error.textContent="Please enter a number between -50 - 50.";
    return;
  }

  if (minRow > maxRow) {
    error.textContent="Minimum Row must be less than or equal to Maximum Row.";
    return;
  }

  if (minCol > maxCol) {
    error.textContent="Minimum Column must be less than or equal to Maximum Column.";
    return;
  }
  if (minCol > maxCol) {
    error.textContent="Minimum Column must be less than or equal to Maximum Column.";
    return;
  }
  if (minCol< -50|| minCol>50 || maxCol< -50 
    || maxCol>50 || minRow < -50 || minRow >50
     || maxRow<-50|| maxRow >50) {
    error.textContent="Invalid. Values must be between -50  50";
    return;
  }*/
// creates the header col
  for (var col = minCol; col <= maxCol; col++) 
    {
   tablehead += " <th>"+col+"</th> ";
  }
//row label 
  for (var row = minRow; row <= maxRow; row++) {
    tableHTML += " <tr> <td>"+ row +"</td> ";
  //and cells
  for (var col2 = minCol; col2 <= maxCol; col2++) {
      tableHTML +=" <td>"+ (row*col2) +"</td> ";
    }
    tableHTML += " </tr>";
  }


  document.getElementById("tabler_td").innerHTML = tablehead+tableHTML;

  
}

