//
//

import React, { useEffect, useState } from 'react';

import { Avatar } from '@material-ui/core';
import { Apps } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import '../styles/Home.scss';

import Search from './Search';

function Home() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const funnyAvatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <Apps />
          <Avatar src={funnyAvatarImage} />
        </div>
      </div>

      <div className='home__body'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png'
          alt=''
        />

        <div className='home__inputContainer'>
          {/* <Search /> */}
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
