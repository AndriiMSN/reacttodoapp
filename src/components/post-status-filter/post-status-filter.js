import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './post-status-filter.css';


export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'like', label: 'Done' },
      { name: 'current', label: 'Current' }
    ];
  }
  render() {

    const buttons = this.buttons.map(({ name, label }) => {
      const { filter, onFilterSelect } = this.props;
      const active = filter === name;
      const clazz = active ? 'primary' : ''
      return (
        <Button type='button'
          variant="contained"
          color={clazz}
          key={name}
          onClick={() => onFilterSelect(name)}>
          {label}</Button>
      )
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}