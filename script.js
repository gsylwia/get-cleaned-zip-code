const getCleanedZipCode = (value) => {
  
    if (typeof value === "number") {
        value = String(value);
    }
    
    value = value.replace(/\s/g, '')

    if (value.includes("-")) {
     	 const indexChar= value.indexOf("-")
        const newArr = value.split("")
        const removeChar = newArr.splice(indexChar, 1)
        const newStr = newArr.join("")  
        value = newStr
    }   

    if (value.length <= 4 || value.length >= 7) {
        return ""
    }
  
    if (value.length === 5) {
        return value.substring(0, 2) + "-" + value.substring(2, 5)
    }
}

console.log(getCleanedZipCode("-2123"))