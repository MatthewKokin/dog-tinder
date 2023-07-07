({plugins: ['jsdom-quokka-plugin']})
import {dogs} from "./data.js"
import {Dog} from "./Dog.js"

function renderNewDog(){
    let randomNum = Math.floor(Math.random() * 3);
    let dog = new Dog(dogs[randomNum])
    dog.html()
}

renderNewDog()

document.getElementsByClassName("container-bottom")[0].addEventListener("click", function(e){
    if(e.target.id ==="like-btn"){
        console.log("like")
    }
    else if(e.target.id ==="unlike-btn"){
        console.log("unlike")
    }
})
