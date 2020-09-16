import { description, examples, solution } from './objects/Chronograph3.js'

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")

    main.innerHTML = `
    <p>${description}</p>
    <p>${JSON.stringify(examples)}</p>
    <p>${JSON.stringify(solution(examples))}</p>
    `
})

// Run on local server `python3 -m http.server 8001`