import React, { Component } from 'react';

import SearchList from './components/SearchList';

import './styles.css';

class DummyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectText: 'Select...',
      showOptionList: false,
      originalList: [],
      optionsList: [],
      value: '',
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener('mousedown', this.handleClickOutside);
    let list = [];
    // Check if input is Array or Object
    if (Array.isArray(this.props.option)) {
      list = this.props.option;
    } else {
      for (let key in this.props.option) {
        list.push(this.props.option[key]);
      }
    }
    this.setState({
      originalList: list,
    });
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = (e) => {
    if (
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text')
    ) {
      this.setState({
        showOptionList: false,
      });
    }
  };

  // This method handles the display of option list
  handleListDisplay = () => {
    this.setState((prevState) => {
      return {
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = (e) => {
    this.setState({
      defaultSelectText: e.target.getAttribute('data-name'),
      showOptionList: false,
      value: '',
    });
  };

  handleValueChange = (e) => {
    const optionsList = this.state.originalList.filter((word) =>
      word.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    this.setState({
      value: e.target.value,
      optionsList,
    });
  };

  render() {
    const { originalList, optionsList } = this.state;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div
        className={
          document.activeElement.className.split(' ').indexOf('text-box') > -1
            ? 'custom-select-container active'
            : 'custom-select-container'
        }
      >
        <div className='selected-text' onClick={this.handleListDisplay}>
          <input
            type='text'
            className={
              defaultSelectText === 'Select...' ? 'text-box' : 'text-box active'
            }
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder={defaultSelectText}
          />
          <div className='arrow'></div>
        </div>
        {showOptionList &&
          (this.state.value.length === 0 ? (
            <SearchList
              list={originalList}
              defaultSelectText={defaultSelectText}
              handleOptionClick={this.handleOptionClick}
            />
          ) : optionsList.length === 0 ? (
            <SearchList
              list={[]}
              defaultSelectText={defaultSelectText}
              handleOptionClick={this.handleOptionClick}
            />
          ) : (
            <SearchList
              list={optionsList}
              defaultSelectText={defaultSelectText}
              handleOptionClick={this.handleOptionClick}
            />
          ))}
      </div>
    );
  }
}

export default DummyComponent;
