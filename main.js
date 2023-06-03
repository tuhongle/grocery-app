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

//? Show Search Input

const searchButton = document.getElementById("showSearch");

searchButton.onclick = function () {
  const searchInput = document.getElementById("searchInput");
  searchInput.classList.toggle("show");
};
