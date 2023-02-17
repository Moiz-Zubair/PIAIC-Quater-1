let placesToVisit: string[] = ["Japan", "New Zealand", "Thailand", "Canada", "United States of America"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order:", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order:", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
