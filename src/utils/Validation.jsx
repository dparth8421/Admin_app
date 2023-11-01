const checkValidation = (empid, password) => {
    const isEmpidValid = /[a-z]{2}-[0-9]{4}/.test(empid);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  
    if (!isEmpidValid && !isPasswordValid) {
      return "Please enter details.";
    }
    if (!isEmpidValid) {
      return "Invalid Emp ID format. Please enter in the format xx-xxxx.";
    }
    if (!isPasswordValid) {
      return "Password must be at least 8 characters long and contain both letters and numbers.";
    }
  
    return null; 
  };
  
  export default checkValidation;
  