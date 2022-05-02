const { question } = require('readline-sync');

// instantiates the dictionary using Javascript Map 
let dict = new Map();

async function run() {
  while(true) {
    console.log(
      "Please enter a command. For a list of commands enter HELP."
    );
    const input = question(">");
    const inputArray = input.split(" ");

    // HELP
    // Extra functionality that allows a user to view all command prompts.
    if (inputArray[0] == "HELP") {
      if (inputArray.length !== 1) {
        console.log(">> ERROR, HELP returns all command prompts\n>> No arguments needed.");
      } else {
        console.log("ADD\t\t KEYS\t\t MEMBERS");
        console.log("REMOVE\t\t REMOVEALL\t CLEAR");
        console.log("KEYEXISTS\t MEMBEREXISTS\t ALLMEMBERS");
        console.log("ITEMS\t\t MAP\t\t HELP");
        console.log("EXIT");
      }
    }

    // ADD 
    // Adds Key and Value to dictionary 
    if (inputArray[0] == "ADD") {
      if (inputArray.length !== 3) {
        console.log(">> ERROR, ADD must include a Key and a Member (ex. foo bar)\n");
      } else {
        if (dict.has(inputArray[1])) {
          let member = dict
            .get(inputArray[1])
            .find((mem) => mem == inputArray[2]);
          if (member) {
            console.log(`>> ERROR, member:${inputArray[2]} already exists for key:${inputArray[1]}.\n`);
          } else {
            dict.set(
              inputArray[1],
              dict.get(inputArray[1]).concat([inputArray[2]])
            );
            console.log(">> Added\n");
          }
        } else {
          dict.set(inputArray[1], [inputArray[2]]);
          console.log(">> Added\n");
        }
      }
    }
    //KEYS 
    //displays all the keys in the dictionary 

    if (inputArray[0] == "KEYS") {
      if (inputArray.length !== 1) {
        console.log(">> ERROR, this returns a list of all keys\n>> No arguments needed\n");
      }
      if (dict.size == 0) {
        console.log("There are no keys in the dictionary\n");
      } else {
        let i = 0;
        for (const key of dict.keys()) {
          i++;
          console.log(`${i}) ${key}`);
        }
        console.log("");
      }
    }

    // MEMBERS
    // Displays all members associated with a key 

    if (inputArray[0] == "MEMBERS") {
      if (inputArray.length !== 2) {
        console.log(">> ERROR, MEMBERS prompt requires a key.\n");
      } else {
        if (dict.has(inputArray[1])) {
          for (let i = 0; i < dict.get(inputArray[1]).length; i++) {
            let value = dict.get(inputArray[1]);
            console.log(`${i + 1}) ${value[i]}`);
          }
          console.log("");
        } else {
          console.log(">> ERROR, key not found.\n");
        }
      }
    }
  }
}

run().then();