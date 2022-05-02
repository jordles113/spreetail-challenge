const { question } = require('readline-sync');

// instantiates the dictionary using Javascript Map 
let dict = new Map();

async function run() {
  while(true) {
    console.log(
      "Please enter a command. For a list of commands enter HELP."
    );
    const input = question(">");
    const splitInputArray = input.split(" ");

    // HELP
    // Extra functionality that allows a user to view all command prompts.
    if (splitInputArray[0] == "HELP") {
      if (splitInputArray.length !== 1) {
        console.log(") ERROR, Incorrect number of arguments.\n");
      } else {
        console.log("ADD\t KEYS\t\t\t MEMBERS");
        console.log("REMOVE\t REMOVEALL\t\t CLEAR");
        console.log("KEYEXISTS\t MEMBEREXISTS\t ALLMEMBERS");
        console.log("ITEMS\t\t MAP\t\t\t HELP");
        console.log("EXIT");
      }
    }

    // ADD foo bar
    if (splitInputArray[0] == "ADD") {
      if (splitInputArray.length !== 3) {
        console.log(") ERROR, Incorrect number of arguments.\n ADD must include a Key and a Member (ex. foo bar)\n");
      } else {
        if (dict.has(splitInputArray[1])) {
          let member = dict
            .get(splitInputArray[1])
            .find((mem) => mem == splitInputArray[2]);
          if (member) {
            console.log(") ERROR, member already exists for key.\n");
          } else {
            dict.set(
              splitInputArray[1],
              dict.get(splitInputArray[1]).concat([splitInputArray[2]])
            );
            console.log(") Added\n");
          }
        } else {
          dict.set(splitInputArray[1], [splitInputArray[2]]);
          console.log(") Added\n");
        }
      }
    }
  }
}

run().then();