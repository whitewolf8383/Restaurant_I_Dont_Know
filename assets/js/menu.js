/* Keith J. Francis
*  ICT 4510
*  Spring 2021
*  This script allows the menu to be viewable by all users withou the option to add foods. 
*/
let key = "875df4ac21128bcf2499467e1a68d534";
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