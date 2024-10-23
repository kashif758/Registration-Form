function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    let isValid = true;
  
    // Clear previous errors
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmPasswordError").style.display = "none";
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Name is required.";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }
  
    // Email validation
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").innerHTML = "Enter a valid email.";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }
  
    // Password validation
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long.";
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
    }
  
    // Confirm password validation
    if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
      document.getElementById("confirmPasswordError").style.display = "block";
      isValid = false;
    }
  
    return isValid;
  }
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  