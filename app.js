const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
  if (e.target.className == "delete"){
      const li = e.target.parentElement;
      list.removeChild(li) 
  }
})

//add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

//hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if (hideBox.checked){
    list.style.display="none";
  } else {
    list.style.display= "block";
  }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1 ){
      book.style.display ='block';
    } else {
      book.style.display = 'none';
    }
  });
});

//create elements

const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = "Delete";
bookName.textContent = value;

//add classes

bookName.classList.add('name');
deleteBtn.classList.add('delete');

//append to DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
})

