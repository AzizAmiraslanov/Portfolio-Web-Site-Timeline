// Main Part Code Area Start in The Here
// When time the click Menu open the Content Part Code Area start in the here

function onloadpage() {
  let aboutcontent = document.getElementById("about-content");
  let disp = document.getElementsByClassName("display");
  for (let i = 0; i < disp.length; i++) {
    disp[i].style.display = "none";
  }
  aboutcontent.style.display = "block";
}

function aboutclick() {
  let aboutcontent = document.getElementById("about-content");
  let disp = document.getElementsByClassName("display");
  for (let i = 0; i < disp.length; i++) {
    if (disp[i].style.display === "block") {
      disp[i].style.display = "none";
      aboutcontent.style.display = "block";
    }
  }
}

function resumeclick() {
  let resumecontent = document.getElementById("resume-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    resumecontent.style.display = "block";

  }
}

function worksclick() {
  let workscontent = document.getElementById("works-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    workscontent.style.display = "block";
  }
}

function blogclick() {
  let blogcontent = document.getElementById("blog-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    blogcontent.style.display = "block";
  }
}

function contactclick() {
  let contactcontent = document.getElementById("contact-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    contactcontent.style.display = "block";
  }
}

function followclick() {
  let followcontent = document.getElementById("follow-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    followcontent.style.display = "block";

  }
}

function projectsclick() {
  let projectscontent = document.getElementById("projects-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    projectscontent.style.display = "block";
  }
}

function lifeclick() {
  let lifecontent = document.getElementById("life-content");
  let disp = document.getElementsByClassName("display");
  for (let x = 0; x < disp.length; x++) {
    if (disp[x].style.display === "block") {
      disp[x].style.display = "none";
    }
    lifecontent.style.display = "block";
  }
}

// When time the click Menu open the Content Part Code Area End of the here

// Main Part Code Area End of The Here

// -----------------------------------------------------------------------------

// Personal Work Code Area Start In the Here
// function([string1, string2],target: id,[color1,color2]);    
consoleText(['Web Developer', 'Web Designer','UI Designer','UX Designer'], 'text', ['#ff9800','#ff9800', '#ff9800', '#ff9800']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#ff9800'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 300)
};

// Personal Work Code Area End of the Here

// ----------------------------------------------------------------------------
// Works Left Item - 1 Code Area Start in the Here
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let close = document.getElementById("close");
hide.style.display="none";
close.style.display="none";

show.addEventListener("click",function(){
  hide.style.display="block";
  close.style.display="block";
  close.style.cursor = "pointer"; 

})

close.addEventListener("click",function(){
  close.style.display="none";
  hide.style.display="none";
})
// Works Left Item - 1 Code Area End of the Here
//  --------------------------------------------------------------------------------------------------------------------
// Works Left Item - 2 Code Area Start in the Here
let show2 = document.getElementById("show2");
let hide2 = document.getElementById("hide2");
let close2 = document.getElementById("close2");
hide2.style.display="none";
close2.style.display="none";

show2.addEventListener("click",function(){
  hide2.style.display="block";
  close2.style.display="block";
  close2.style.cursor = "pointer"; 
})

close2.addEventListener("click",function(){
  close2.style.display="none";
  hide2.style.display="none";
})

// Works Left Item - 2 Code Area End of the Here      
//  --------------------------------------------------------------------------------------------------------------------
// Works Left Item - 3 Code Area Start in the Here
let show3 = document.getElementById("show3");
let hide3 = document.getElementById("hide3");
let close3 = document.getElementById("close3");
hide3.style.display="none";
close3.style.display="none";

show3.addEventListener("click",function(){
  hide3.style.display="block";
  close3.style.display="block";
  close3.style.cursor = "pointer"; 
})

close3.addEventListener("click",function(){
  close3.style.display="none";
  hide3.style.display="none";
})

// Works Left Item - 3 Code Area End of the Here      
//  --------------------------------------------------------------------------------------------------------------------
// Works Left Item - 4 Code Area Start in the Here
let show4 = document.getElementById("show4");
let hide4 = document.getElementById("hide4");
let close4 = document.getElementById("close4");
hide4.style.display="none";
close4.style.display="none";

show4.addEventListener("click",function(){
  hide4.style.display="block";
  close4.style.display="block";
  close4.style.cursor = "pointer"; 
})

close4.addEventListener("click",function(){
  close4.style.display="none";
  hide4.style.display="none";
})

// Works Left Item - 3 Code Area End of the Here      
//  --------------------------------------------------------------------------------------------------------------------

// Works right Item - 1 Code Area Start in the Here 
let showRight1 = document.getElementById("show-right-1");
let hideRight1 = document.getElementById("hide-right-1");
let closeRight1 = document.getElementById("close-right-1");
hideRight1.style.display="none";
closeRight1.style.display="none";

showRight1.addEventListener("click",function(){
  hideRight1.style.display="block";
  closeRight1.style.display="block";
  closeRight1.style.cursor = "pointer"; 
})

closeRight1.addEventListener("click",function(){
  closeRight1.style.display="none";
  hideRight1.style.display="none";
})

//  Works right Item - 1 Code Area End of the Here 
// --------------------------------------------------------------------------------------------------------------------

// Works right Item - 2 Code Area Start in the Here 
let showRight2 = document.getElementById("show-right-2");
let hideRight2 = document.getElementById("hide-right-2");
let closeRight2 = document.getElementById("close-right-2");
hideRight2.style.display="none";
closeRight2.style.display="none";

showRight2.addEventListener("click",function(){
  hideRight2.style.display="block";
  closeRight2.style.display="block";
  closeRight2.style.cursor = "pointer"; 
})

closeRight2.addEventListener("click",function(){
  closeRight2.style.display="none";
  hideRight2.style.display="none";
})

//  Works right Item - 2 Code Area End of the Here 
// --------------------------------------------------------------------------------------------------------------------

// Works right Item - 3 Code Area Start in the Here 
let showRight3 = document.getElementById("show-right-3");
let hideRight3 = document.getElementById("hide-right-3");
let closeRight3 = document.getElementById("close-right-3");
hideRight3.style.display="none";
closeRight3.style.display="none";

showRight3.addEventListener("click",function(){
  hideRight3.style.display="block";
  closeRight3.style.display="block";
  closeRight3.style.cursor = "pointer"; 
})

closeRight3.addEventListener("click",function(){
  closeRight3.style.display="none";
  hideRight3.style.display="none";
})

//  Works right Item - 3 Code Area End of the Here 
// --------------------------------------------------------------------------------------------------------------------

