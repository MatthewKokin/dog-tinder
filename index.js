({plugins: ['jsdom-quokka-plugin']})
import {dogs} from "./data.js"
import {Dog} from "./Dog.js"

let test = new Dog(dogs[0])

test.html()

