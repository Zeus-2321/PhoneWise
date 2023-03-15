import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './BrandListing.css';

function BrandListing() {
    const { slug } = useParams();
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        async function fetchPhones() {
            const response = await axios.get(`https://phone-specs-api.azharimm.dev/brands/${slug}`);
            setPhones(response.data.data.phones);
        }
        fetchPhones();
    }, [slug]);

    return (
        <div className="brand-listing">
            <h1>Brand: {phones.length > 0 ? phones[0].brand : ''}</h1>
            {phones.length > 0 ?
                <ul>
                    {phones.map((phone) => (
                        <li key={phone.slug}>
                            <Link to={`/details/${phone.slug}`}>
                                <img src={phone.image} alt={phone.phone_name} />
                                <div>{phone.phone_name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
                :
                <p>Loading...</p>
            }
        </div>
    );

}

export default BrandListing;
