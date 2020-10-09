// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function (words) {
    let uniqueCodes = new Set()
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alphabet = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25
    }
    
    let word = 0
    while (word < words.length) {
        let letters = Array.from(words[word])
        let wordInMorse = ""
        
        letters.forEach(letter => {
            wordInMorse+=morse[alphabet[letter]]
        })
        
        uniqueCodes.add(wordInMorse)
        word++
    }
    
    let uniqueCodesArray = Array.from(uniqueCodes)
    
    return uniqueCodesArray.length
};