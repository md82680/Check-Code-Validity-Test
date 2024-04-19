function checkCodeValidity(enteredCode, availableCodes) {
	let index = 0;
	let resultString = "";
	let compareString = "";
	let isFound = false;
  
  
	do {
	  compareString += "Checking against " + availableCodes[index] + "...\n"
	  if(enteredCode === availableCodes[index]){
		resultString = "Coupon found!"
		isFound = true;
	  }
	  index++;
  
  
	} while(index < availableCodes.length && !isFound);
  
  
	if(!isFound){
	  resultString = "Coupon not found";
	}
  
  
	// Don't change this line
	return {
	  resultString,
	  compareString
	};
  }
  
  
  module.exports = { checkCodeValidity };