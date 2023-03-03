import React from "react";
import Book from "../book/Book";
import './gridBooks.css'

const GridBooks = () => {
   const data = [
      {
         title: "title 1",
         description: "description1",
         image: "https://imgs.search.brave.com/M0PLq6Tbnz_Aj959rhFzGrPjaw8JeojjM36fAvgDR9w/rs:fit:625:942:1/g:ce/aHR0cHM6Ly93d3cu/cmVjcmVvdmlyYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA2LzMwLWFz/b21icm9zYXMtcG9y/dGFkYXMtZGUtbGli/cm9zLTIwLmpwZw",
      },
      {
         title: "title 3",
         description: "description1",
         image: "https://imgs.search.brave.com/M0PLq6Tbnz_Aj959rhFzGrPjaw8JeojjM36fAvgDR9w/rs:fit:625:942:1/g:ce/aHR0cHM6Ly93d3cu/cmVjcmVvdmlyYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA2LzMwLWFz/b21icm9zYXMtcG9y/dGFkYXMtZGUtbGli/cm9zLTIwLmpwZw",
      },
      {
         title: "title 4",
         description: "description1",
         image: "https://imgs.search.brave.com/M0PLq6Tbnz_Aj959rhFzGrPjaw8JeojjM36fAvgDR9w/rs:fit:625:942:1/g:ce/aHR0cHM6Ly93d3cu/cmVjcmVvdmlyYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA2LzMwLWFz/b21icm9zYXMtcG9y/dGFkYXMtZGUtbGli/cm9zLTIwLmpwZw",
      },
      {
         title: "title 5",
         description: "description1",
         image: "https://imgs.search.brave.com/M0PLq6Tbnz_Aj959rhFzGrPjaw8JeojjM36fAvgDR9w/rs:fit:625:942:1/g:ce/aHR0cHM6Ly93d3cu/cmVjcmVvdmlyYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA2LzMwLWFz/b21icm9zYXMtcG9y/dGFkYXMtZGUtbGli/cm9zLTIwLmpwZw",
      },
   ];
   return <div className="container_grid_books">
    {data.map((item) =>{
        return <Book book={item}/>
    })}
   </div>;
};

export default GridBooks;
