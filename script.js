function firstWord(s) {
  // your code here
	if(s.length<=0){
		return '';
	}
	let str = s.trim();
let word = "";

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == " ") {
    return str.substring(0, i)
  }
}

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


