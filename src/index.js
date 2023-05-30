import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const Books = [
  {
    title: 'Book 1 Title',
    author: 'Author 1',
    img: './images/pro.jpg',
    id: 1,
  },
  {
    title: 'Book 2 Title',
    author: 'Author 2',
    img: './images/pro.jpg',
    id: 2,
  },
  {
    title: 'Book 3 Title',
    author: 'Author 3',
    img: './images/pro.jpg',
    id: 3,
  },
  {
    title: 'Book 4 Title',
    author: 'Author 4',
    img: './images/pro.jpg',
    id: 4,
  },
]
const BookList = () => {
  return (
    <section className="booklist">
      {Books.map((bookItem) => {
        const {img, title, author, id} = bookItem
        return (
          <div className="book" key= {id}>
            <img src={img} />
            <h2>{title}</h2>
            <h4>{author}</h4>
          </div>
        )
      })}
    </section>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
