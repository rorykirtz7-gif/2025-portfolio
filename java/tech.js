//event liseners 
document.getElementById("CS_img").addEventListener("mouseover",CS);
document.getElementById("CS_img").addEventListener("mouseout",off_CS);

document.getElementById("BC_img").addEventListener("mouseover",BC);
document.getElementById("BC_img").addEventListener("mouseout",off_BC);

document.getElementById("AI_img").addEventListener("mouseover",AI);
document.getElementById("AI_img").addEventListener("mouseout",off_AI);

document.getElementById("KA_img").addEventListener("mouseover",KA);
document.getElementById("KA_img").addEventListener("mouseout",off_KA);

// functions
function CS(){
    document.getElementById("CS").style.display = "inline";
}
function off_CS(){
    document.getElementById("CS").style.display = "none";
}

function BC(){
    document.getElementById("BC").style.display = "inline";
}
function off_BC(){
    document.getElementById("BC").style.display = "none";
}

function AI(){
    document.getElementById("AI").style.display = "inline";
}
function off_AI(){
    document.getElementById("AI").style.display = "none";
}

function KA(){
    document.getElementById("KA").style.display = "inline";
}
function off_KA(){
    document.getElementById("KA").style.display = "none";
}