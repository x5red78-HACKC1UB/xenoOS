const imgtime=(ms)=> new Promise((resolve) => setTimeout(resolve,ms));

const day=document.getElementById("day"); //time id's
const time=document.getElementById("time");

const bg=document.getElementById("background");
const welcome=document.getElementById("welcomewindow"); // bg

const notes=document.getElementById("noteswindow");
const notesicon=document.getElementById("noteicon");
const xbutton=document.getElementById("closebutton"); //notes id
const xnotes=document.getElementById("closenotes");
const noteinput=document.getElementById("notestxt");
const savebtn=document.getElementById("savebtn");
const storednotes=localStorage.getItem("savednotes");

const staticon=document.getElementById("staticon");
const statwindow= document.getElementById("statwindow"); //stats id's
const closestats=document.getElementById("closestats");

const settingicon=document.getElementById("settingicon");
const settingwindow=document.getElementById("settingwindow");
const settingbutton1=document.getElementById("setting1");
const closesettings=document.getElementById("closesettings");

const fpscalc=document.getElementById("fps");
let howmanyseconds=60;

let fpstime = performance.now();
let frames = 0; //fps variable
let theme = 0;
let selectedapp=undefined;

savebtn.addEventListener("click",()=>{
const notetext =noteinput.value.trim()
if (notetext==='') {
  window.alert("Cleared!")
}
localStorage.setItem("savednotes" , notetext)
if (!(notetext==='')) {

  window.alert(`Saved!`); 
}
});

let bgimg = [
  "url('images/gojo.jpg') center/cover no-repeat",
  "url('images/choso.jpg') center/cover no-repeat",
  "url('images/$KASHIMO$.webp') center/cover no-repeat", //background img url
  "url('images/120.jpeg') center/cover no-repeat",
  "url('images/hakari.png') center/cover no-repeat",
  "url('images/hakari2.png') center/cover no-repeat",
  "url('images/higuruma.png') center/cover no-repeat",
  "url('images/JUDAS.png') center/cover no-repeat",
  "url('images/mahito.png') center/cover no-repeat",
  "url('images/megumi.png') center/cover no-repeat",
  "url('images/meguna.png') center/cover no-repeat",
  "url('images/nanamin.png') center/cover no-repeat",
  "url('images/naoya.png') center/cover no-repeat",
  "url('images/ryu.png') center/cover no-repeat",
  "url('images/sendai.png') center/cover no-repeat",
  "url('images/TAKABA.png') center/cover no-repeat",
  "url('images/todo.png') center/cover no-repeat",
  "url('images/toji.png') center/cover no-repeat",
  "url('images/yuki.png') center/cover no-repeat",
];
let bgnames=[ //Names of img in the code
"gojo", "choso", "kashimo", "120", "hakari", "hakari2", "higuruma", "JUDAS", "mahito","megumi", "meguna", "nanamin", "naoya", "ryu", "sendai", "takaba", "todo", "toji", "yuki"
];

function closewindow(element) {
  element.style.display ="none"
}
function openwindow(element) {
  element.style.display ="flex"
};
function SelectApp(app) {
  app.classList.add("selected");
  app.style.backgroundColor="rgba(109, 160, 174, 0.28)"; // APP FUNCTIONS
  selectedapp=app;
}
function DeselectApp(app) {
  app.classList.remove("selected");
  selectedapp=undefined;
}
function isappselected(app) {
  if (app.classList.contains("selected")) {
    DeselectApp(app);

  } else {
    SelectApp(app);
  }
}

xbutton.addEventListener("click",()=>{
closewindow(welcome);
});
xnotes.addEventListener("click",()=>{
closewindow(notes);
notetext ='';
});
closestats.addEventListener("click",()=>{
closewindow(statwindow);
});
closesettings.addEventListener("click",()=>{
closewindow(settingwindow);
});
notesicon.addEventListener("click",()=>{
  isappselected(notesicon)
openwindow(notes);
});
staticon.addEventListener("click",()=>{
isappselected(staticon);
openwindow(statwindow);
});
settingicon.addEventListener("click",()=>{
isappselected(settingicon);
openwindow(settingwindow);
});

settingbutton1.addEventListener("click",()=>{
let answer=window.prompt("How often do you want the background to switch?(in seconds, and applies after a switch)");

if (!Number.isFinite(answer) ==="NaN" || "null") {
  window.alert("put a NUMBER genius...")
}
howmanyseconds=Number(answer);
});

 bg.style.background=bgimg[theme];
 day.style.marginLeft="150px"
    time.style.marginLeft="130px";
day.style.color="rgb(49, 49, 82)"
time.style.color="rgb(49, 49, 82)"
function themeswitch(name) {
  switch (name) {
    case "gojo":
      theme=0;
      bg.style.background=bgimg[theme];
 day.style.marginLeft="150px"
    time.style.marginLeft="130px";
day.style.color="rgb(49, 49, 82)"
time.style.color="rgb(49, 49, 82)"
      break;
  
    case "choso":
      theme =1;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="1080px";
    document.getElementById("time").style.marginLeft="1070px";
    day.style.color= "rgb(35, 5, 5)"
time.style.color="rgb(35, 5, 5)"
    break;
     case "kashimo":
      theme =2;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(42, 66, 80)"
time.style.color="rgb(42, 66, 80)"
    break;
     case "120":
      theme =3;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(232, 132, 73)"
time.style.color="rgb(232, 132, 73)"
    break;
     case "hakari":
      theme =4;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="150px";
    document.getElementById("time").style.marginLeft="130px";
    day.style.color= "rgb(231, 166, 104)"
time.style.color="rgb(231, 166, 104)"
    break;
     case "hakari2":
      theme =5;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="150px";
    document.getElementById("time").style.marginLeft="130px";
    day.style.color= "rgb(176, 238, 176)"
time.style.color="rgb(176, 238, 176)"
    break;
     case "higuruma":
      theme =6;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(252, 250, 250)"
time.style.color="rgb(247, 247, 247)"
    break;
     case "JUDAS":
      theme =7;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(23, 5, 35)"
time.style.color="rgb(23, 5, 35)"
    break;
    case "mahito":
      theme =8;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(240, 165, 255)"
time.style.color="rgb(240, 165, 2555)"
    break;
  
    case "megumi":
      theme =9;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="150px";
    document.getElementById("time").style.marginLeft="130px";
    day.style.color= "rgb(6, 5, 35)"
time.style.color="rgb(6, 5, 35)"
    break;
    case "meguna":
      theme =10;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(76, 6, 10)"
time.style.color="rgb(76, 6, 10)"
    break;
    case "nanamin":
      theme =11;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="1080px";
    document.getElementById("time").style.marginLeft="1070px";
    day.style.color= "rgb(20, 77, 93)"
time.style.color="rgb(20, 77, 93)"
    break;
    case "naoya":
      theme =12;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(255, 255, 255)"
time.style.color="rgb(251, 251, 251)"
    break;
    case "ryu":
      theme =13;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(153, 228, 252)"
time.style.color="rgb(154, 228, 252)"
    break;
    case "sendai":
      theme =14;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(76, 143, 112)"
time.style.color="rgb(76, 143, 212)"
    break;
    case "takaba":
      theme =15;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(255, 230, 0)"
time.style.color="rgb(255, 230, 0)"
    break;
    case "todo":
      theme =16;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(253, 253, 253)"
time.style.color="rgb(247, 247, 247)"
    break;
    case "toji":
      theme =17;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="150px";
    document.getElementById("time").style.marginLeft="130px";
    day.style.color= "rgb(0, 0, 0)"
time.style.color="rgb(0, 0, 0)"
    break;
    case "yuki":
      theme =18;
  bg.style.background=bgimg[theme];
  document.getElementById("day").style.marginLeft="570px";
    document.getElementById("time").style.marginLeft="565px";
    day.style.color= "rgb(249, 7, 205)"
time.style.color="rgb(249, 7, 205)"
    break;
  }
}
async function fadein() {
   bg.style.opacity=1;
    await imgtime(30);
   bg.style.opacity=0.95;
    await imgtime(30);
  bg.style.opacity=0.9;
    await imgtime(30);
    bg.style.opacity=0.85;
    await imgtime(30);
  bg.style.opacity=0.8;
    await imgtime(30);
    bg.style.opacity=0.75;
    await imgtime(30);
    bg.style.opacity=0.7;
    await imgtime(30);
    bg.style.opacity=0.65;
    await imgtime(30);
      bg.style.opacity=0.6;
    await imgtime(30);
    bg.style.opacity=0.55;
    await imgtime(30);
    bg.style.opacity=0.5;
    await imgtime(30);
   bg.style.opacity=0.45;
    await imgtime(30);
     bg.style.opacity=0.4;
    await imgtime(30);
    bg.style.opacity=0.35;
    await imgtime(30);
    bg.style.opacity=0.3;
    await imgtime(30);
    bg.style.opacity=0.25;
    await imgtime(30);
      bg.style.opacity=0.2;
    await imgtime(30);
    bg.style.opacity=0.15;
    await imgtime(30);
    bg.style.opacity=0.1;
    await imgtime(30);
    bg.style.opacity=0.05;
    await imgtime(30);
    bg.style.opacity=0;
     await imgtime(30);
    bg.style.opacity=0.05;
    await imgtime(30);
    bg.style.opacity=0.1;
    await imgtime(30);
    bg.style.opacity=0.15;
    await imgtime(30);
  bg.style.opacity=0.2;
    await imgtime(30);
    bg.style.opacity=0.25;
    await imgtime(30);
    bg.style.opacity=0.3;
    await imgtime(30);
   bg.style.opacity=0.35;
    await imgtime(30);
    bg.style.opacity=0.4;
    await imgtime(30);
    bg.style.opacity=0.45;
    await imgtime(30);
    bg.style.opacity=0.5;
    await imgtime(30);
    bg.style.opacity=0.55;
    await imgtime(30);
      bg.style.opacity=0.6;
    await imgtime(30);
    bg.style.opacity=0.65;
    await imgtime(30);
    bg.style.opacity=0.7;
    await imgtime(30);
    bg.style.opacity=0.75;
    await imgtime(30);
      bg.style.opacity=0.8;
    await imgtime(30);
    bg.style.opacity=0.85;
    await imgtime(30);
    bg.style.opacity=0.9;
    await imgtime(30);
    bg.style.opacity=0.95;
    await imgtime(30);
    bg.style.opacity=1;
}

async function imgshift(){
   bg.style.background = "url('images/gojo.jpg') center/cover no-repeat";
   while(true){
    await imgtime(howmanyseconds*1000);
  fadein();
  await imgtime(600);
  theme = (theme + 1) % bgimg.length;
     themeswitch(bgnames[theme]);
}
    }
imgshift();
DragElement(welcome); // Allow the welcome const to be draggable
DragElement(notes);
function DragElement(element){ //dragging fuction
var initialX =0; // x value of where the window orginally was
var initialY=0; //y value of orginal position
var currentX=0;// x value of current position
var currentY=0;//y value of current position

if (document.getElementById(element.id+"header")) { // if theres a header element allow it to drag
  // also no header makes the whole window draggable
  document.getElementById(element.id+"header").onmousedown=StartDragging;
} else{
element.onmousedown = StartDragging; // when you hold down on the mouse start dragging
}

function StartDragging(e) {
   if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') {
    return; // Don't prevent typing
  }
  e.preventDefault();

  initialX=e.clientX;
  initialY =e.clientY;

  document.onmouseup =StopDragging;// when mouse is released stop dragging
  document.onmousemove = DragElement;// allow the window to move with the mouse
}
function DragElement(e) {
  e.preventDefault();
 currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

        element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
}
function StopDragging() {
  document.onmouseup = null;
  document.onmousemove = null;
}
}
function Updatefps(){
frames++;
const now=performance.now();
const elapsedtime=now-fpstime;
if (elapsedtime>=1000) {
  const framespersecond =Math.round((frames*1000)/elapsedtime);
  fpscalc.textContent=framespersecond;
  frames=0;
  fpstime=now;
};
requestAnimationFrame(Updatefps);
}
Updatefps();
if (storednotes) {
    noteinput.value =storednotes;
  }
