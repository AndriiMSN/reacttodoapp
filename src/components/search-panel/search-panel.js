import React, { Component } from 'react';
import './search-panel.css'
import { TextField } from '@material-ui/core';



export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }
  onUpdateSearch(e) {
    const term = e.target.value
    this.setState({ term })
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <TextField id="standard-basic"
        noValidate autoComplete="off" placeholder="Search"
        type="text"
        className="form-control search-input"
        onChange={this.onUpdateSearch}
      />
    )
  }
}