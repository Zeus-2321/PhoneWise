import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SearchResult.css';

function SearchResult(props) {
    const location = useLocation();
    const searchResults = location.state;

    return (
        <div className="search-results-container">
            {searchResults.status && (
                <>
                    {searchResults.data.phones.map((phone) => (
                        <div className="search-result" key={phone.slug}>
                            <img src={phone.image} alt={phone.phone_name} />
                            <h4>{phone.phone_name}</h4>
                            <Link to={`/details/${phone.slug}`}>View details</Link>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default SearchResult;


