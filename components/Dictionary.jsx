import React, { useEffect } from 'react';

function Dictionary() {
  useEffect(() => {
    const dictionary = (word) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b989a1b287mshe0d41f4c562df5cp1879a1jsnafbb58104c77',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
        },
      };

      fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=` + word, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setWordName(response.word);
          setDefinition(
            response.definition
          );
        })
        .catch((err) => console.log(err));
    };

    // Event listener for the search button
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      dictionary(searchInput.value);
    });
  }, []);

  const [wordName, setWordName] = React.useState('Dictionary');
  const [definition, setDefinition] = React.useState(
    'Welcome to the Dictionary. Type your word in the search bar to get the meaning!'
  );
 const clear = () => {
    setWordName('Dictionary');
    setDefinition(
        'Type your word in the search bar to get the meaning!'
        );
    }
  return (
    <div className="px-4 py-5 my-5 text-center randomName">
      <h1 className="display-5 fw-bold text-body-emphasis">
        <span id="wordName">{wordName}</span>
      </h1>{' '}
      <br />
      <div className="col-lg-6 mx-auto">
        <form className="d-flex" role="search">
          <input
            id="searchInput"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button id="searchBtn" type="submit">
            Search
          </button>
        </form>{' '}
        <br />
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <p style={{color:"#0675c5", fontWeight:400}} className="lead mb-4">
            <span id="definition">{definition}</span>
          </p>
        </div>
        
      <button className='mt-3' onClick={clear} >Reset</button>
      </div>
    </div>
    
  );
}

export default Dictionary;
