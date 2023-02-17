let guests: string[] = ["Zubair Ahmad", "Shahdab khan", "Imran Khan"];

console.log("Good news! We found a bigger dinner table!");
guests.unshift("Babar Azam");
guests.splice(Math.floor(guests.length / 2), 0, "Lionel Messi");
guests.push("Zia Khan");

for (const guest of guests) {
  console.log(`Dear ${guest},\n\nI would like to invite you to a dinner party that I am hosting next week. It would be an honor to have you as my guest. Please let me know if you are available.\n\nBest regards,\nMoiz Zubair \n \n`);
}
console.log(guests);
