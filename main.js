window.sr = ScrollReveal();


sr.reveal("main .wrapper", {
  origin: "left",
  delay: 500,
  reset: "true",
  duration: 600,
  distance: "50px"
});

sr.reveal(".main-nav", {
  origin: "top",
  duration: 600,
  distance: "50em",
  scale: 0.3,
  delay: 500
});


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

  /* const btn = document.querySelector("button");
  btn.addEventListener("submit", function(e) {
    const span = document.createElement("span");
    span.textContent = document.querySelector("#added-books #add-book").value;
    span.setAttribute("class", "deleter");
    const li = document.createElement("li");
    li.appendChild(span);
    bookList.appendChild(li);
  }); */

const addBooks = document.forms["added-books"];
addBooks.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addBooks.querySelector("input[type='text']").value;
  console.log(value);
});
