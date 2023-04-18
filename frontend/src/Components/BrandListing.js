import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

import './BrandListing.css';

function BrandListing() {
    const { slug } = useParams();
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        async function fetchPhones() {
            const response = await axios.get(`https://phone-specs-api.vercel.app/brands/${slug}`);
            setPhones(response.data.data.phones);
        }
        fetchPhones();
        window.scrollTo(0, 0);
    }, [slug]);

    if (phones.length === 0) {
        return <div className='spinner-container'>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    }

    return (
        <div className="brand-listing">
            <h1>Brand: {phones.length > 0 ? phones[0].brand : ''}</h1>
            <ul>
                {phones.map((phone) => (
                    <li key={phone.slug}>
                        <Link to={`/details/${phone.slug}`}>
                            <h5>{phone.phone_name}</h5>
                            <img src={phone.image} alt={phone.phone_name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default BrandListing;
