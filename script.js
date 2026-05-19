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



function submitForm(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;



    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields");
    }

    else{

        alert("Message Sent Successfully");

        document.getElementById("name").value = "";

        document.getElementById("email").value = "";

        document.getElementById("message").value = "";
    }
}



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
}



/* Typing Effect */

let text = "Frontend Developer";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }
}

typeEffect();