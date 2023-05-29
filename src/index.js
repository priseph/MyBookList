import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';


const BookList = () => {
  return (
    <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
        <Image />
        <Title />
        <Author />
    </article>
    

  )
}

const Image = () => {
    return <img src="./images/pro.jpg" alt="" />
}

const Title = () => {
    return <h2>Book Title</h2>
}

const Author = () => {
    return <h4>Author</h4>
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);