//
//

import React, { useState } from 'react';

import '../styles/Search.css';
import { Mic, SearchOutlined } from '@material-ui/icons';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    // setInput('');

    history.push('/search');
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchOutlined className='search__inputIcon' />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
        />
        <Mic />
      </div>

      <div className='search__buttons'>
        <Button type='submit' onClick={search} variant='outlined'>
          Google Search
        </Button>
        <Button variant='outlined'>I'm feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
