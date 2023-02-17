let guest_list: string[] = [ "Babar Azam", "Zubair Ahmad", "Lionel Messi" , "Shahdab khan", "Imran Khan", "Zia Khan"];

console.log("Attention: Due to unforeseen circumstances, we can only invite two guest_list to dinner.");

// Remove guest_list from the list one at a time until only two names remain
while (guest_list.length > 2) {
  const removedGuest = guest_list.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner after all. \n`);
}

// Print an invitation to each of the remaining two guest_list
for (const guest of guest_list) {
  console.log(`Dear ${guest},\n\nI would like to invite you to a dinner party that I am hosting next week. It would be an honor to have you as my guest. Please let me know if you are available.\n\nBest regards,\nMoiz Zubair \n \n`);
}

// Remove the last two names from the list and print the empty list
guest_list = guest_list.slice(0, 0);
console.log("Guest list is now empty:", guest_list);
