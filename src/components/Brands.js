import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Brands.css';

function Brands() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://phone-specs-api.azharimm.dev/brands');
            setBrands(response.data.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Mobile Brands</h2>
            <ul>
                {brands.map((brand) => (
                    <li key={brand.brand_id}>
                        <h5>{brand.brand_name}</h5>
                        <p className="device-count">{brand.device_count} devices</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Brands;


