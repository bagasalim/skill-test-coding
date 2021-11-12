function checkPalindrome(inputString) {
  let strArray = inputString.toLowerCase().split("");
  let newArr = strArray.join("");
  let reverseArr = [...newArr].reverse().join("");

  if (newArr === reverseArr) {
    console.log("--> palindrome");
  } else {
    console.log("--> not palindrome");
  }
}

let a = "Radar";
let b = "Malam";
let c = "Kasur ini rusak";
let d = "Ibu Ratna antar ubi ";
let e = "Malas";
let f = "Makan nasi goreng";
let g = "Balonku ada lima ";

console.log(checkPalindrome(a));
console.log(checkPalindrome(b));
console.log(checkPalindrome(c));
console.log(checkPalindrome(d));
console.log(checkPalindrome(e));
console.log(checkPalindrome(f));
console.log(checkPalindrome(g));
