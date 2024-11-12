// 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
//     "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
//     “{([)]}” => false

function isAllBracketsClosed(string) {
    const stack = [];
    
    for (let char of string) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
