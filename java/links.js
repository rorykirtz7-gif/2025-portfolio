// event liseners 
document.getElementById("google").addEventListener("mouseover",google_classroom_hover);
document.getElementById("google").addEventListener("mouseout",google_classroom_off);

document.getElementById("Website").addEventListener("mouseover",Mr_j_website_hover);
document.getElementById("Website").addEventListener("mouseout",Mr_j_website_off);

document.getElementById("github").addEventListener("mouseover",Github_hover);
document.getElementById("github").addEventListener("mouseout",Github_off);

document.getElementById("w3schools").addEventListener("mouseover",W3Schools_hover);
document.getElementById("w3schools").addEventListener("mouseout",W3Schools_off);

document.getElementById("CodeHS").addEventListener("mouseover",CodeHS_hover);
document.getElementById("CodeHS").addEventListener("mouseout",CodeHS_off);

document.getElementById("cisco").addEventListener("mouseover",Cisco_hover);
document.getElementById("cisco").addEventListener("mouseout",Cisco_off);
//functions 

function google_classroom_hover(){
    document.getElementById("google").textContent = "🔗";
    document.getElementById("uses").textContent = "Google classroom is the website where all the students within Mr.Jamieson’s tech class access their work. We get notifications every time something new has been added to our work space which helps us get our work done and submitted very easily. We get detailed explanations on all our work and can access our repositories and other assignments. ";

}
function google_classroom_off(){
    document.getElementById("google").textContent = "Google Classroom";
    document.getElementById("uses").textContent =" ";
}

function Mr_j_website_hover(){
    document.getElementById("Website").textContent = "🔗";
    document.getElementById("uses").textContent ="Mr.Jamiseon’s Website gives us detailed explanations on our assignments. For example when we are doing coding he gives detailed steps and what he is expecting for each assignment which can make it easier to understand what is required for assignments.There is also a calendar making it easy to see when work is due so you can properly manage your time. ";
}
function Mr_j_website_off(){
    document.getElementById("Website").textContent = "Mr.J's Website";
    document.getElementById("uses").textContent =" ";
}

function Github_hover(){
    document.getElementById("github").textContent = "🔗";
    document.getElementById("uses").textContent ="Github is a site that can be used to make websites. It is an easy way to learn different coding languages and explore the art of making websites through Javascript, CSS and HTML. We get to be creative and come up with website designs and interactive pieces to slowly build our comfortability and understanding of coding. It is so fun to get to see your creations come to life and become better throughout the process. ";
}
function Github_off(){
    document.getElementById("github").textContent = "Github";
    document.getElementById("uses").textContent =" ";
}

function W3Schools_hover(){
    document.getElementById("w3schools").textContent = "🔗";
    document.getElementById("uses").textContent ="W3Schools is the best website for people who are trying to learn code. It explains code simply so anyone can understand it and has examples that you can follow along. It was one of my most used sites throughout the course of this semester. It makes learning to code simple and very fun. It takes away a lot of the difficulty and is a very reliable website.";
}
function W3Schools_off(){
    document.getElementById("w3schools").textContent = "W3Schools";
    document.getElementById("uses").textContent =" ";
}

function CodeHS_hover(){
    document.getElementById("CodeHS").textContent = "🔗";
    document.getElementById("uses").textContent =" CodeHS is a website where you can use python to make interactive images and games. This was not a website we used this year but has been very helpful throughout my time learning to code. ";
}
function CodeHS_off(){
    document.getElementById("CodeHS").textContent = "CodeHS";
    document.getElementById("uses").textContent =" ";
}

function Cisco_hover(){
    document.getElementById("cisco").textContent = "🔗";
    document.getElementById("uses").textContent ="Cisco is a very helpful site for learning anything from networking to coding languages. They are a very reliable and informative sign that you can use to get certifications for free, such as Introduction to Networking Basics or Introduction to Python 1 ";
}
function Cisco_off(){
    document.getElementById("cisco").textContent = "Cisco";
    document.getElementById("uses").textContent =" ";
}

