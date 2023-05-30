import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { Books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className="booklist">
      {Books.map((bookItems, index) => {
        return <Book {...bookItems} key={bookItems.id} number={index} />
      })}
    </section>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
