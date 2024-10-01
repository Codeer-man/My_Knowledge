"use client"
import { useEffect, useState } from "react"

export default function ProductsPage() {
    const [Data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const result = await response.json();
                setData(result.products); // Corrected to result.products
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>Products Page</h1>
            {Data?.map((product) =>(
                <div key={product.id}>{product.category}</div>
            ))}
           
        </div>
    );
}
