
const areBracketsBalanced = (expr) => {

    let openBracketArray = [];

    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{') {
            openBracketArray.push(x);
            continue;
        }
        if (openBracketArray.length == 0)
            return false;
        let check;
        switch (x) {
            case ')':
                check = openBracketArray.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = openBracketArray.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = openBracketArray.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    // Check Empty Stack
    return (openBracketArray.length == 0);
}

// Driver code
let expr = "{ yo: thisIsAwesome() }";

// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");