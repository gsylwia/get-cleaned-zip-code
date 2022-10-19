const getCleanedZipCode = (value) => {
  
    if (typeof value === "number") {
        value = String(value);
    }

    if (value.length <= 4 || value.length >= 7) {
        return ""
    }

    const removeWhiteSpaces = value.replace(/\s/g, '')
  
	if (removeWhiteSpaces.length === 5) {
  		return removeWhiteSpaces.substring(0, 2) + "-" + removeWhiteSpaces.substring(2, 5)
	}
  
    if (value.length === 6) {
       const indexChar= value.indexOf("-")
       const newArr = value.split("")
       const removeChar = newArr.splice(indexChar, 1)
       const newStr = newArr.join("")      
       return newStr.substring(0, 2) + "-" + newStr.substring(2, 5)
    }  
}

console.log(getCleanedZipCode("12-345"))