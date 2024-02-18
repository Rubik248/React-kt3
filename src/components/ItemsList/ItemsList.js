import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";




function ItemsList() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])

    



    return (
        <div className="list">
            {
                products.map(e => {
                    return (
                        <ItemCard 
                            title={e.title} 
                            price={e.price} 
                            img={e.images[0]} 
                            rate={e.rating}/>
                    )
                })
            }
        </div>
     );
}

export default ItemsList;