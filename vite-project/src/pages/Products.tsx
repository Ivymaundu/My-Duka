import React, { useEffect, useState } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import $ from 'jquery';
import axios from 'axios';
import '../style/products.css';

interface Product {
    id: number;
    product_name: string;
    product_price: number;
    stock_quantity: string;
    product_category: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('http://188.166.75.70:5005/products');
                setProducts(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            // Destroy the existing DataTable if it exists
            if ($.fn.DataTable.isDataTable('#myTable')) {
                $('#myTable').DataTable().destroy();
            }

            // Initialize DataTable
            $('#myTable').DataTable({
                data: products.map(product => ({
                    product_name: product.product_name,
                    product_price: product.product_price,
                    product_category: product.product_category,
                    stock_quantity: product.stock_quantity,
            
                })),
                columns: [
                    { title: 'Product Name', data: 'product_name' },
                    { title: 'Product Price', data: 'product_price' },
                    { title: 'Product Category', data: 'product_category' },
                    { title: 'Available Quantity', data: 'stock_quantity' },
              
                ]
            });
        }
    }, [products]);

    return (
        <div className="d-flex flex-column flex-md-row">
            <div className="flex-grow-1 container-fluid mt-3 mt-md-0">
                <h1>Products</h1>
                <div className="table-custom">
                    <table id="myTable" className="display table table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Category</th>
                                <th>Available Quantity</th>
                           
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div id="addproduct">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
