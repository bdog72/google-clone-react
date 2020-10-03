//
//

import React from 'react';
import { useStateValue } from '../StateProvider';

import '../styles/SearchPage.css';
import { Link } from 'react-router-dom';
import useGoogleSearch from '../useGoogleSearch';

// import Response from '../response';
import Search from '../components/Search';
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  SearchOutlined,
} from '@material-ui/icons';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png'
            alt=''
            className='searchPage__logo'
          />
          {/* <h1>{term}</h1> */}
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons />
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchOutlined />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <Description />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage__option'>
                <Image />
                <Link to='/image'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOffer />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <Room />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVert />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a target='__blank' href={item.link}>
                {/* {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src&&(
                  <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt=""/>
                )} */}
                {item.displayLink}
              </a>
              <a
                className='searchPage__resultTitle'
                target='__blank'
                href={item.link}
              >
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
