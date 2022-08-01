import React, {useState, useEffect} from 'react';
import ItemList from '../components/ItemList';

const Home = () => {

const [results, setResults] = useState([]);
const [isloading, setIsLoading] = useState(true);
const [err, setErr] = useState("");

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setIsLoading(false);
      setResults(json.results);
    })
    .catch((err) => {
      setErr("Ocurrio un error inesperado");
    });
  }, []); 

  if(isloading){
    return <span>Cargando....</span>;
  }

  return <div>{err ? <span>{err}</span> : <ItemList items={results} />}</div>;
};

export default Home;