import "./HomePage.css";
import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductsGrid from "./ProductsGrid";

export default function HomePage({ cart, loadCart }) {
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
    const getHomeData = async () => {
      const respose = await axios.get("/api/products");
      setProducts(respose.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>E-commerce Project</title>
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
