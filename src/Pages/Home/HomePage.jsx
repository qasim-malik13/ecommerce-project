import "./HomePage.css";
import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductsGrid from "./ProductsGrid";

export default function HomePage({cart}) {
  // Using Fetch API to get products data from the backend server
  /*
  fetch("http://localhost:3000/api/products").then((response) => {
    return response.json()
  }).then((data) => {
      console.log(data);
    });
    */

  const [products, setProducts] = useState([]);

  // using useEffect to call the API when the component first mounts
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart}/>
      <title>E-commerce Project</title>
      <div className="home-page">
       <ProductsGrid products={products} />
      </div>
    </>
  );
}
