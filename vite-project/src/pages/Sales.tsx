import React, { useEffect, useState } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import $ from 'jquery';
import axios from 'axios';
import '../style/products.css';
import url from '../config';

interface Sale {
    id: number;
    product_name: string;
    product_price: number;
    stock_quantity: string;
    product_category: string;
}

const Products: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Sale[]>(`${url}/sales`);
                setSales(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        if (sales.length > 0) {
            // Destroy the existing DataTable if it exists
            if ($.fn.DataTable.isDataTable('#myTable')) {
                $('#myTable').DataTable().destroy();
            }

            // Initialize DataTable
            $('#myTable').DataTable({
                data: sales.map(sale => ({
                    product_name: sale.product_name,
                    product_price: sale.product_price,
                    product_category: sale.product_category,
                    stock_quantity: sale.stock_quantity,
            
                })),
                columns: [
                    { title: 'Product Name', data: 'product_name' },
                    { title: 'Product Price', data: 'product_price' },
                    { title: 'Product Category', data: 'product_category' },
                    { title: 'Available Quantity', data: 'stock_quantity' },
              
                ]
            });
        }
    }, [sales]);

    return (
        <div className="d-flex flex-column flex-md-row">
            <div className="flex-grow-1 container-fluid mt-3 mt-md-0">
                <h1>Sales</h1>
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
                            {sales.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    );
};

export default Products;
