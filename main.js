// product settup
var tableButton = document.querySelector(".table-button");
var chairButton = document.querySelector(".chair-button");
var deskButton = document.querySelector(".desk-button");
var bookshelfButton = document.querySelector(".bookshelf-button");
var tableOption = document.querySelector(".table-option");
var chairOption = document.querySelector(".chair-option");
var deskOption = document.querySelector(".desk-option");
var bookshelfOption = document.querySelector(".bookshelf-option");

// show and hide product options
function showTable() {
    tableOption.className = "table-option show"; //show table options
    chairOption.className = "chair-option";
    deskOption.className = "desk-option";
    bookshelfOption.className = "bookshelf-option";
}
function showChair() {
    tableOption.className = "table-option"; 
    chairOption.className = "chair-option show"; //show table options
    deskOption.className = "desk-option";
    bookshelfOption.className = "bookshelf-option";
}
function showDesk() {
    tableOption.className = "table-option"; 
    chairOption.className = "chair-option";
    deskOption.className = "desk-option show";  //show table options
    bookshelfOption.className = "bookshelf-option";
}
function showBookshelf() {
    tableOption.className = "table-option"; 
    chairOption.className = "chair-option";
    deskOption.className = "desk-option";
    bookshelfOption.className = "bookshelf-option show";  //show table options
}

// Event Listener, click product to show options
tableButton.addEventListener("click", showTable);
chairButton.addEventListener("click", showChair);
deskButton.addEventListener("click", showDesk);
bookshelfButton.addEventListener("click", showBookshelf);