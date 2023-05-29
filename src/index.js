import React from 'react';
import ReactDom from 'react-dom/client';

const BookList = () => {
  return (
    <section>
        <BookList />
    </section>
  )
}

const Book = () => {
  return (
    <article>
        <Image />
        <Title />
        <Author />
    </article>
    

  )
}

const Image = () => {
    return <img src="http://placehold.it/" alt="" />
}

const Title = () => {
    return <h2>Book Title</h2>
}

const Author = () => {
    return <h4>Author</h4>
}


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);