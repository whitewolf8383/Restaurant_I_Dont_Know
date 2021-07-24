/* Keith J. Francis
*  ICT 4510
*  Spring 2021
*  This code functions for the admin page and produces the menu and the add additional foods option.
*/
document.querySelector("#get-btn").addEventListener("click", () => {
  document.querySelector("#get-div").style.display = "block";
  document.querySelector("#post-create-div").style.display = "none";

  let key = sessionStorage.getItem("key");
  /*   Get Items   */
  fetch(`https://ict4510.herokuapp.com/api/menus?api_key=${key}`, {
    method: "GET",
    headers: {
      "accept": "*/*"
    },
  })
    .then(response => response.json())
    .then(data => {
      let menu = data.menu;
      for(let i = 0; i < menu.length; i++){
        buildMenu(menu[i]);
      }
    })
    .catch(error => {
      console.error("An issue occured during the get menu process.", error);
    });
})

function buildMenu(menuItem){
  let h5 = document.createElement("h5");
  h5.className = "inline";
  h5.textContent = menuItem.item;

  let p1 = document.createElement("p");
  p1.className = "inline";
  p1.textContent = menuItem.price;
  p1.style.marginLeft = "100px";

  let p2 = document.createElement("p");
  p2.textContent = menuItem.description;

  let id = document.createElement("p");
  id.textContent = menuItem.id;
  id.style.display = "none"

  let div1 = document.createElement("div");
  div1.className = "menu-item-description";
  div1.appendChild(h5).appendChild(p1).appendChild(p2).appendChild(id);

  let div2 = document.createElement("div");
  div2.className = "menu-item";
  div2.appendChild(div1);
  div2.style.marginBottom = "20px";

  document.querySelector(".menu-div").appendChild(div2);
}

document.querySelector("#create-btn").addEventListener("click", () => {
  document.querySelector("#get-div").style.display = "none";
  document.querySelector("#post-create-div").style.display = "block";
})

/*   Create Item    */
document.querySelector("#create-item").addEventListener("click", () => {
  let foodItem = {
    item: document.querySelector("#item").value,
    description: document.querySelector("#description").value,
    price: document.querySelector("#price").value,
  }
  let key = sessionStorage.getItem("key");
  let token = sessionStorage.getItem("token");
  fetch(`https://ict4510.herokuapp.com/api/menus?api_key=${key}`, {
    method: "POST",
    headers: {
      "accept": "*/*",
      "x-access-token": token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(foodItem)
  })
    .then(response => response.json())
    .then(data => {
      let p = document.createElement("p");
      p.style.color = "red".style.fontSize = "26px";
      p.textContent = "Item has been added.";
      document.querySelector("#post-create-div").appendChild(p);
    })
    .catch(error => {
      console.error("An issue occured during the create item process.", error);
    });
})