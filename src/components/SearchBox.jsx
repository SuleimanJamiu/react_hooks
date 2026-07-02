import { useEffect, useRef, useState } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current += 1;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="search-card">
      <h2>Search Box</h2>
      <div className="search-input-row">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type to search..."
          aria-label="Search input"
        />
      </div>
      <p>Search text: {query || 'None yet'}</p>
      <p>Render count: {renderCount.current}</p>
    </section>
  );
}

export default SearchBox;
