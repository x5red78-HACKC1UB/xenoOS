const imgtime=(ms)=> new Promise((resolve) => setTimeout(resolve,ms));
const day=document.getElementById("day");
const time=document.getElementById("time");
const bg=document.getElementById("background");
const bgimg = [
  "url('images/gojo.jpg') center/cover no-repeat",
  "url('images/choso.jpg') center/cover no-repeat",
];
function themeswitch(name) {
  switch (name) {
    case "gojo":
      bg.style.background=bgimg[1];
 day.style.marginLeft="1050px";
    time.style.marginLeft="1100px";
day.style.color="rgb(49, 49, 82);"
time.style.color="rgb(49, 49, 82);"
      break;
  
    case "choso":
  bg.style.background=bgimg[0];
  document.getElementById("day").style.marginLeft="150px";
    document.getElementById("time").style.marginLeft="200px";
    day.style.color= "rgb(35, 5, 5)"
time.style.color="rgb(35, 5, 5);"
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

async function imgshift(){;
   bg.style.background = "url('images/gojo.jpg') center/cover no-repeat";
   while(true){
    await imgtime(60000);
  fadein();
  await imgtime(600);
  if (bg.style.background === "url('images/gojo.jpg') center/cover no-repeat") {
    themeswitch("gojo");
  }else{
    themeswitch("choso");
  }
}
    }
imgshift();
requestAnimationFrame(imgshift);