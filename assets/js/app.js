/* Keith J. Francis
*  ICT 4510
*  Spring 2021
*  This script controls the login and log out process as well as saving login information acrosss all pages. 
*/
if(sessionStorage.getItem("user") === null){
  sessionStorage.setItem("user", "");
}

if(sessionStorage.getItem("user") !== ""){
  document.querySelector(".admin-link").style.display = "block";
  document.querySelector("#login-btn").style.display = "none";
  document.querySelector("#log-out-btn").style.display = "block";
}

document.querySelector("#log-out-btn").addEventListener("click", () => {
  sessionStorage.setItem("user", "");
  sessionStorage.setItem("first_name", "");
  sessionStorage.setItem("last_name", "");
  sessionStorage.setItem("key", "");
  sessionStorage.setItem("token", "");
  document.querySelector("#log-out-btn").style.display = "none";
  document.querySelector(".admin-link").style.display = "none";
  document.querySelector("#login-btn").style.display = "block";
  window.location.replace("index.html");
})

document.querySelector("#login-btn").addEventListener("click", () => {
  document.querySelector("main").style.opacity = "0.2";
  document.querySelector("#login-form").style.display = "block";
})