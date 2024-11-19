function check() {
  var out = parseInt(Array.from((document.getElementById("01").checked==true?"1":"0")+(document.getElementById("02").checked==true?"1":"0")+(document.getElementById("03").checked==true?"1":"0")+(document.getElementById("04").checked==true?"1":"0")+(document.getElementById("05").checked==true?"1":"0")+(document.getElementById("06").checked==true?"1":"0")+(document.getElementById("07").checked==true?"1":"0")+(document.getElementById("08").checked==true?"1":"0")).reverse().join(""),2).toString(16);
  let out2 = ((out.length==1?"280":"28")+out);
  document.getElementById("textarea").value += String.fromCodePoint(parseInt(out2,16));
  document.getElementById("output").innerText = "u"+out2;
  if(document.getElementById("clearafter").checked==true){clearnums()};
}

function newline() {
  document.getElementById("textarea").value += "\n";
}
function clearbox() {
  document.getElementById("textarea").value = "";
}

function backspace() {
  document.getElementById("textarea").value = document.getElementById("textarea").value.slice(0,-1);
}

function clearunicode() {
  document.getElementById("output").innerText = "unicode number goes here.";
}

function clearnums() {
  document.getElementById("01").checked = false;
  document.getElementById("02").checked = false;
  document.getElementById("03").checked = false;
  document.getElementById("04").checked = false;
  document.getElementById("05").checked = false;
  document.getElementById("06").checked = false;
  document.getElementById("07").checked = false;
  document.getElementById("08").checked = false;
}

function filled() {
  document.getElementById("01").checked = true;
  document.getElementById("02").checked = true;
  document.getElementById("03").checked = true;
  document.getElementById("04").checked = true;
  document.getElementById("05").checked = true;
  document.getElementById("06").checked = true;
  document.getElementById("07").checked = true;
  document.getElementById("08").checked = true;
}

function left() {
  document.getElementById("01").checked = true;
  document.getElementById("02").checked = true;
  document.getElementById("03").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("04").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("05").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("06").checked = false};
  document.getElementById("07").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("08").checked = false};
}

function right() {
  if(document.getElementById("dontclear").checked==false){document.getElementById("01").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("02").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("03").checked = false};
  document.getElementById("04").checked = true;
  document.getElementById("05").checked = true;
  document.getElementById("06").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("07").checked = false};
  document.getElementById("08").checked = true;
}

function bottom() {
  if(document.getElementById("dontclear").checked==false){document.getElementById("01").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("02").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("03").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("04").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("05").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("06").checked = false};
  document.getElementById("07").checked = true;
  document.getElementById("08").checked = true;
}

function topf() {
  document.getElementById("01").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("02").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("03").checked = false};
  document.getElementById("04").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("05").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("06").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("07").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("08").checked = false};
}

function openp() {
  if(document.getElementById("dontclear").checked==false){document.getElementById("01").checked = false};
  document.getElementById("02").checked = true;
  document.getElementById("03").checked = true;
  document.getElementById("04").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("05").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("06").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("07").checked = false};
  document.getElementById("08").checked = true;
}

function closedp() {
  document.getElementById("01").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("02").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("03").checked = false};
  if(document.getElementById("dontclear").checked==false){document.getElementById("04").checked = false};
  document.getElementById("05").checked = true;
  document.getElementById("06").checked = true;
  document.getElementById("07").checked = true;
  if(document.getElementById("dontclear").checked==false){document.getElementById("08").checked = false};
}

function xswap() {
  let states = [document.getElementById("01").checked, document.getElementById("02").checked, document.getElementById("03").checked, document.getElementById("04").checked, document.getElementById("05").checked, document.getElementById("06").checked, document.getElementById("07").checked, document.getElementById("08").checked];

  // 1 4
  // 2 5
  // 3 6
  // 7 8
  document.getElementById("01").checked = states[3];
  document.getElementById("02").checked = states[4];
  document.getElementById("03").checked = states[5];
  document.getElementById("04").checked = states[0];
  document.getElementById("05").checked = states[1];
  document.getElementById("06").checked = states[2];
  document.getElementById("07").checked = states[7];
  document.getElementById("08").checked = states[6];
}

function yswap() {
  let states = [document.getElementById("01").checked, document.getElementById("02").checked, document.getElementById("03").checked, document.getElementById("04").checked, document.getElementById("05").checked, document.getElementById("06").checked, document.getElementById("07").checked, document.getElementById("08").checked];

  // 1 4
  // 2 5
  // 3 6
  // 7 8
  document.getElementById("01").checked = states[6];
  document.getElementById("02").checked = states[2];
  document.getElementById("03").checked = states[1];
  document.getElementById("04").checked = states[7];
  document.getElementById("05").checked = states[5];
  document.getElementById("06").checked = states[4];
  document.getElementById("07").checked = states[0];
  document.getElementById("08").checked = states[3];
}

document.getElementById("01").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("01").checked=document.getElementById("01").checked==true?false:true}}
document.getElementById("02").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("02").checked=document.getElementById("02").checked==true?false:true}}
document.getElementById("03").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("03").checked=document.getElementById("03").checked==true?false:true}}
document.getElementById("04").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("04").checked=document.getElementById("04").checked==true?false:true}}
document.getElementById("05").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("05").checked=document.getElementById("05").checked==true?false:true}}
document.getElementById("06").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("06").checked=document.getElementById("06").checked==true?false:true}}
document.getElementById("07").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("07").checked=document.getElementById("07").checked==true?false:true}}
document.getElementById("08").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("08").checked=document.getElementById("08").checked==true?false:true}}

// Code Snippets and Notes from Development

// Array.from((document.getElementById("01").checked==true?"1":"0")+(document.getElementById("02").checked==true?"1":"0")+(document.getElementById("03").checked==true?"1":"0")+(document.getElementById("04").checked==true?"1":"0")+(document.getElementById("05").checked==true?"1":"0")+(document.getElementById("06").checked==true?"1":"0")+(document.getElementById("07").checked==true?"1":"0")+(document.getElementById("08").checked==true?"1":"0")).reverse().join("")

// parseInt(,2)

// document.getElementById("01").onmouseover=function(){if(document.getElementById("hover").checked==true){document.getElementById("01").checked=document.getElementById("01").checked==true?false:true}}

// 1 4
// 2 5
// 3 6
// 7 8

// document.getElementById("01").checked = states[6];
// document.getElementById("02").checked = states[2];
// document.getElementById("03").checked = states[1];
// document.getElementById("04").checked = states[7];
// document.getElementById("05").checked = states[5];
// document.getElementById("06").checked = states[4];
// document.getElementById("07").checked = states[0];
// document.getElementById("08").checked = states[3];

// window.onerror = function(message, url, linenumber) {
//   alert('Error message: '+message+'\nLine Number: '+linenumber);
// }

// ⢻⡟⢸⠶⡇⣹⣏⢘⣫⡅⠀⢈⣿⡁⣛⣭⠀⠀⢧⡼⢸⣛⡁⡿⢟⠘⣤⠃⠀⣿⣉⢸⣉⡇⣏⣹⢸⣇⡀⠀⢸⠭⡇⡗⢼⢸⣏⠆⠀⢸⡯⠅⣧⣼⢸⠢⡇⠀⠘⣿⠃⣏⣹⠀⠀⣿⡱⢸⣉⡇⢘⡃
// ⠰⡁⣏⣹⢸⠢⡇⣿⣀⠘⣤⠃⠀⢸⠭⠅⣏⣹⢸⠿⡃⠀⢸⠟⡇⣟⣋⠀⡡⢌⢈⠆
// ⡯⢽⢸⣝⡆⣿⣉⢸⣏⠆

// that was the first ever thiing written with this project!

// this project has been in work for over 3 days now, still very fun to work on!