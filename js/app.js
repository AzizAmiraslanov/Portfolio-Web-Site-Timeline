// Main Part Code Area Start in The Here
// When time the click Menu open the Content Part Code Area start in the here

function onloadpage() {
  let aboutcontent = document.getElementById("resume-content");
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
consoleText(['Web Developer.', 'Web Blogger', 'Web Designer'], 'text', ['#ff9800', '#ff9800', '#ff9800']);

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
