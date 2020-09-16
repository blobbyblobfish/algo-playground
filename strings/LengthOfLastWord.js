const description = "Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string. If the last word does not exist, return 0. Note: A word is defined as a maximal substring consisting of non-space characters only."

const examples = ["Hello World", "a ", ""]

function solution(s) {
    
    const wordsArray = s.split(' ').filter(w => w.length > 0)
    const result = wordsArray.length ? wordsArray[wordsArray.length - 1].length : 0
    return result
}

export { description, examples, solution }