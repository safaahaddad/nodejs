const isPalindrome = (word) => {
  const newWord = word.replace(/[^A-Z0-9]/ig, "").toLowerCase()
  arr = Array.from(newWord);
  let forward = arr.slice(0, arr.length).join("");
  let backward = arr.reverse().join("");

  if (forward === backward) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(isPalindrome('Race car')); // Output: true
console.log(isPalindrome('Hello, world!')); // Output: false