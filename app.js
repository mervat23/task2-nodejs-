const yargs = require("yargs")
const data = require ("./data")


yargs.command({
    command : "add",
    describe: " add a new person",
    builder: {
        firstName : {
            describe: "add the first name of person",
            demandOption: true,
            type: "string"
        },
        lastName : {
            describe: "add the last name of person",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: " add city of person ",
            demandOption: true,
            type: "string"
        },
        id : {
                describe : "id of person",
                demandOption : true,
                type:'number'
             },
        age : {
            describe : "age of person",
            demandOption : true,
            type:'number'
         },
         python : {
            describe : "python grade of person",
            demandOption : true,
            type:'number'
         },
         physics : {
            describe : "physics grade of person",
            demandOption : true,
            type:'number'
         },
    },
    handler: (personData)=> {
        data.addData(personData.id,personData.firstName , personData.lastName , 
        personData.city , personData.age,personData.algorithms,
        personData.python,personData.physics,
        personData.electronics,personData.math,
        personData.english)
    }
 })


 yargs.command({
    command : "delete",
    describe: " to delete a person",
    builder : {
        id : {
            describe : "id of person",
            demandOption : true,
            type:'number'
         }
    },
    handler: (personData)=> {
        data.deleteData(personData.id)
    }
 })


 yargs.command ({
    command : "read",
    describe : "to read data of person",
    builder : {
        id : {
            describe : "id of person",
            demandOption : true,
            type:'number'
         }
    },
    handler : (personData)=> {
        data.readData (personData.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "show all data in the database",
    handler : ()=>{
        data.showData()
    }
 })
 

yargs.parse() 
   
  



