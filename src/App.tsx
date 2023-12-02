import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState('');



  return (
    <>
      <NavBar />
      <main>
        <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category}/>
      </main>
    </>
  );
}

export default App;
