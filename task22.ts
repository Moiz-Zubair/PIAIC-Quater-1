const person = {
    name: "Moiz Zubair",
    age: 22,
    occupation: "Site Reliability Engineer",
    location: "San Francisco",
    interests: ["crypto", "cricket", "watching movies"],
  };
  
    // Accidentally use index 2 instead of 1
    console.log(person.interests[3]); // Produces an error!

    // Correct index to 1 to access second interest
    console.log(person.interests[1]); // Prints "hiking"

    console.log(person);