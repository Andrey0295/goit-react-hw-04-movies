import React, { Component } from 'react';
import shortid from 'shortid';

class SearchForm extends Component {
  state = {
    query: '',
  };
  searchInputId = shortid.generate();

  onInputChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.searchInputId}></label>
        <input
          type="text"
          value={this.state.query}
          id={this.searchInputId}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchForm;
