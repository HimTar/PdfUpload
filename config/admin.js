let admin = {
  username: "admin",
  password: "admin",
};

let loggedIn = false;

// Function To Check If the Credentials are correct

function checkIfAdmin(user, pass) {
  if (user === admin.username && pass === admin.password) {
    return true;
  }

  return false;
}

// Function To Log In

function setLoggedIn() {
  loggedIn = true;
}

// Function To Log Out

function setLoggedOut() {
  loggedIn = false;
}

// Function To Check If User Is Logged In

function checkIfLoggedIn() {
  if (loggedIn === true) return true;
  return false;
}

// Function To Change Password

function changePassword(newPass) {
  admin.password = newPass;

  return true;
}

module.exports = {
  checkIfAdmin,
  changePassword,
  setLoggedIn,
  setLoggedOut,
  checkIfLoggedIn,
};
