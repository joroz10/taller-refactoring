function AuthenticationManager() {
  let isLoggedIn = false;
  let username = "";

  function login(user, password) {
    if (user === "admin" && password === "admin123") {
      isLoggedIn = true;
      username = "admin";
    } else {
      isLoggedIn = false;
      username = "";
    }
  }

  function logout() {
    isLoggedIn = false;
    username = "";
  }

  function displayStatus() {
    if (isLoggedIn) {
      console.log(`Logged in as ${username}`);
    } else {
      console.log("Not logged in");
    }
  }

  return {
    login,
    logout,
    displayStatus,
  };
}

const authManager = AuthenticationManager();
authManager.login("admin", "admin123");
authManager.displayStatus();
