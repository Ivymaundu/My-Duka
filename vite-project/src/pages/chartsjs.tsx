import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import 'chart.js/auto';
import url from '../config';

interface DashboardData {
    date: string;
    total_sales: number;
}

interface ProductData {
    name: string;
    sales_product: number;
}

export default function LineAndBar() {
    const [lineChartData, setLineChartData] = useState<{ labels: string[]; values: number[] }>({ labels: [], values: [] });
    const [barChartData, setBarChartData] = useState<{ labels: string[]; values: number[] }>({ labels: [], values: [] });

    const lineChartRef = useRef<any>();
    const barChartRef = useRef<any>();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const apiUrl = `${url}/dashboard`;

                const response = await axios.get<{
                    sales_data: DashboardData[];
                    salesproduct_data: ProductData[];
                }>(apiUrl);

                const { sales_data, salesproduct_data } = response.data;

                const lineLabels = sales_data.map((item) => item.date);
                const lineValues = sales_data.map((item) => item.total_sales);

                const barLabels = salesproduct_data.map((item) => item.name);
                const barValues = salesproduct_data.map((item) => item.sales_product);

                setLineChartData({
                    labels: lineLabels,
                    values: lineValues,
                });

                setBarChartData({
                    labels: barLabels,
                    values: barValues,
                });
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                // Implement error handling here, such as displaying an error message to the user
            }
        };

        fetchDashboardData();

        // Cleanup function to destroy charts when the component unmounts
        return () => {
            if (lineChartRef.current) {
                lineChartRef.current.destroy();
            }
            if (barChartRef.current) {
                barChartRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <ResponsiveContainer width='100%' height='50%'>
                <Line
                    ref={lineChartRef}
                    data={{
                        labels: lineChartData.labels,
                        datasets: [
                            {
                                label: "Total Sales per Day",
                                data: lineChartData.values,
                                fill: false,
                                borderColor: "rgb(75, 192, 192)",
                                tension: 0.1,
                            },
                        ],
                    }}
                />
            </ResponsiveContainer>
            <ResponsiveContainer width='100%' height='50%'>
                <Bar
                    ref={barChartRef}
                    data={{
                        labels: barChartData.labels,
                        datasets: [
                            {
                                label: "Total Sales per Product",
                                data: barChartData.values,
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </ResponsiveContainer>
        </>
    );
}
