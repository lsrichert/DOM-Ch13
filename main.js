

// // A new "virtual" document fragment to contain components
// const fragment = document.createDocumentFragment()

// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// console.log("fragment:", fragment);



// /*
//     Now I can update my HTML document all at once, with all
//     three emperor components rendered. Otherwise, I would
//     have needed to add each one, individually - a much more
// //     "expensive" operation.
// // */
// document.querySelector("#emperorList").appendChild(fragment)

const messages = document.querySelector("#messages")
console.log("step 1", messages)



// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const greeting1 = document.createElement("section")
greeting1.textContent = "Hello"
console.log("1st greeting", greeting1)
messages.appendChild(greeting1)


const greeting2 = document.createElement("section")
greeting2.textContent = "Hey There"
console.log("2nd greeting", greeting2)
messages.appendChild(greeting2)

const greeting3 = document.createElement("section")
greeting3.textContent = "How's it going"
console.log("3rd greeting", greeting3)
messages.appendChild(greeting3)

const greeting4 = document.createElement("section")
greeting4.textContent = "What's up"
console.log("4th greeting", greeting4)
messages.appendChild(greeting4)

const greeting5 = document.createElement("section")
greeting5.textContent = "Hi"
console.log("5th greeting", greeting5)
messages.appendChild(greeting5)








