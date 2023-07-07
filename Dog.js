// Create the Dog class here
({plugins: ['jsdom-quokka-plugin']})
import { dogs } from "./data.js"

console.log()

export class Dog {
    constructor(data) {
        Object.assign(this, data)
        this.html = function () {
            const profileHTML = `
                <img src="${this.avatar}" class="profile-pic" width="100%">
                <div class="info">
                    <h2 class="headline" id="headline">${this.name}, ${this.age}</h2>
                    <p class="description">${this.bio}</p>
                </div>`
            document.getElementById("render").innerHTML= profileHTML
        }
    }
}

