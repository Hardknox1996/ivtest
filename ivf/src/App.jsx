import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AllItems } from "./assets/components/AllItems";
import { AddItem } from "./assets/components/AddItem";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([]);
  let baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  
  // console.log(import.meta.env.VITE_BACKEND_BASE_URL)
  
  useEffect(() => {
    axios
      .get(baseUrl + "/getlist")
      .then(function (response) {
        // handle success
        // console.log(response);
        let allProducts = response.data;
        if (allProducts) {
          setProducts(allProducts);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);


  function addNewProducts(newp){
    axios
      .post(baseUrl + "/updateList", {
        "newProduct": newp
      })
      .then(function (response) {
        // handle success
        // console.log(response);
        let allProducts = response.data.newData;
        if (allProducts) {
          setProducts(allProducts);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }


  return (
    <>
      <div className="topBar">Add / View Products</div>
      <div className="w100 overf">
        <div className="w50 showList overf mar0Auto">
          <h4>List of all products</h4>

          <AllItems productsList={products} />
          <AddItem clickhandle={addNewProducts} />
        </div>
      </div>
    </>
  );
}

export default App;
