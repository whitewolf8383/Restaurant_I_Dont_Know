/* Keith J. Francis
*  ICT 4510
*  Spring 2021
*  This script controls the login form aross all pages. 
*/
document.querySelector("#submit-btn").addEventListener("click", () => {
  const data = {
    username : document.querySelector("#user-name").value,
    password : document.querySelector("#password").value
  }
  document.querySelector("main").style.opacity = "1";

  fetch("https://ict4510.herokuapp.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("user", data.user.username);
      sessionStorage.setItem("first_name", data.user.first_name);
      sessionStorage.setItem("last_name", data.user.last_name);
      sessionStorage.setItem("key", data.user.api_key);
      sessionStorage.setItem("token", data.user.token);
      document.querySelector("#login-form").style.display = "none";
      document.querySelector(".admin-link").style.display = "block";
      document.querySelector("#login-btn").style.display = "none";
      document.querySelector("#log-out-btn").style.display = "block";
    })
    .catch(error => {
      console.error("An issue occured during the login process.", error);
    });
})