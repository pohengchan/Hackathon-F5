import React from "react";
import "./book.css";
import {BsCartPlus} from 'react-icons/bs'

const Book = ({ book }) => {
   return (
      <div className="container_book">
         <div className="container_image">
            <img src={book.image} className="image" alt="" />
         </div>
            <h4 className="title_book">{book.title}</h4>
         <div className="container_footer_book">
            <h5 className="price">{book.price}33 USD</h5>
            <div className="button_add"><BsCartPlus/>Añadir</div>
         </div>
      </div>
   );
};

export default Book;
