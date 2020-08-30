import { description, examples, solution } from './strings/RomanToInt1.js'

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")

    main.innerHTML = `
    <p>${description}</p>
    <p>${examples[3]}</p>
    <p>${solution(examples[3])}</p>
    `
})

// Run on local server `python3 -m http.server 8001`