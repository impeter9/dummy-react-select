import React from 'react';

import './SearchList.css';

const searchList = (props) => (
  <ul className='select-options'>
    {props.list.length === 0 ? (
      <li className={'no-options-list'}>No options</li>
    ) : (
      props.list.map((option) => {
        return (
          <li
            className={
              props.defaultSelectText === option
                ? 'custom-select-option active'
                : 'custom-select-option'
            }
            data-name={option}
            onClick={props.handleOptionClick}
          >
            {option}
          </li>
        );
      })
    )}
  </ul>
);

export default searchList;
