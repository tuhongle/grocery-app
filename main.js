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
