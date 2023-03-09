import { useLocation } from 'react-router-dom';

function SearchResult(props) {
    const location = useLocation();
    const searchResults = location.state;
    console.log(searchResults);

    return (
        <div>
            <h2>Search Results</h2>
        </div>
    );
}

export default SearchResult;

