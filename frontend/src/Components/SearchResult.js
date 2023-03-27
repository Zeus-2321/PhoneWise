import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';
import image from './pepe.jfif';

function SearchResult(props) {
    const location = useLocation();
    const searchResults = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container'>
            {searchResults.status && searchResults.data.phones.length > 0 ? (
                <>
                    <h2>{searchResults.data.title}</h2>
                    <div className="search-results-container">
                        {searchResults.data.phones.map((phone) => (
                            <div className="search-result" key={phone.slug}>
                                <img src={phone.image} alt={phone.phone_name} />
                                <h4>{phone.phone_name}</h4>
                                <Link to={`/details/${phone.slug}`}>View details</Link>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="no-search-result-container">
                    <h2>No Search Result Found</h2>
                    <h3>:(</h3>
                    <img src={image} alt='pepe' />
                </div>
            )}
        </div>
    );
}

export default SearchResult;

//I have a react frontend which uses a pre built API made by someone else to get the data and I want to make a server which sends an axios request to the API and gets the data and store it in my database and updates it every 24 hours so the database remains up to date and I want to use my database to display the data in my frontend using MERN stack