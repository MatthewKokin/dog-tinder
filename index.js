({plugins: ['jsdom-quokka-plugin']})
import {dogs} from "./data.js"
import {Dog, renderNewDog, liked, disliked} from "./Dog.js"


renderNewDog()

document.getElementById("like-btn").addEventListener("click", function(e){
    console.log("like");
    liked()

});

document.getElementById("unlike-btn").addEventListener("click", function(e){
    console.log("unlike");
    disliked()
});
