import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const Detail = () =>{
  let params = useParams();

const [data, setData] = useState([]);
const [isloading, setIsLoading] = useState(true);
const [err, setErr] = useState("");

useEffect(() => {
    fetch("https://fakestoreapi.com/products" + params.id)
    .then((res) => res.json())
    .then((json) => {
      setIsLoading(false);
      setData(json);
    })
    .catch((err) => {
      setErr("Ocurrio un error inesperado");
    });
  }, [params.id]); 

  return ( 
  <div>
    {data && (
    <div>
      <img src={data.image} alt={data.title} />
    <div>
      <p>{data.title}</p>
    </div>
  </div>
    )}
  </div>
  ); 
};

export default Detail;