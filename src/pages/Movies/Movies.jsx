import { useEffect, useState} from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = 'a31f32c2390f6ff1abf334be45f35ecd';

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debouncedFetch = debounce((queryParam) => {
      if (!queryParam) return;
  
      setLoading(true);
  
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${queryParam}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
      )
        .then(response => response.json())
        .then(search => setSearchResults(search.results))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, 300);
  
    if (!inputValue) {
      setSearchResults([]);
      return;
    }
  
    debouncedFetch(inputValue);
  
    return () => {
      debouncedFetch.cancel();
    };
  }, [inputValue]);
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies..."
        style={{ marginTop: '20px' }}
        onChange={handleInputChange}
        value={inputValue}
      />
      <div>
        {loading && <p>Loading...</p>}
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map(result => (
              <li key={result.id}>
                <Link to={`/movies/${result.id}`}>
                  {result.title || result.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movies;
