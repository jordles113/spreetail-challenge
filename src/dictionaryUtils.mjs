    import chalk from 'chalk'
    
    //chalk variables 
    export const baseStyle = chalk.white.bold
    export const success = chalk.green.bold
    const error = chalk.red.bold
    const warning = chalk.yellow.bold

    // instantiates the dictionary using Javascript Map 
    let dict = new Map();
    
    // HELP
    // Extra functionality that allows a user to view all command prompts.
    export const help = (inputArray) => {
      if (inputArray?.length !== 1) {
        console.log(error(">> ERROR, HELP returns all command prompts\n>> No arguments needed."));
      } else {
        console.log(baseStyle("ADD\t\t KEYS\t\t MEMBERS"));
        console.log(baseStyle("REMOVE\t\t REMOVEALL\t CLEAR"));
        console.log(baseStyle("KEYEXISTS\t MEMBEREXISTS\t ALLMEMBERS"));
        console.log(baseStyle("ITEMS\t\t HELP"));
        console.log(warning("EXIT"));
      }
    }

    // ADD 
    // Adds Key and Value to dictionary 
    export const add = (inputArray) => {
      if (inputArray.length !== 3) {
        console.log(error(">> ERROR, ADD must include a Key and a Member (ex. foo bar)\n"));
      } else {
        if (dict.has(inputArray[1])) {
          let member = dict
            .get(inputArray[1])
            .find((mem) => mem == inputArray[2]);
          if (member) {
            console.log(error(`>> ERROR, member:${inputArray[2]} already exists for key:${inputArray[1]}.\n`));
          } else {
            dict.set(
              inputArray[1],
              dict.get(inputArray[1]).concat([inputArray[2]])
            );
            console.log(success(">> Added\n"));
          }
        } else {
          dict.set(inputArray[1], [inputArray[2]]);
          console.log(success(">> Added\n"));
        }
      }
    }

    //KEYS 
    //displays all the keys in the dictionary 

    export const printKeys = (inputArray) => {
      if (inputArray.length !== 1) {
        console.log(error(">> ERROR, this returns a list of all keys\n>> No arguments needed\n"));
      }
      if (dict.size == 0) {
        console.log(warning("There are no keys in the dictionary\n"));
      } else {
        let i = 0;
        for (const key of dict.keys()) {
          i++;
          console.log(success(`${i}) ${key}`));
        }
        console.log("");
      }
    }

    // MEMBERS
    // Displays all members associated with a key 

    export const printMembers = (inputArray) => {
      if (inputArray.length !== 2) {
        console.log(error(">> ERROR, MEMBERS prompt requires a key.\n"));
      } else {
        if (dict.has(inputArray[1])) {
          for (let i = 0; i < dict.get(inputArray[1]).length; i++) {
            let value = dict.get(inputArray[1]);
            console.log(success(`${i + 1}) ${value[i]}`));
          }
          console.log("");
        } else {
          console.log(error(">> ERROR, key does not exist.\n"));
        }
     }
    }

    //REMOVE member
    export const removeMember = (inputArray) => {
      if (inputArray.length !== 3) {
        console.log(error(">> ERROR, please include a key and member pair.\n"));
      } else {
        if (dict.has(inputArray[1])) {
          let member = dict
            .get(inputArray[1])
            .find((m) => m == inputArray[2]);
          if (member) {
            let value = dict.get(inputArray[1]);
            for (let i = 0; i < value.length; i++) {
              if (value[i] == inputArray[2]) {
                value.splice(i, 1);
              }
            }
            if (dict.get(inputArray[1]).length == 0) {
              dict.delete(inputArray[1]);
            }
            console.log(success(">> Removed\n"));
          } else {
            console.log(error("ERROR, member not found.\n"));
          }
        } else {
          console.log(error("ERROR, key does not exist.\n"));
        }
      }
    }

    //REMOVE ALL key 
    export const removeAll = (inputArray) => {
      if (inputArray.length !== 2) {
        console.log(error(">> ERROR, please specify the key you would like to remove.\n"));
      } else {
        if (dict.has(inputArray[1])) {
          dict.delete(inputArray[1]);
          console.log(success(">> Removed\n"));
        } else {
          console.log(success(">> ERROR, key does not exist.\n"));
        }
      }
    }

    //CLEAR 

    export const clear = (inputArray) => {
      if (inputArray.length !== 1) {
        console.log(error(">> ERROR, no arguments needed.\n"));
      } else {
        dict.clear();
        console.log(success(">> Cleared\n"));
      }
    }

    //KEY EXISTS 
    export const keyExists = (inputArray) => {
      if (inputArray.length !== 2) {
        console.log(error(">> ERROR, KEYEXISTS commands requires a key argument.\n"));
      } else {
        if (dict.has(inputArray[1])) {
          console.log(success(">> true\n"));
        } else {
          console.log(error(">> false\n"));
        }
      }
    }

    //MEMBER EXISTS 
    export const memberExists = (inputArray) => {
      if (inputArray.length !== 3) {
        console.log(error(">> ERROR, MEMBEREXISTS command requires an key and member argument.\n"));
      } else {
        if (dict.has(inputArray[1])) {
          let member = dict
            .get(inputArray[1])
            .find((mem) => mem == inputArray[2]);
          if (member) {
            console.log(success(">> true\n"));
          } else {
            console.log(error(">> false\n"));
          }
        } else {
          console.log(error(">> false\n"));
        }
      }
    }


    //ALL MEMBERS
    export const getAllMembers = (inputArray) => {
      if (inputArray.length !== 1) {
        console.log(error(">> ERROR, no arguments needed.\n"));
      } else {
        if (dict.size !== 0) {
          let j = 0;
          const logMapElements = (value) => {
            for (let i = 0; i < value.length; i++) {
              j++;
              console.log(success(`${j}) ${value[i]}`));
            }
          }
          dict.forEach(logMapElements);
          console.log("");
        } else {
          console.log(warning("There are no members in the Dictionary.\n"));
        }
      }
    }

    //ITEMS 

    export const getAllItems = (inputArray) => {
      if (inputArray.length !== 1) {
        console.log(error(">> ERROR,no arguments needed.\n"));
      } else {
        if (dict.size !== 0) {
          let j = 0;
          const logMapElements = (value, key) => {
            for (let i = 0; i < value.length; i++) {
              j++;
              console.log(success(`${j}) ${key}: ${value[i]}`));
            }
          }
          dict.forEach(logMapElements);
          console.log("");
        } else {
          console.log(warning("There are no Sets in the Dictionary.\n"));
        }
      }
    }