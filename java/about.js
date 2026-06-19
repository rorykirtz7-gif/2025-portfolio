//event liseners 
document.getElementById("yes").addEventListener("mouseover", yes_hover);
document.getElementById("yes").addEventListener("mouseout", yes_off);
document.getElementById("no").addEventListener("mouseover", no_hover);
document.getElementById("no").addEventListener("mouseout", no_off);
document.getElementById("no").addEventListener("click", no_true);
document.getElementById("yes").addEventListener("click", yes_true);
document.getElementById("about_button").addEventListener("click",next_page);
//guess my name function
document.getElementById("enter").addEventListener("click", guess_name);

//guess my age function 
document.getElementById("age_one").addEventListener("click", one);
document.getElementById("age_two").addEventListener("click", two);
document.getElementById("age_three").addEventListener("click", three);
document.getElementById("age_four").addEventListener("click", four);

//functions 

function yes_hover(){
    document.getElementById("yes").textContent = "😆";
}
function yes_off(){
    document.getElementById("yes").textContent = "Yes!";
}

function no_hover(){
     document.getElementById("no").textContent = "😢";
}
function no_off(){
    document.getElementById("no").textContent = "No";
}

function no_true(){
    document.getElementById("photo").style.display = "inline";
    document.getElementById("about").style.display = "block";
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("game").style.display = "none";
}

function yes_true(){
    document.getElementById("no").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("name").style.display = "block";
    document.getElementById("age").style.display = "block";
    document.getElementById("about_button").style.display = "block";
}

let letters = 1;
let attempt;
let responce = " ";
let r = 0;
let o = 0;
let y = 0;


function guess_name(){
    attempt = document.getElementById("guess").value;
    document.getElementById("hint").textContent = "Hints";
    responce = " ";
    r = 0;
    o = 0;
    y = 0;
        if(attempt.length > 4 && attempt !== "rory"){
            document.getElementById("number").textContent = "That's too many letters..."
        }
        if(attempt.length < 4 && attempt !== "rory"){
            document.getElementById("number").textContent = "That's not enough letters..."
        }
        if(attempt.length == 4 && attempt !== "rory"){
            document.getElementById("number").textContent = "There are 4 letters in my name!!!!"
        }
        
        for( letters = 1; letters <= attempt.length; letters++){
            if(attempt[letters - 1] == "R" || attempt[letters - 1] == "r" ){
                if(attempt[0] == "R" ||attempt[0] == "r" ){
                    responce = "R is the first letter " + responce ;
                    r = r+1;
                    
                }
                if(attempt[2] == "R" ||attempt[2] == "r" ){
                    responce = responce + " R is the third letter ";
                    r = r+1;
                    
                }
                if(r == 0){
                    responce = responce + " there is an r in my name "
                    r = r+1;
                    
                }
            }
            if(attempt[letters - 1] == "o" || attempt[letters - 1] == "O" ){
                if(attempt[1] == "O" ||attempt[1] == "o" ){
                    responce =  " O is the second letter ";
                    o ++;
                }
                if(o == 0){
                    responce = responce + " there is an o in my name "
                    o ++;
                }
            }
            if(attempt[letters - 1] == "y" || attempt[letters - 1] == "Y" ){
                if(attempt[3] == "Y" ||attempt[3] == "y" ){
                    responce = responce + " y is the fourth letter ";
                    y ++;
                }
                if(y == 0){
                    responce = responce + " there is an y in my name " 
                    y ++;
                }
            }
        }
        document.getElementById("letter").textContent = responce;
        
        if(attempt == "rory"|| attempt == "Rory"){
            document.getElementById("hint").textContent = "That's my name!!!";
            document.getElementById("number").textContent = " ";
            document.getElementById("letter").textContent = " ";
        }
    }

// functions for guess age 

function one(){
    document.getElementById("age_one").style.color = "rgb(255, 0, 69)";
    document.getElementById("age_two").style.color ="rgb(0, 255, 134)";
    document.getElementById("age_three").style.color ="rgb(0,0,0)";
    document.getElementById("age_four").style.color ="rgb(0,0,0)";
} 

function two(){
    document.getElementById("age_one").style.color = "rgb(0,0,0)";
    document.getElementById("age_two").style.color ="rgb(0, 255, 134)";
    document.getElementById("age_three").style.color ="rgb(0,0,0)";
    document.getElementById("age_four").style.color ="rgb(0,0,0)";
} 

function three(){
    document.getElementById("age_one").style.color = "rgb(0,0,0)";
    document.getElementById("age_two").style.color ="rgb(0, 255, 134)";
    document.getElementById("age_three").style.color ="rgb(255,0,69)";
    document.getElementById("age_four").style.color ="rgb(0,0,0)";
} 

function four(){
    document.getElementById("age_one").style.color = "rgb(0,0,0)";
    document.getElementById("age_two").style.color ="rgb(0, 255, 134)";
    document.getElementById("age_four").style.color ="rgb(255,0,69)";
    document.getElementById("age_three").style.color ="rgb(0,0,0)";
} 


function next_page(){
    document.getElementById("about_button").style.display = "none";
    document.getElementById("age").style.display = "none";
    document.getElementById("name").style.display = "none";
    document.getElementById("photo").style.display = "inline";
    document.getElementById("about").style.display = "block";
}

