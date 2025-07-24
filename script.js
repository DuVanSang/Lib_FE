const API_URL = 'http://localhost:8080/api/books';

document.addEventListener('DOMContentLoaded', () => {
  loadBooks();

  document.getElementById('add-book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const categoryId = document.getElementById('categoryId').value;
    const authorId = document.getElementById('authorId').value;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, isbn, categoryId, authorId })
    }).then(() => {
      loadBooks();
      e.target.reset();
    });
  });
});

function loadBooks() {
  fetch(API_URL)
    .then(res => res.json())
    .then(books => {
      const list = document.getElementById('book-list');
      list.innerHTML = '';
      books.forEach(book => {
        const row = `
          <tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td><button onclick="deleteBook(${book.id})">Xoá</button></td>
          </tr>`;
        list.insertAdjacentHTML('beforeend', row);
      });
    });
}

function deleteBook(id) {
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }).then(() => loadBooks());
}
