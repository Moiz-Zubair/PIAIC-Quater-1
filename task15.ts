let guests: string[] = ["Zubair Ahmad", "Shahdab khan", "Imran Khan"];

// Print the name of the guest who can't make it
const guestUnableToAttend = guests[1]; // Assuming Malala is unable to attend
console.log(`Unfortunately, ${guestUnableToAttend} is unable to attend the dinner.`);

// Replace the name of the guest who can't make it with a new guest
guests[1] = "Babar Azam";

// Print a second set of invitation messages
for (const guest of guests) {
  console.log(`Dear ${guest},\n\nI would like to invite you to a dinner party that I am hosting next week. It would be an honor to have you as my guest. Please let me know if you are available.\n\nBest regards,\nMoiz Zubair \n \n`);
}
