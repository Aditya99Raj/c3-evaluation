import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
const [books,setBooks] = useState([]);

const {section} = useParams();
useEffect(() => {
axios.get(`http://localhost:8080/books/${section}`).then((response) => {
  setBooks([response.data])
  console.log(response.data)
})
},[])
  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
         books.section
        
        }
      </h2>
      <SortAndFilterButtons handleSort={"books.sort((a,b)=>a-b)"} />

      <Main className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
