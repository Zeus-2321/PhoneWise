import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
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
        window.scrollTo(0, 0);
    }, []);

    if (brands.length === 0) {
        return <div className='spinner-container'>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    }

    return (
        <div className="brands-listing">
            <h2>Mobile Brands</h2>
            <ul>
                {brands.map((brand) => (
                    <li key={brand.brand_id}>
                        <Link to={`/BrandListing/${brand.brand_slug}`}>
                            <h5>{brand.brand_name}</h5></Link>
                        <p className="device-count">{brand.device_count} devices</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Brands;
