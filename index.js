const imgtime=(ms)=> new Promise((resolve) => setTimeout(resolve,ms));

const day=document.getElementById("day"); //time id's
const time=document.getElementById("time"); 

const bg=document.getElementById("background");
const welcome=document.getElementById("welcomewindow"); // bg
const tab = document.getElementById("xenotab");
tab.style.display ="block";
const tabwindow = document.getElementById("tabwindow")
let theme = 0;
const fpscalc=document.getElementById("fps");

let fpstime = performance.now();  //fps variables
let frames = 0; //fps variable
function Updatefps(){
frames++;
var now=performance.now(); //fps calc's
var elapsedtime=now-fpstime;
if (elapsedtime>=1000) {
  var framespersecond =Math.round((frames*1000)/elapsedtime);
  fpscalc.textContent=framespersecond;
  frames=0;
  fpstime=now;
};
requestAnimationFrame(Updatefps);
}
Updatefps();

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

const abtmewindow=document.getElementById("aboutmewindow");
const abtmeicon=document.getElementById("abtmeicon");// About Me window
const closeabtme=document.getElementById("closeabtme");
const closetab=document.getElementById("closetab");




const osicon=document.getElementById("osachieve");
const oswindow=document.getElementById("oswindow");
const achievementlist=document.getElementById("achievementlist");
const closeachieve=document.getElementById("closeachieve");
let detectapp=0;
let detectnotes=0;
let detectstats=0;
let detectsetting=0;
let detectaboutme=0;
let detectseaweed=0;
let detectachievements=0;
let checkedtt=0;
let konamiUnlocked=false;

async function achievement() {
  achievementlist.innerHTML ="";
  achievementlist.innerHTML+="<h1> Easy</h1>"
  achievementlist.innerHTML+="<li> Welcome!</li>"
  if (detectnotes>=1) {
    achievementlist.innerHTML+="<li>Notetaker</li>"
  }
  if (detectstats>=1) {
    achievementlist.innerHTML+="<li> Stats!</li>"
  }
  if (detectsetting>=1) {
    achievementlist.innerHTML+="<li> Setting Snob</li>"
  }
  if (detectaboutme>=1) {
    achievementlist.innerHTML+="<li> ABOUT ME!!! </li>"
  }
  if (detectseaweed>=1) {
    achievementlist.innerHTML+=" <li> Played Seaweed clicker </li>"
  }
  if (detectachievements>=1) {
    achievementlist.innerHTML+="<li> Achiever</li>"
  }
  achievementlist.innerHTML+="<h1> Mid</h1>"
  if (seaweed>=1000) {
    achievementlist.innerHTML+="<li>Seaweed Stacker</li>"
  }
  if(Number(fpscalc.textContent)<=30){
await imgtime(500);
if (Number(fpscalc.textContent)<=30) {
  achievementlist.innerHTML+="<li> Lagginator</li>"
}
  }
  if (checkedtt>=1){
achievementlist.innerHTML+="<li> Saw my tt page >:D</li>"
  }
  if (day.innerHTML==="Friday") {
    achievementlist.innerHTML+="<li>Relaxing Weekend</li>"
  }
 if (time.innerHTML.includes("AM")) {
  achievementlist.innerHTML+="<li>Restless</li>"
 }
 if(theme>=18){
  achievementlist.innerHTML+="<li>Visuals</li>"
 }
achievementlist.innerHTML+="<h1>Legendary</h1>"
if(seaweed>=1000000){
  achievementlist.innerHTML+="<li>Seaweed lover</li>"
}
achievementlist.innerHTML+="<h1>Mythical</h1>"
achievementlist.innerHTML+="<h1>Secret(???)</h1>"
if(seaweed===777){
  achievementlist.innerHTML+="<li>Lucky Seaweed</li>"
}
if(seaweed>=10000000){
  achievementlist.innerHTML+="<li>Seaweed KING</li>"
}
if (konamiUnlocked===true) {
  achievementlist.innerHTML+="<li>Konami</li>"
}
 if (data.query==="seaweed" || "SEAWEED") {
      achievementlist.innerHTML+="<li>True Seaweed Fan</li>"
    }
}


let konami=[
"ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight","b","a"
];
let inputsofkonami=0;


document.addEventListener("keydown",(e)=>{
  if(e.key.toLowerCase() === konami[inputsofkonami].toLowerCase()){
    inputsofkonami++;
  }else{
    inputsofkonami=0;
  }
  if(inputsofkonami===konami.length){
    konamiUnlocked=true;
    inputsofkonami=0
    window.alert("Unlocked.....")
    achievement();
  } 
});

const seaweedwindow=document.getElementById("seaweedwindow");
const closeseaweed=document.getElementById("closeseaweed");
const seaweedicon=document.getElementById("seaweedicon");
const seaweedbutton=document.getElementById("seaweedbutton");
const seaweedtxt=document.getElementById("seaweedtxt");
const shop=document.getElementById("shop");
const upgrades=[
  {name:"Extra seaweed", cost:10, spc:1},
  {name:"Auto Seaweed", cost:25, sps:1},
  {name:"Sushi Stealer", cost:65, sps:3},
  {name:"Seaweed farm", cost:500, spc:5},
  {name:"Seaweed Store", cost:1700, sps:15},
  {name:"Enchanted Seaweed", cost:5000, sps:20, spc:15, swm:1.05},
]

let seaweed = 0;
let seaweedmultipler=1;
let extraseaweed=1;
let seaweedpersec=0
let cost1 = 10;
let cost2=25;
function autoseaweed() {
  setInterval(() => {
    seaweed+=seaweedpersec;
    seaweedtxt.textContent=`${seaweed} layers of seaweed`;
  }, 1000);
}
autoseaweed();

seaweedbutton.addEventListener("click",()=>{
  seaweed+=Math.round((0+extraseaweed)*seaweedmultipler);
  seaweedtxt.textContent=`${seaweed} layers of seaweed`;
  
});
upgrades.forEach((upgrade, index) => {
  const upgradecontainer = document.createElement("div");
  const button = document.createElement("button");
  const name=document.createElement("h1")
name.classList.add("name")
  name.textContent =upgrade.name;
  upgradecontainer.classList.add("shopcontainer");
  button.classList.add("upgrade")
  button.textContent = `Buy | ${upgrade.cost} seaweed`;

  button.addEventListener("click", () => {
    if (seaweed >= upgrade.cost) {
      seaweed -= upgrade.cost;

      if (upgrade.spc) {
        extraseaweed += upgrade.spc;
      }

      if (upgrade.sps) {
        seaweedpersec += upgrade.sps;
      }
      if (upgrade.swm){
        seaweedmultipler+=upgrade.swm;
      }

      upgrade.cost = Math.floor(upgrade.cost * 1.15);

      button.textContent = `Buy | ${upgrade.cost} seaweed`;
      seaweedtxt.textContent = `${seaweed} layers of seaweed`;
    }
  });
upgradecontainer.appendChild(name);
  upgradecontainer.appendChild(button);
  shop.appendChild(upgradecontainer);
});


const tiktok=document.getElementById("TT");
const email=document.getElementById("email");
let howmanyseconds=60;


let selectedapp=undefined;

savebtn.addEventListener("click",()=>{
const notetext =noteinput.value.trim()
if (notetext==='') {
  window.alert("Cleared!")
}
localStorage.setItem("savednotes" , notetext) // Notes Saving
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
//Self-explainatory
function closewindow(element) {
  element.style.display ="none" 
}
function openwindow(element, display = "flex") {
  element.style.display = display
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
// event listeners
xbutton.addEventListener("click",()=>{
closewindow(welcome);
});
xnotes.addEventListener("click",()=>{
closewindow(notes);
notetext ='';
});
closestats.addEventListener("click",()=>{ // X buttons!
closewindow(statwindow);
});
closesettings.addEventListener("click",()=>{
closewindow(settingwindow);
});
closeabtme.addEventListener("click",()=>{
closewindow(abtmewindow);
});
closeseaweed.addEventListener("click",()=>{
closewindow(seaweedwindow);
});
closeachieve.addEventListener("click",()=>{
closewindow(oswindow);
});
closetab.addEventListener("click",()=>{
closewindow(tabwindow);

});


notesicon.addEventListener("click",()=>{
  isappselected(notesicon)
openwindow(notes);
detectnotes+=1;
achievement();
});
staticon.addEventListener("click",()=>{
isappselected(staticon);
openwindow(statwindow);
detectstats+=1;
achievement();
});
settingicon.addEventListener("click",()=>{
isappselected(settingicon);
openwindow(settingwindow);    // CLICKING ICONS
detectsetting+=1;
achievement();
});
abtmeicon.addEventListener("click",()=>{
isappselected(abtmeicon);
openwindow(abtmewindow, "block");
detectaboutme+=1;
achievement();
});
seaweedicon.addEventListener("click",()=>{
isappselected(seaweedicon);
openwindow(seaweedwindow,"block");
detectseaweed+=1;
achievement();
});
osicon.addEventListener("click",()=>{
isappselected(osicon);
openwindow(oswindow,"block");
detectachievements+=1;
achievement();
});




tiktok.addEventListener("click",()=>{
window.open('https://www.tiktok.com/@chromixhere', '_blank').focus();
checkedtt+=1;
achievement();
console.log(checkedtt);
});                                                            //Contacts
email.addEventListener("click",()=>{
window.location.href ="mailto:x5red78@gmail.com"
});


settingbutton1.addEventListener("click",()=>{
let answer=window.prompt("How often do you want the background to switch?(in seconds, and applies after a switch)");
const seconds=Number(answer);

if (answer ===null||answer.trim()===""||!Number.isFinite(seconds)) {
  window.alert("put a NUMBER genius....")
} else {
  howmanyseconds =seconds;
}
});


 bg.style.background=bgimg[theme];
 day.style.marginLeft="150px"
    time.style.marginLeft="130px";
day.style.color="rgb(49, 49, 82)"
time.style.color="rgb(49, 49, 82)"
// LARGE background switching code
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
time.style.color="rgb(240, 165, 255)"
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
//fade animation(kinda broken bc of my img size)
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
  await fadein();
  theme = (theme + 1) % bgimg.length;
     themeswitch(bgnames[theme]);
}
    }
imgshift();
DragElement(welcome); // Allows windowsto be draggable
DragElement(notes);
DragElement(settingwindow);
DragElement(abtmewindow);
DragElement(seaweedwindow);
DragElement(oswindow);
DragElement(tabwindow);
//dragging area
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

if (storednotes) {
    noteinput.value =storednotes;
  }
  const searchinput=document.getElementById("searchinput");
const searchbutton=document.getElementById("searchbutton");
async function XenoSearch(){
    const search = searchinput.value.trim();
    if(!search) return;
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(search)}`
    ); // sends a request with the search txt safe to put in a url
        if (!response.ok) { //what happen if the responce isn't  sucessful
            throw new Error(`HTTP eror: ${response.status}`)
        };
  
    const data = await response.json();
    const results = document.getElementById("searchresults");
    results.textContent=`${data.message} You typed ${data.query}` //TEST message TEMPORARY
  
    results.innerHTML ="";
    data.results.forEach(result =>{
      const searchdiv = document.createElement("div");
      searchdiv.classList.add("search-result");

      const title = document.createElement("a");
      title.textContent = result.title;
      title.href =result.url;
      title.target ="xenotab";
     title.addEventListener("click",()=>{
tabwindow.style.display="block";
     });
      
      const searchdetails =document.createElement("p");
      searchdetails.textContent = result.content;

      const link = document.createElement("p");
      link.textContent = result.url;
      searchdiv.appendChild(title);
      searchdiv.appendChild(link);
      searchdiv.appendChild(searchdetails);
      
      results.appendChild(searchdiv);
      closetab.style.display="block";
      tabwindow.style.display="block";
   })
    } catch (error) {
        console.error("search failed:",error)
    }
}

 searchbutton.addEventListener("click", ()=>{
XenoSearch();
  });
