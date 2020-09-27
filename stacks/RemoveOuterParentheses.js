/*

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".


Input: "(()())(())(()(()))"
[]
once the stack becomes empty
   add parenthesis to string
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

"(()())(())"
[(]

*/



var removeOuterParentheses = function(str) {
    const stack = []//[]
    let returnString = ""//()()
    
    for (let i=0; i<str.length; i++) {//"(()())(())"
        if (str[i] === '(') {
            if (!stack.length === 0) {
                returnString = returnString + '('
            }
            
            stack.push('(')
        }
        
        if (str[i] === ')') {
            stack.pop()
            
            if (!stack.length === 0) {
                returnString = returnString + ')'
            }
        }
    }
    
    return returnString
}

// step one
//     define an empty stack
//     loop through the string
    
// step two 

//     if "open" 

//         if (stack is not empty)
//             add to returnString
            
//         push to stack
        
//     else 
//         pop off the last element in stack
//         if (stack is not emtpy after pop)
//             add to returnString
// step three 

//     return the returnString