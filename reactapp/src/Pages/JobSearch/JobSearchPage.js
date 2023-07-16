import React from 'react'
import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";


function JobSearchPage() {
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  
 const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.company.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ------------ Button Filtering -----------
  const [newQuery, setNewQuery] = useState({ role: "", location: "" })
  const handleChange = (event) => {
    setNewQuery({ ...newQuery, [event.target.name]: event.target.value })

  };



  function filteredData(products, ) {
    let filteredProducts = products;

      if (query) {
        filteredProducts = filteredItems;
       }
    
      if (newQuery.role?.length > 0) {
        filteredProducts = filteredProducts.filter(
          ({ role, }) =>
            role === newQuery.role

        );
      }
   
      if (newQuery.location?.length > 0) {
        filteredProducts = filteredProducts.filter(
          ({ location, }) =>
            location === newQuery.location

        );
   
     }
  
    

    return filteredProducts.map(
      ({ company, role, location, posteddate, viewjob }) => (
        <Card
          key={Math.random()}
          company={company}
          role={role}
          location={location}
          posteddate={posteddate}
          viewjob={viewjob}
        />
      )
    );
  }

  const result = filteredData(products,  );
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />  
    </>
  )
}

export default JobSearchPage;