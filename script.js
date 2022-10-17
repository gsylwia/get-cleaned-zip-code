
const getCleanedZipCode = (value) => {
    
    if (typeof value === "number") {
		value = String(value);
	}
    
    const valueLength = value.length >= 5 && value.length <= 6
   
    if (valueLength && value.includes(" ")) {
		console.log(value.replace(" ", "-"))
    } else if ( valueLength && value.includes("")) {
  		if (value.includes("-")) {
            console.log(value)
            return value
        }
		console.log(value.substring(0, 2) + "-" + value.substring(2, 5))
	}  else {
        console.log("")
    }
}

getCleanedZipCode("34-123")