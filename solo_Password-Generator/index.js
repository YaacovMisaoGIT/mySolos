/*const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];*/
 
const passwordA = document.getElementById("pwd1")
const passwordB = document.getElementById("pwd21")

function genPassword(){
    const characters = "01234567890qwertyuiopmQ ASDFGHJKLZXCVBNM!@#$%^&*()<>+-?/";
    let passwordLength = 12;
    let password = "";
    let password2 = "";

    for (let i =0; i<= passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*characters.length );
        password += characters.substring(randomNumber, randomNumber +1);

    }
    for (let i =0; i<= passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*characters.length );
        password2 += characters.substring(randomNumber, randomNumber +1);

    }

    passwordA.innerHTML = password
    passwordB.innerHTML = password2


    document.getElementById("pwd").value =  password
    document.getElementById("pwd2").value =  password2

    

}



