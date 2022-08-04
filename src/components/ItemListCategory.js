import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../components/ItemList'

function ItemListCategory({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => {
        const db = getFirestore();
        if (idCategory) {
            const queryCollectionCategory = query(collection(db, 'items'), where('category', '==', idCategory) )
            getDocs(queryCollectionCategory)
            .then(resp => setProducts( resp.docs.map(item => ({ id: item.id, ...item.data()}))))
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(item => ({ id: item.id, ...item.data()}))))
            .finally(() => setLoading(false))
        }  
    }, [idCategory])

    return (
        <div>
            <h2 className="text-center"> {greeting} </h2>
            <div className="container">
                <div className="row">
                    { 
                        <ItemList products={products}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemListCategory;