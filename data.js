const fs = require("fs")

const loadData = () => {
    try {
        const convertDataToJson = fs.readFileSync ("dataBase.json").toString()
        return JSON.parse (convertDataToJson)
    } catch {
            return []
    }

  }

  
  const saveAllData = (data) => {
    const saveDataInJson = JSON.stringify(data) 
    fs.writeFileSync("dataBase.json" , saveDataInJson)
}
  

  const addData = (id,firstName ,lastName,city,age,
    algorithms,python,physics,electronics,math,english) => {
       const allData = loadData()

        const subjects=[]
         subjects.push({algorithms,python,physics,electronics,math,english})
          let totalGrades=algorithms+python+physics+electronics+math+english
          let averagOfGrades=totalGrades/6

        const duplicatedData = allData.filter ((personData) => {
            return personData.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id,
            firstName,
            lastName,
            city ,
            age,
            subjects,
            totalGrades,
            averagOfGrades
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }

 
 const deleteData = (id) => {
        const allData = loadData()

        const dataToKeepAfterDelete = allData.filter ((personData) => {
             return personData.id !== id 
        })
        console.log(dataToKeepAfterDelete)
        saveAllData(dataToKeepAfterDelete)
 }

      
 const readData = (id) => {
        const allData = loadData()

        const personNeededToShow = allData.find((personData) => {
                 return personData.id == id 
            })

            if(personNeededToShow){
                console.log(personNeededToShow)
            }
            else{
                console.log("Error this person is not found!") 
            }
        }


const showData = () => {
    const allData = loadData()
           if(allData.length==0){
            console.log("Error there is no data please add some data")
           }
           else{
        allData.forEach ((personData) => {
            console.log(personData.firstName , personData.lastName,
            personData.city,personData.age,personData.subjects,
            personData.totalGrades,personData.averagOfGrades)

           
        })
    }
    }
     

  
module.exports = {
    addData,
    deleteData, 
    readData,
    showData
}