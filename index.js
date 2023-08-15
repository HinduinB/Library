const myLibrary = [];

let newBookBtn = document.getElementById(`new-book-btn`);

newBookBtn.addEventListener(`click`, () => {
  let newBookForm = document.querySelector(`#new-book-form`);
  newBookForm.style.display = "block";
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryBook = document.querySelector("#library");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");

    bookElement.innerHTML = `<div class = "card-header">
    <h2 class="title">${book.title}</h2>
    <h5 class = "author">by ${book.author} </h5>
    </div>
    <div class="card-body">
    <p>${book.pages} pages </p>
    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>

    

   `;

    libraryBook.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookLibrary() {
  let title = document.querySelector(`#title`).value;
  let author = document.querySelector(`#author`).value;
  let pages = document.querySelector(`#pages`).value;
  let read = document.querySelector(`#read`).checked;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();
  console.log(newBook);
}

document.querySelector(`#form-book`).addEventListener("submit", (event) => {
  event.preventDefault();

  addBookLibrary();
});
