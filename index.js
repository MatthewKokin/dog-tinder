import {renderNewDog, liked, disliked} from "./Dog.js"


renderNewDog()

document.getElementById("like-btn").addEventListener("click", function(e){
    liked()
    setTimeout(renderNewDog, 1000)
});

document.getElementById("unlike-btn").addEventListener("click", function(e){
    disliked()
    setTimeout(renderNewDog, 1000)
});
