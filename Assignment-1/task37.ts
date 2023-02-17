function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} shirt with the message: "${message}"`);
  }
  
  make_shirt(); // Making a large shirt with the message: "I love TypeScript"
  make_shirt("medium"); // Making a medium shirt with the message: "I love TypeScript"
  make_shirt("small", "TypeScript is awesome!"); // Making a small shirt with the message: "TypeScript is awesome!"
  