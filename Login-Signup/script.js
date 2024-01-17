const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// validation of sign-in and sign-up buttons
function validateSignUp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("All fields are required for Sign Up");
  } 
  else {
    document.getElementById("signUpForm").submit();
  }
}

function validateSignIn() {
  var signInEmail = document.getElementById("signInEmail").value;
  var signInPassword = document.getElementById("signInPassword").value;

  if (signInEmail === "" || signInPassword === "") {
    alert("Email and Password are required for Sign In");
  } 
  else {
    document.getElementById("signInForm").submit();
  }
}
