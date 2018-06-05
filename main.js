
// Chapter 13 Creating Components in Javascript


const messagesArticle = document.querySelector("#messages")
console.log("step 1", messages)

const sectionsFragment = document.createDocumentFragment()



// Create five (5) section elements, each with a class of message, and with textContent of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const greeting1 = document.createElement("section")
greeting1.textContent = "Hello"
console.log("1st greeting", greeting1)
sectionsFragment.appendChild(greeting1)

const greeting2 = document.createElement("section")
greeting2.textContent = "Hey There"
console.log("2nd greeting", greeting2)
sectionsFragment.appendChild(greeting2)

const greeting3 = document.createElement("section")
greeting3.textContent = "How's it going"
console.log("3rd greeting", greeting3)
sectionsFragment.appendChild(greeting3)

const greeting4 = document.createElement("section")
greeting4.textContent = "What's up"
console.log("4th greeting", greeting4)
sectionsFragment.appendChild(greeting4)

const greeting5 = document.createElement("section")
greeting5.textContent = "Hi"
console.log("5th greeting", greeting5)
sectionsFragment.appendChild(greeting5)

messagesArticle.appendChild(sectionsFragment)


// you could write a function for this

const createSectionEl = (sectionText) => {
    const sectionEl = document.createElement("section")
    sectionEl.className = "message"
    sectionEl.textCntent = sectionText
    return sectionEl
}
// do this for all 5 sections-this is the first section
const sectionOne = createSectionEl("Hello")
sectionsFragment.appendChild(sectionOne)

const sectionTwo = createSectionEl("Hey There")
sectionsFragment.appendChild(sectionTwo)

const sectionThree = createSectionEl("How's it going")
sectionsFragment.appendChild(sectionThree)

const sectionFour = createSectionEl("What's up")
sectionsFragment.appendChild(sectionFour)

const sectionFive = createSectionEl("Hi")
sectionsFragment.appendChild(sectionFive)




// after all 5 sections are done, you could put those in a loop

// const sectionTexts = [all the words go here in quotes]

for (let i = 0; i < sectionTexts.length; i++) {
    const sectionElement = createSectionEl(sectionTexts[i])
    sectionsFragment.appendChild(sectionFragment)
}

messagesArticle.appendChild(sectionsFragment)







