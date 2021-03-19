import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './SearchForm.module.css';

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
    const { query } = this.state;

    this.props.onSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.searchInputId}></label>
        <input
          className={styles.searchInput}
          type="text"
          value={query}
          placeholder="Search movie"
          id={this.searchInputId}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchForm;
