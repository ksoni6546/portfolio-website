function goToProjects(){

    document
    .getElementById("projects")
    .scrollIntoView({

        behavior: "smooth"
    });
}



function goToContact(){

    document
    .getElementById("contact")
    .scrollIntoView({

        behavior: "smooth"
    });
}



/* Project Details */

function showProject(type){

    let title = "";

    let desc = "";


    if(type === "erp"){

        title = "College ERP System";

        desc =
        "Contributed to the development of a Java-based College ERP System as part of a team project. Worked on the Student Dashboard module, frontend UI improvements, student record management and database connectivity using DBMS concepts.";
    }


    else if(type === "game"){

        title = "Unity Endless Runner Game";

        desc =
        "Developed a 2D endless runner game using Unity Engine and C#. Implemented player movement, obstacle mechanics, collision detection, scoring system and UI features while improving gameplay functionality through debugging and testing.";
    }


    document.getElementById("projectTitle").innerText = title;

    document.getElementById("projectDesc").innerText = desc;

    document.getElementById("projectDetails").style.display = "block";


    document
    .getElementById("projectDetails")
    .scrollIntoView({

        behavior: "smooth"
    });
}



/* Typing Effect */

let roles = [
    "Frontend Developer",
    "Java Learner",
    "CSE Student"
];

let roleIndex = 0;

let charIndex = 0;

let typingText = document.getElementById("typing-text");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);
    }

    else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    if(charIndex > 0){

        typingText.innerHTML =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);
    }

    else{

        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();



/* Scroll Progress Bar */

window.onscroll = function(){

    let scrollTop = document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrollPercent = (scrollTop / height) * 100;

    document.getElementById("progressBar").style.width =
    scrollPercent + "%";
}