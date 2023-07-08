import { dogs } from "./data.js"

let profileHTML = ""
let matches = 0

class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.html = function () {
            profileHTML=""
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
    const notSwiped = dogs.filter(dog => !dog.hasBeenLiked);
    if(notSwiped.length > 0){
        let randomNum = Math.floor(Math.random() * notSwiped.length);
        const pickedDog = notSwiped[randomNum];
        let dog = new Dog(pickedDog);
        pickedDog.hasBeenLiked = !pickedDog.hasBeenLiked;
        dog.html();
    }else{
        let profileHTML = `
        <div class="end">
        <h1>No profiles left.<br>🥲</h1>
        <p>You have ${matches} total matches</p>
        </div>`
        document.getElementById("render").innerHTML = profileHTML;
        document.getElementById("like-btn").classList.add('disabled');
        document.getElementById("unlike-btn").classList.add('disabled');
    }
}


function liked(){
    matches += 1
    profileHTML += `
    <img src="/images/badge-like.png" class="decision">`;
    document.getElementById("render").innerHTML = profileHTML;
}

function disliked(){
    profileHTML += `
    <img src="/images/badge-nope.png" class="decision">`;
    document.getElementById("render").innerHTML = profileHTML;
}


export {renderNewDog,liked, disliked}
