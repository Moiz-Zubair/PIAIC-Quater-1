function make_great(names: string[]): string[] {
    let great_names: string[] = [];
    for (let name of names) {
      great_names.push(`Great ${name}`);
    }
    return great_names;
  }
  
  function show_magicians(names: string[]): void {
    for (let name of names) {
      console.log(name);
    }
  }
  
  let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  let great_magicians: string[] = make_great([...magicians]);
  
  console.log("Original magicians:");
  show_magicians(magicians);
  
  console.log("Great magicians:");
  show_magicians(great_magicians);
  