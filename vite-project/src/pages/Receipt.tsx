// import React from 'react';
// import jsPDF from 'jspdf';
// import { Product } from '../types';

// interface ReceiptProps {
//   cart: Product[];
//   total: number;
// }

// const Receipt: React.FC<ReceiptProps> = ({ cart, total }) => {
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.text('Receipt', 10, 10);
//     cart.forEach((item, index) => {
//       doc.text(`${item.name} - ${item.price} x ${item.quantity}`, 10, 20 + index * 10);
//     });
//     doc.text(`Total: ${total.toFixed(2)}`, 10, 20 + cart.length * 10);

//     doc.save('receipt.pdf');
//   };

//   return <button onClick={generatePDF}>Print Receipt</button>;
// };

// export default Receipt;
