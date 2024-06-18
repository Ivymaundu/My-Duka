import { useEffect, useState } from 'react';
import '../style/checkout..css'
import axios from 'axios';

interface Product {
    id: number;
    product_name: string;
    product_price: number;
}


export default function CheckOut() {
    function GetPrint() {
        window.print()
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [attendant, setAttendant] = useState('');
    const [selectedProductId, setSelectedProductId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<Array<{
        id: number;
        product_name: string;
        product_price: number;
        quantity: number;
        total: number;
    }>>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);



    // fetch products from db
    useEffect(() => {
        axios.get<Product[]>('http://127.0.0.1:8000/products')
            .then(response => {
                setProducts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    useEffect(() => {
        const current_attendant = localStorage.getItem('full_name');
        if (current_attendant) {
            setAttendant(current_attendant);
        }
    }, []);


    const handleInputChange = (event: any) => {
        const newValue = event.target.value;
        setAttendant(newValue);
        localStorage.setItem('full_name', newValue);
    };

    const handleAddProduct = () => {
        const product = products.find(p => p.id === parseInt(selectedProductId));
        if (product && quantity) {
            const existingProductIndex = selectedProducts.findIndex(p => p.id === product.id);
            if (existingProductIndex > -1) {
                const updatedProducts = [...selectedProducts];
                updatedProducts[existingProductIndex].quantity += parseInt(quantity);
                updatedProducts[existingProductIndex].total += product.product_price * parseInt(quantity);
                setSelectedProducts(updatedProducts);
            } else {
                setSelectedProducts([
                    ...selectedProducts,
                    {
                        id: product.id,
                        product_name: product.product_name,
                        product_price: product.product_price,
                        quantity: parseInt(quantity),
                        total: product.product_price * parseInt(quantity),
                    },
                ]);
            }
        }
    };
    const handleRemoveProduct = (id: number) => {
        setSelectedProducts(selectedProducts.filter(product => product.id !== id));
    };
    useEffect(() => {
        const total = selectedProducts.reduce((sum, product) => sum + product.total, 0);
        setTotalAmount(total);
    }, [selectedProducts]);


    return (

        <div className="container-fluid">
            <div className="card">
                <div className="card-header text-center">
                    <h4>Invoice</h4>
                </div>
                <div className="card-body">
                    <div className="row">

                        <div className="col-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Attendant</span>
                                <input type="text" className="form-control" value={attendant} onChange={handleInputChange} placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Branch Name</span>
                                <input type="text" className="form-control" placeholder="Branch" aria-label="Branch" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">City</span>
                                <input type="text" className="form-control" placeholder="Location" aria-label="Location" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Inv.No</span>
                                <input type="text" className="form-control" placeholder="Invoice No.." aria-label="Invoice No.." aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Inv. Date</span>
                                <input type="date" className="form-control" placeholder="Invoice Date..." aria-label="Invoice Date..." aria-describedby="basic-addon1" />
                            </div>
                        </div>

                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        +
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Select Product</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <select className="form-select" aria-label="Default select example"
                                        value={selectedProductId}
                                        onChange={(e) => setSelectedProductId(e.target.value)}>
                                        <option value="" disabled>Item</option>
                                        {products.map(product => (
                                            <option key={product.id} value={product.id.toString()}>{product.product_name}</option>
                                        ))}

                                    </select>


                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">quantity</label>
                                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleAddProduct}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table className="table table-bordered mt-3">


                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Particular</th>
                                <th scope="col" className="text-end">Unit Price</th>
                                <th scope="col" className="text-end">Qty</th>
                                <th scope="col" className="text-end">Total</th>
                                <th scope="col" ></th>
                            </tr>
                        </thead>
                        <tbody>
                    {selectedProducts.length > 0 ? (
                        selectedProducts.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.product_name}</td>
                                <td className="text-end">{product.product_price}</td>
                                <td className="text-end">{product.quantity}</td>
                                <td className="text-end">{product.total}</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center">No Item </td>
                        </tr>
                    )}
                </tbody>
                    </table>
                    <div className="row">
                        <div className="col-8">
                            <button type="button" className="btn btn-primary" onClick={GetPrint}>print</button>
                        </div>
                        <div className="col-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Total</span>
                                <input type="number" className="form-control" value={totalAmount} readOnly 
                                 placeholder="Total" aria-label="Total..." aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Net Amount</span>
                                <input type="number" className="form-control" placeholder="Net Amount..."
                                 value={totalAmount} readOnly aria-label="Net Amount" aria-describedby="basic-addon1" />
                            </div>

                            <button type="button" className="btn btn-success mt-3" >Checkout</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}