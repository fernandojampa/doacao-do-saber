import dataset from './dataset.js'

const bookDeck = document.querySelector('.catalogo-livros')

// for (const book of dataset) {
//   bookDeck.insertAdjacentHTML('beforeend', card)
// }

function createBookView(book) {
  const card = `<div class="col">
  <div class="card">
    <img src="${book.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${book.name}</h5>       
      <a href="modal.html" class="btn btn-primary">Quero este livro</a>        
    </div>
  </div>
</div>`
  bookDeck.insertAdjacentHTML('beforeend', card)
}
dataset.map(createBookView)

