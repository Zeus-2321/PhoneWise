import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';
import './Home.css';

function Home() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://phone-specs-api.azharimm.dev/latest');
      setPhones(response.data.data.phones);
    }
    fetchData();
  }, []);

  if (phones.length === 0) {
    return <div className='spinner-container'>
      <InfinitySpin
        width='200'
        color="#4fa94d"
      />
    </div>
  }

  return (
    <div id='homeContainer'>
      <h2>Latest Devices</h2>
      <div className="phones-container">
        {phones.map((phone) => (
          <div key={phone.slug} className="phone-item">
            <h5>{phone.phone_name}</h5>
            <img src={phone.image} alt={phone.phone_name} />
            <p>
              <Link to={`/details/${phone.slug}`}>View details</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

