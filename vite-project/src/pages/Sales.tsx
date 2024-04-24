import React, { useState, useEffect } from "react";
import axios from "axios";

interface Sale {
  id: number;
  pid: number;
  quantity: number;
  created_at: string;
}

const Sales: React.FC = () => {
    const [sales, setSales] = useState<Sale[]>([]);
    const token = localStorage.getItem("token")
    console.log("prods token.....", token)
    useEffect(() => {
        axios.get<Sale[]>('http://127.0.0.1:5000/sales', {
            headers: {
                Authorization: `${token}`
            }
        })
            .then(response => {
                setSales(response.data);
            })
            .catch(error => {
                console.error('Error fetching sales:', error);
            });
    }, []);

  return (
    <div className="container">
      <h2>Sales</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product_ID</th>
            <th scope="col">created_at</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <th scope="row">{sale.id}</th>
              <td>{sale.pid}</td>
              <td>{sale.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;