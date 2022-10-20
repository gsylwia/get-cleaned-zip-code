const getCleanedZipCode = (value) => {
  
    if (typeof value === "number") {
        value = String(value);
    }
    
    let newValue = value.replace(/\s/g, '')

    if (newValue.includes("-")) {
     	 const indexChar= newValue.indexOf("-")
       const newArr = newValue.split("")
       const removeChar = newArr.splice(indexChar, 1)
       const newStr = newArr.join("")  
       newValue = newStr
    }   

    if (newValue.length <= 4 || newValue.length >= 7) {
        return ""
    }
  
    if (newValue.length === 5) {
        return newValue.substring(0, 2) + "-" + newValue.substring(2, 5)
    }
}

console.log(getCleanedZipCode("-71345"))