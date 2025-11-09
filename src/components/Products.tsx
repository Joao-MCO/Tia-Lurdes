import React, { useEffect } from 'react'
import '../styles/Products.css'
import axios from 'axios'
import type { IProductRaw } from '../models/products';

function Products() {
    const [products, setProducts] = React.useState([])
    const [isActive, setIsActive] = React.useState(false)

    const url = 'https://tia-lurdes.vercel.app/api';
    const handleSearch = async () => {
        const db = await axios.get(`${url}/products`);
        setProducts(db.data.items);
        if(db.data.size > 0) setIsActive(true);
        else setIsActive(false);
    }
    
    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <main>
            <div id="products-search">
                <input type="text" placeholder="" />
                <button>Search</button>
            </div>
            <div id='products-container'>
                {isActive && products.map((product: IProductRaw) => (
                    <div className="product-card">
                        <h3 className='product-title'>{product.name}</h3>
                        <p className='product-code'>{product.code}</p>
                        <img src={product.imageUrl || "src\\assets\\logo.png"} alt={product.name} className='product-photo'/>
                        <p className='product-description'>{product.section}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products