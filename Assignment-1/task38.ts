function describe_citi(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities
  describe_citi("New York");  // Output: New York is in USA.
  describe_citi("London", "UK");  // Output: London is in UK.
  describe_citi("Sydney", "Australia");  // Output: Sydney is in Australia.
  