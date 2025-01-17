import React from 'react';
import './Header.css';

const Header = ({name, minimizeClickHandler}) => {
  return (
    <div className='header-container'>
      <div className='header-title'>{name}</div>
      <div className='header-actions'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 9.99992C10.8334 9.53968 10.4603 9.16658 10 9.16658C9.53978 9.16658 9.16669 9.53968 9.16669 9.99992C9.16669 10.4602 9.53978 10.8333 10 10.8333Z" stroke="#6B697B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 16.6666C10.4603 16.6666 10.8334 16.2935 10.8334 15.8332C10.8334 15.373 10.4603 14.9999 10 14.9999C9.53978 14.9999 9.16669 15.373 9.16669 15.8332C9.16669 16.2935 9.53978 16.6666 10 16.6666Z" stroke="#6B697B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 4.99992C10.4603 4.99992 10.8334 4.62682 10.8334 4.16659C10.8334 3.70635 10.4603 3.33325 10 3.33325C9.53978 3.33325 9.16669 3.70635 9.16669 4.16659C9.16669 4.62682 9.53978 4.99992 10 4.99992Z" stroke="#6B697B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div
          onClick={()=>{
            minimizeClickHandler();
          }}
          >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15M5 5L15 15" stroke="#6B697B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;