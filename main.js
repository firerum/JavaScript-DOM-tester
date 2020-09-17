
/* const deleterList = document.querySelectorAll("span:nth-of-type(2)");
deleterList.forEach(function(deleter) {
  deleter.addEventListener("click", function(e) {
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  });
}); */

const bookList = document.querySelector("#booklist");

  bookList.addEventListener("click", function(e) {
    if (e.target.className == "deleter") {
      const li = e.target.parentElement;
      bookList.removeChild(li);
    }
  });
