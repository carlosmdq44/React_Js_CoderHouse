import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

const [results, setResults] = useState([]);

const [err, setErr] = useState("");

const fetchData = async () => {

    try {

      const rawResponse = await fetch(`[fakestoreapi.com/products`);

      const finalData = await rawResponse.json();

      console.log(finalData);

      setResults(finalData);

    } catch (error) {

        setErr(error);

    }

  };

useEffect(() => {

  fetchData();

    }, []);

  return <div>{err ? <span>{err}</span> : <ItemList items={results}/>}</div>;

};

export default ItemListContainer;