({plugins: ['jsdom-quokka-plugin']})
import {renderNewDog, liked, disliked} from "./Dog.js"


renderNewDog()

document.getElementById("like-btn").addEventListener("click", function(e){
    console.log("like");
    liked()
    setTimeout(renderNewDog, 1000)
});

document.getElementById("unlike-btn").addEventListener("click", function(e){
    console.log("unlike");
    disliked()
    disliked()
    setTimeout(renderNewDog, 1000)
});
