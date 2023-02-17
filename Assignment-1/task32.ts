const current_users: string[] = ['john', 'jane', 'jerry', 'jimmy', 'jack'];
const new_users: string[] = ['johnny', 'jake', 'JANE', 'jim', 'jill'];

for (let new_user of new_users) {
  let is_unique = true;
  
  for (let current_user of current_users) {
    if (new_user.toLowerCase() === current_user.toLowerCase()) {
      is_unique = false;
      break;
    }
  }
  
  if (is_unique) {
    console.log(`The username "${new_user}" is available.`);
  } else {
    console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
  }
}
