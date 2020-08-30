// Solution 1: 
//     Create a variable to hold the total.
//     Parse the string.
//     For each character of the string, add the corresponding value to total...
//         EXCEPT:
//         For I followed by V or X
//         For X followed by L or C
//         For C followed by D or M
//         Add the corresponding value to total and skip the next character.

const description = "Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999."

const examples = ["III", "IV", "LVIII", "MCMXCIV"]

function solution(s) {
    
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    
    for (let i = 0; i < s.length; i++) {
        
        if (s[i] === "V" && s[i-1] === "I" || s[i] === "X" && s[i-1] === "I") {
            total = total + values[s[i]] - (2 * values[s[i-1]]) 
            continue
        }
        
        if (s[i] === "L" && s[i-1] === "X" || s[i] === "C" && s[i-1] === "X") {
            total = total + values[s[i]] - (2 * values[s[i-1]])
            continue
        }
        
        if (s[i] === "D" && s[i-1] === "C" || s[i] === "M" && s[i-1] === "C") {
            total = total + values[s[i]] - (2 * values[s[i-1]]) 
            continue
        }
        
        else {
            total = total + values[s[i]]
        }
    }
    
    return total
}

// Notes:
    // Odd behavior: "MCMXCIV" function was allowing BOTH if and else statements to run.
        // For second C and V but not second M.

export { description, examples, solution }