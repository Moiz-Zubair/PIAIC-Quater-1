// This program take a name and print it in Lower Case, Upper Case and Title Case

var Name: String = "moiz Zuabir";
console.log("Lower Case : " + Name.toLowerCase());
console.log("Upper Case : " + Name.toUpperCase());
console.log("Title Case : " + Name.replace(/\b\w/g, (l) => l.toUpperCase()));

