var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const imgURL = ["Images/yugardencomic_imagenew.png","Images/dapuqiaocomic_imagenew.png","Images/thebundcomic_imagenew.png"];

const cptURL = ["Images/comictext1.png","Images/comictext2.png","Images/comictext3.png","Images/comictext4.png","Images/comictext5.png"]

var alt;
var person;
let idx = 0;
let cptidx = 0;
let preScroll = 0;
let container = document.getElementById("phoneScreen");
let captions = document.getElementById("captions")
let bgP = document.createElement("IMG");
bgP.id = "bgView";
bgP.src = imgURL[idx];

let startButton = document.createElement("BUTTON")
startButton.id = "startB";
let t = document.createTextNode("click here to start your journey!");
startButton.appendChild(t)
document.getElementById("phoneScreen").appendChild(startButton);

startButton.addEventListener("click", initialize);

function initialize() {
  var txt;
  person = prompt("Welcome to our comic, 'Views of Shanghai'! Please enter your name:", "Your Name");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! Scroll through the phone screen to see more content!";
    alert(txt);
    startCmc();
  }
}

function startCmc() {
  // let btn = document.getElementById("btn");
  let phoneScreen = document.getElementById('phoneScreen');
  let phoneFrame = document.getElementById("phoneFrame")
  phoneScreen.style.backgroundColor = "#F9FFE8";
  phoneScreen.removeChild(startButton);

  phoneScreen.style.overflowY = "scroll";

  let bgView1 = document.getElementById("bgView1");
  bgView1.parentNode.removeChild(bgView1)

  phoneFrame.appendChild(bgP);

  let phoneContent = document.createElement("IMG");
  phoneContent.id = "phoneContent";
  phoneContent.src = "Images/phonescreenimages.png";
  phoneContent.alt = "Social Media Contents";

  phoneScreen.appendChild(phoneContent);
}


function scrolling() {
  var phoneScroll = container.scrollTop;
  console.log(phoneScroll);
  if (phoneScroll >= 760){
    bgP.src = "Images/askforpicture.png";
  }
  else if (phoneScroll - preScroll >= Math.floor(760/3)) {
    nextPage()
    preScroll = phoneScroll;
  } else if (preScroll - phoneScroll >= Math.floor(760/3)){
    prePage()
    preScroll = phoneScroll;
  } if (phoneScroll >= 820) {
    // setTimeout(function(){ alertmsg(); }, 15);
    alertmsg();
  }
}

function nextPage() {
  idx += 1;
  document.getElementById('bgView').src = imgURL[idx];
  console.log(idx);
}

function prePage() {
  idx -= 1;
  document.getElementById('bgView').src = imgURL[idx];
  console.log(idx);
}

function alertmsg() {
  clearTimeout(alt);
  let answer1 = confirm("Hey " + person + "! Could you take a photo of me?");
  while (!answer1) {
    let answer2 = confirm("Aww but please?? The view is so pretty!\n")
    if (answer2 == true) {
      // answer1 = true;
      break
    }
  }
  if (answer1 == true) {
  goingBack();
}
}

function goingBack() {
  bgP.src = "Images/askforpicture.png";

  let phoneF = document.getElementById("phoneF");
  let insF = document.getElementById("insF");
  let phoneScreen = document.getElementById("phoneScreen");
  phoneScreen.parentNode.removeChild(phoneScreen);
  insF.parentNode.removeChild(insF);
  phoneF.parentNode.removeChild(phoneF);

  idx = 2;
  captions.src = cptURL[cptidx];
  setTimeout(function(){ captions.style.opacity = 1;   document.getElementById('arrowR').style.opacity = 1; }, 1000);
}

function rOnClick() {
  if (cptidx < 5) {
  bgP.src = imgURL[idx];
  cptidx += 1;
  captions.src = cptURL[cptidx]
  console.log("cptidx:" + cptidx)
  }
  if (cptidx == 5) {
    document.getElementById('arrowL').style.opacity = 1;
    captions.parentNode.removeChild(captions);
    idx = 3;
    cptidx += 1;
  } if(cptidx > 5) {
    idx -= 1;
    bgP.src = imgURL[idx];
    console.log(idx);
  }
  if (idx == -1) {
    let arrowR = document.getElementById('arrowR');
    let arrowL = document.getElementById('arrowL');
    arrowR.parentNode.removeChild(arrowR)
    arrowL.parentNode.removeChild(arrowL)
    bgP.src = "Images/thankyou.png";
    bgP.style.width = 777+"px";
    bgP.style.height = 830+"px";
    bgP.style.marginLeft = -357 + "px";
    bgP.style.marginTop = -400 + "px";
  }
}

function lOnClick() {
  if (idx < 2) {
    idx += 1;
    console.log(idx);
    bgP.src = imgURL[idx];
  }
  else {
    alert("Can not go back anymore!")
  }
}
