import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../components/ItemList';
import Loader from '../Loader';

function Home ({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const db = getFirestore();
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h2 className="text-center"> {greeting} </h2>
            <div className="container">
                <div className="row">
                    { loading 
                    ? 
                        <Loader />
                    :
                        <ItemList products={products}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;