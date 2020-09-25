/* const deleterList = document.querySelectorAll("span:nth-of-type(2)");
deleterList.forEach(function(deleter) {
  deleter.addEventListener("click", function(e) {
    const li = e.target.parentElement;
    li.parentElement.removeChild(li);
  });
}); */


// Delete Books
const bookList = document.querySelector("#booklist");
bookList.addEventListener("click", function(e) {
  if (e.target.className == "deleter") {
    const li = e.target.parentElement;
     bookList.removeChild(li);
  }
});

// Create New Books
const addBooks = document.forms["added-books"];
addBooks.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addBooks.querySelector("input[type='text']").value;

  //create New Elements
  const li = document.createElement("li");
  const book = document.createElement("span");
  const deleter = document.createElement("span");

  //Two methods of adding classes to the Elements;
  //deleter.setAttribute("class", "deleter"); // This method also has the remove attribute method (removeAttribute("class"))
  deleter.classList.add("deleter"); //This method also has the the remove class method (classList.remove("deleter"))

  //Add the value of the form into the span tags
  book.textContent = value;
  deleter.textContent = "Delete";
  //Append the varibles to the DOM.
  li.appendChild(book);
  li.appendChild(deleter);
  bookList.appendChild(li);
});

//Hiding and revealing the books with a checkbox.
const bookHider = document.querySelector("#hide-books");
bookHider.addEventListener("change", function(e) {
  if (bookHider.checked) {
    bookList.style.display = "none";
  }

  else {
    bookList.style.display = "block";
  }
});

//Book Filtering functionality
const searchBar = document.forms["search-form"].querySelector("input");
searchBar.addEventListener("keyup", function(e) {
  const inputedValue = e.target.value.toLowerCase();
  const bookNames = document.querySelectorAll("li");
  bookNames.forEach(function(book) {
    if (book.textContent.toLowerCase().indexOf(inputedValue) !== -1) {
      book.style.display = "flex";
    }
    else {
      book.style.display = "none";
    }
  })
})
