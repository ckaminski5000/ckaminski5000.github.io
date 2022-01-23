const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("flexCheckDefault");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
const errorElement = document.getElementById("error");
let container = document.getElementById("table");
let bookId = 0;

function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
    console.log(`${title} by ${author}, ${pages} pages, ${read}`);
  };
}

function checkBox(checkbox) {
  if (checkbox.checked === true) {
    checkbox = true;
  } else {
    checkbox = false;
  }
  return checkbox;
}

function readItCheckBox(boolean) {

  if (boolean === true) {
    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.checked = true;
    return newCheckbox;
  } else {
    let newCheckbox = document.createElement("input");
    newCheckbox.setAttribute("type", "checkbox");
    return newCheckbox;
  }
}

function addBookToLibrary() {
  const newBook = Object.create(books.prototype);
  myLibrary.push(newBook);
  newBook.name = prompt("Book Name: ");
  newBook.author = prompt("Author of the Book: ");
  newBook.pages = prompt("Pages in Book: ");
  newBook.read = prompt("Have you read this book yet?");
}

function createDeleteBtn() {
  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-primary");
}

let deleteBtnList = [];

function addBookToList(list, x) {
  let row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  //replace T/F with checkbox
  //list[x][read] = readItCheckBox(read);
  //let checkBox = list[x][read];
  //console.log(bookList);

  for (let property in list[x]) {
    if (property === 'read') {
      let column = document.createElement("div");
      column.classList.add("col");
      column.classList.add("columnClass");
      column.classList.add("text-wrap");
      column.classList.add("text-break");
      column.classList.add("delete" + bookId);
      row.appendChild(column);
      //let checkbox = readItCheckBox(list[x][property]);
      column.appendChild(readItCheckBox(list[x][property]));
      
    } 
    else {
      let column = document.createElement("div");
      column.classList.add("col");
      column.classList.add("columnClass");
      column.classList.add("text-wrap");
      column.classList.add("text-break");
      column.classList.add("delete" + bookId);
      column.innerHTML = list[x][property];
      row.appendChild(column);
    }
  }

  //add new column for the delete Button
  list[x].id = bookId;
  let column = document.createElement("div");
  column.classList.add("col");
  column.classList.add("columnClass");

  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-primary");
  deleteBtn.id = bookId;
  deleteBtnList.push(deleteBtn);
  column.appendChild(deleteBtn);
  row.appendChild(column);
  column.classList.add("delete" + bookId);

  bookId += 1;
}

let bookList = [];
let counter = 0;

submit.addEventListener("click", (e) => {
  let bookObj = Object.create(books.prototype);
  bookObj.title = title.value;
  bookObj.author = author.value;
  bookObj.pages = pages.value;
  bookObj.read = checkBox(read);
  bookList.push(bookObj);
  addBookToList(bookList, counter);
  document.querySelector("form").reset();
  counter += 1;
  console.log(bookList);

  deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let classy = "." + "delete" + btn.id;
      document.querySelectorAll(classy).forEach((item) => {
        item.remove();
      });
    });
  });

  /*let messages = [];
    if(title.value === '' || title.value === null){
        messages.push('The title is required');
    }

    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerHTML=messages.join(', ');

    }*/
});
