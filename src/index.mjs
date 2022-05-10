import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const { question } = require('readline-sync');
import { help, 
         add, 
         printMembers, 
         printKeys, 
         removeMember, 
         removeAll, 
         clear, 
         keyExists, 
         memberExists, 
         getAllMembers, 
         getAllItems,
         getHighestMember,
         baseStyle, 
         success
        } from './dictionaryUtils.mjs'

async function run() {
  while(true) {
    console.log(
      baseStyle("Please enter a command. For a list of commands enter HELP.")
    );
    const input = question(baseStyle(">"))
    const inputArray = input.split(" ")

    const key = inputArray?.[1]
    const member = inputArray?.[2]

    switch (inputArray[0].toLowerCase()) {
      case "help": 
          help(inputArray)
          break 
      case "add":
          add(inputArray, key, member)
          break
      case "keys":
          printKeys(inputArray)
          break
      case "members":
          printMembers(inputArray, key)
          break;
      case "remove":
          removeMember(inputArray, key, member)
          break
      case "removeall":
          removeAll(inputArray, key)
          break
      case "clear":
          clear(inputArray)
          break
      case "keyexists":
          keyExists(inputArray, key)
          break
      case "memberexists":
          memberExists(inputArray, key, member)
          break
      case "allmembers":
          getAllMembers(inputArray)
          break
      case 'highest': 
          getHighestMember(inputArray, key, member)  
          break
      case "items":
          getAllItems(inputArray)
          break
      case "exit": 
          console.log(success("Goodbye!"))
          process.exit()
          break
      default:
          console.log("That is not a command prompt.\n\nType HELP for a list of commands")

    }
  }
}

run().then();