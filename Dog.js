// Create the Dog class here
({plugins: ['jsdom-quokka-plugin']})
import { dogs } from "./data.js"

let profileHTML = ""

class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.html = function () {
            profileHTML += `
                <img src="${this.avatar}" class="profile-pic" width="100%">
                <div class="info">
                    <h2 class="headline" id="headline">${this.name}, ${this.age}</h2>
                    <p class="description">${this.bio}</p>
                </div>`
            document.getElementById("render").innerHTML= profileHTML
        }
    }
}

function renderNewDog(){
    let randomNum = Math.floor(Math.random() * 3);
    let dog = new Dog(dogs[randomNum])
    dog.html()
}

function decision(){
    
}

function liked(){
    profileHTML += `
    <img src="/images/badge-like.png" class="decision">`;
    document.getElementById("render").innerHTML = profileHTML;
}

function disliked(){
    profileHTML += `
    <img src="/images/badge-nope.png" class="decision">`;
    document.getElementById("render").innerHTML = profileHTML;
}


export {Dog, renderNewDog,liked, disliked}
