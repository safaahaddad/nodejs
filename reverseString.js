const  reverseString=(str)=> {
    const splitString = str.split("");// it will return array of char
    const reverseArray = splitString.reverse();// it will resvers array 
    const joinArray = reverseArray.join(""); // join the array to one string 
    return joinArray;
}
 
console.log(reverseString("Safaa Haddad"));