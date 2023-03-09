import React, { useState, useEffect } from 'react';
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

  return (
    <div id='homeContainer'>
      <h2>Latest Devices</h2>
      <div className="phones-container">
        {phones.map((phone) => (
          <div key={phone.slug} className="phone-item">
            <h5>{phone.phone_name}</h5>
            <img src={phone.image} alt={phone.phone_name} />
            <p>
              <a href={phone.detail}>View details</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

