import React, { useEffect, useState, useRef, FormEvent } from 'react';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import $ from 'jquery';
import axios from 'axios';
// import '../style/products.css';
import url from '../config';

interface Product {
    id: number;
    product_name: string;
    product_price: number;
    stock_quantity: string;
    product_category: string;
    image_url: string;
}

interface ProductAdd {
    product_name: string;
    product_price: number;
    stock_quantity: number;
    product_category: string;
    image_url?: string;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const tableRef = useRef<HTMLTableElement>(null);
    const [product_name, setProductName] = useState("");
    const [product_price, setProductPrice] = useState(0);
    const [stock_quantity, setStockQuantity] = useState(0);
    const[product_category,setProductCategory]=useState("")

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // post products

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleUpload = async () => {


        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(`${url}/upload/`, formData);
            console.log('File uploaded successfully:', response.data);
            return response.data.fileUrl;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };



    const handleCreateProduct = async (event: FormEvent) => {
        event.preventDefault();
        const newProduct: ProductAdd = {
            product_name: product_name,
            product_price: product_price,
            stock_quantity: stock_quantity,
            product_category: product_category

        };
        if (selectedFile) {
            newProduct.image_url = await handleUpload();
        }
        axios.post<Product>(`${url}/products`, newProduct)
            .then(response => {
                console.log('Product created successfully:', response.data);
            })
            .catch(error => {
                console.error('Error creating product:', error);
            });
    };
    // get products

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>(`${url}/products`);
                setProducts(response.data);
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
                data: products,
                columns: [
                    { title: 'ID', data: 'id' },
                    { title: 'Product Name', data: 'product_name' },
                    { title: 'Product Price', data: 'product_price' },
                    { title: 'Product Category', data: 'product_category' },
                    { title: 'Available Quantity', data: 'stock_quantity' },
                    {
                        title: 'Product Image',
                        data: 'image_url',
                        render: function (data) {
                            return `<img src="${data}" alt="Product Image" style="width: 90px; height: 70px; objectFit: contain;" />`;
                        }
                    }

                ]
            });
        }
    }, [products]);

    return (
        <div className="container3">
            <h2 className="mt-3">Products</h2>
            <div className="table-custom">
                <table id="myTable" className="table table-striped table-bordered" ref={tableRef}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody >
                        {products.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center" style={{ textAlign: 'center', verticalAlign: 'middle' }}>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Product
                </button>


                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleCreateProduct}>
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Product name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="productName"
                                            value={product_name}
                                            onChange={(e) => setProductName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productPrice" className="form-label">Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="productPrice"
                                            value={isNaN(product_price) ? '' : product_price}
                                            onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productQuantity" className="form-label">Stock quantity</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="productQuantity"
                                            value={isNaN(stock_quantity) ? '' : stock_quantity}
                                            onChange={(e) => setStockQuantity(parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productCategory" className="form-label">Product Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="productCategory"
                                            value={product_category}
                                            onChange={(e) => setProductCategory(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Select Image</label>
                                        <input
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={handleFileChange}
                                        />
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Products;
