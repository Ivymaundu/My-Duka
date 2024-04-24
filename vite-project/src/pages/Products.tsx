import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const token = localStorage.getItem("token")
    console.log("prods token.....", token)
    useEffect(() => {
        axios.get<Product[]>('http://127.0.0.1:5000/products', {
            headers: {
                Authorization: `${token}`
            }
        })
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        
        <div className="container">

        <h2>Products</h2>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Name</th>
              <th scope="col">Price</th>
       
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {/* <th scope="row">{product.id}</th> */}
                <td>{product.name}</td>
                <td>{product.price}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            
    );
}

export default Products;