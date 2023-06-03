/* change info in modal */

function changeInfo(eve) {
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalPrice = document.getElementById("modal-price");

  let parentEle;

  if (eve.target.classList.contains("item-image")) {
    parentEle = eve.target.parentNode.parentNode;
  } else {
    parentEle = eve.target.parentNode;
  }

  modalImg.src = parentEle.children[0].children[1].src;
  modalName.innerHTML = parentEle.children[1].innerText;
  modalPrice.innerHTML = parentEle.children[2].innerText;
}

document.body.onclick = function (eve) {
  changeInfo(eve);
};

//? change number of orfers

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const orders = document.getElementById("orders");

plus.onclick = function () {
  orders.value++;
};

minus.onclick = function () {
  if (orders.value >= 1) {
    orders.value--;
  }
};

const closeCart = document.getElementById("closeCart");
const addToCart = document.getElementById("addToCart");

closeCart.onclick = function () {
  orders.value = 1;
};

addToCart.onclick = function () {
  orders.value = 1;
};

//? Show Search Input

const searchButton = document.getElementById("showSearch");

searchButton.onclick = function () {
  document.getElementById("searchInput").classList.toggle("show");
};
