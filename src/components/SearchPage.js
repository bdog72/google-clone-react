//
//

import React from 'react';
import { useStateValue } from '../StateProvider';

import '../styles/SearchPage.css';
// import useGoogleSearch from '../useGoogleSearch';

import Response from '../response';

// AIzaSyD3hWwQiXqBOVrKTwdqc5rJNlIwbfVw4qI

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <h1>{term}</h1>
      </div>
      <div className='searchPage__results'></div>
    </div>
  );
}

export default SearchPage;
