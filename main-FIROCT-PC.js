const viewItems = document.querySelector('a[href="#categories"]');
const categories = document.getElementById("categories");

viewItems.onclick = function () {
  /* if (categories.classList.contains("show")) {
        categories.classList.remove("show");
    } else {
        categories.classList.add("show");
    } */
  categories.classList.toggle("show");
};

/* change info in modal */

function changeInfo(eve) {
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalPrice = document.getElementById("modal-price");

  let parentEle;

  If (eve.target.classList.contains("item-image")) {
    parentEle = eve.target.parentNode.parentNode;
    } else {
        parentEle = eve.target.parentNode;
    }

  modalImg.src = parentEle.children[0].children[1].src;
  modalName.innerHTML = parentEle.children[1].innerText;
  modalPrice.innerHTML = parentEle.children[2].innerText;
};

document.body.onclick = function() {
    changeInfo(eve);
}

