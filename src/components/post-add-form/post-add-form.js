import React, { Component } from 'react';
import './post-add-form.css'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      placeholder: 'Enter you task, friend',
      error: false
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onValueChange(e) {
    // console.log(e.target.value)
    this.setState({
      text: e.target.value,
      error: false

    })
  }
  onSubmit(e) {
    e.preventDefault()
    if (this.state.text.length > 0) {
      this.props.onAdd(this.state.text)
      this.setState({
        placeholder: 'Enter one more task',
        error: false
      })
    } else {
      this.setState({
        placeholder: 'You didn\'t enter a task ',
        error: true
      })
    }
    this.setState({
      text: ''
    })
  }
  render() {
    let classNameSearch = 'form-control new-post-label'
    if (this.state.error) {
      classNameSearch += ' error'
    } else {
      classNameSearch += ''
    }

    return (
      <form action="" className="bottom-panel d-flex"
        onSubmit={this.onSubmit}
      >
        <TextField id="standard-basic"
          noValidate autoComplete="off" type="text" placeholder={this.state.placeholder}
          className={classNameSearch}
          onChange={this.onValueChange}
          value={this.state.text}
          variant="filled"
        />
        <Button variant="contained" color="primary" type="submit"
          className="btn btn-outline-secondary"
        >POST</Button>
      </form>
    )
  }
}

