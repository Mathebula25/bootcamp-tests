function allPaarl(regNumbers){
    //split the string and convert to an array		
            let regNumbersArray = regNumbers.split(',');
              let first = [];
    //create a loop which will print each item in regNumbersArray
              for (let i = 0 ; i < regNumbersArray.length ; i++){
            
                if (regNumbersArray[i].includes("CJ")){
                   first.push(regNumbersArray[i].trim());;
                } 
            }
      return first;
    console.log(first[1])  
    }
    
    