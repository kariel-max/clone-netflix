const { loadEnvFile } = require("process");

let buttonResposta = false;
document.querySelectorAll("#Perguntas li").forEach((item)=> {
    
    item.addEventListener("click", (iten)=> {
       
        if(buttonResposta === false) {
            buttonResposta = true
                iten.currentTarget.querySelector(".resposta").style.display= 
                "block";
        } else {
            buttonResposta = false
            iten.currentTarget.querySelector(".resposta").style.display= 
                "none";
        }
       
    })
})

// --------------------- button and home page-----------------
let LoaderDiv = document.getElementById("LoaderDiv");
// if (LoaderDiv.eve)
document.querySelector(".borderRed").style.border="2px solid red"

