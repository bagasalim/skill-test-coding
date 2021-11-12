let value = prompt("Masukkan Kata yang Ingin Dibalik");
function reversedWords(str) {
  return str
    .split(" ")
    .map(function (item) {
      return item.split("").reverse().join("");
    })
    .join(" ");
}

alert(reversedWords(value));
