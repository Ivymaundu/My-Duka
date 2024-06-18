// import './dashboard2.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartBar, faTasks, faFileAlt, faCog, faQuestionCircle, faSignOutAlt, faTachometerAlt, faBox, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { ReactNode, useEffect, useState } from 'react';
// import axios from 'axios';
// // import { Container } from 'react-bootstrap';
// // import { Line, Bar } from 'react-chartjs-2';

// // import { faGoogleDrive, faGoogle, faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

// interface DashboardData {
//     date: string;
//     total_sales: number;
// }

// interface ProductData {
//     name: string;
//     sales_product: number;
// }

// interface ChartData {
//     labels: string[];
//     values: number[];
// }
// interface LayoutProps {
//     children: ReactNode;
// }

// const Dashboard2: React.FC<LayoutProps> = ({ children }) => {
//     const [chartData, setChartData] = useState<ChartData>({ labels: [], values: [] });

//     useEffect(() => {
//         const fetchDashboardData = async () => {
//             try {
//                 const apiUrl = "http://127.0.0.1:5000/dashboard";
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     throw new Error("Access token not found");
//                 }

//                 const response = await axios.get<{
//                     sales_data: DashboardData[];
//                     salesproduct_data: ProductData[];
//                 }>(apiUrl, {
//                     headers: {
//                         Authorization: ` ${token}`,
//                     },
//                 });

//                 const { salesproduct_data } = response.data;

//                 const salesLabels = salesproduct_data.map((item) => item.name);
//                 const salesValues = salesproduct_data.map((item) => item.sales_product);

//                 setChartData({
//                     labels: salesLabels,
//                     values: salesValues,
//                 });
//             } catch (error) {
//                 console.error("Error fetching dashboard data:", error);
//             }
//         };

//         fetchDashboardData();
//     }, []);

//     return (
//         <div className="body">
//             <div className="sidebar">
//                 <div className="logo"></div>
//                 <div className="menu">


//                     <ul>

//                         <li className='active'>
//                             <a href="/dashboard" >
//                                 <FontAwesomeIcon icon={faTachometerAlt} />
//                                 <span>Dashboard</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/products">
//                                 <FontAwesomeIcon icon={faBox} />
//                                 <span className="nav-item">Products</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/sales">
//                                 <FontAwesomeIcon icon={faChartLine} />
//                                 <span className="nav-item">Sales</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faChartBar} />
//                                 <span className="nav-item">Analytics</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faUsers} />
//                                 <span className="nav-item">Customers</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faTasks} />
//                                 <span className="nav-item">Jobs Board</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faFileAlt} />
//                                 <span className="nav-item">Documents</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faCog} />
//                                 <span className="nav-item">Settings</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faQuestionCircle} />
//                                 <span className="nav-item">Help</span>
//                             </a>
//                         </li>
//                         <li className='logout'>
//                             <a href="/logout" className="logout">
//                                 <FontAwesomeIcon icon={faSignOutAlt} />
//                                 <span className="nav-item">Logout</span>
//                             </a>
//                         </li>

//                     </ul>
//                 </div>

//             </div>
//             <div className="content">
                
//             {children}
//             </div>

//         </div>
//     )
// }
// export default Dashboard2;