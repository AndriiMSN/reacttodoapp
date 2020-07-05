import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './post-list-item.css'

export default class PostListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     important: false,
  //     like: false
  //   };
  //   this.onImportant = this.onImportant.bind(this);
  //   this.onLike = this.onLike.bind(this);
  // }

  // onImportant() {
  //   this.setState(({ important }) => ({
  //     important: !important
  //   }))
  // }

  // onLike() {
  //   this.setState(({ like }) => ({
  //     like: !like
  //   }))
  // }

  render() {
    const { label, onDelete, onToggleImportant, onToggleLiked, important, liked } = this.props;
    // const { important, like } = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) {
      classNames += ' important';
    }

    if (liked) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}>
            <StarIcon />
          </button>
          <button
            type="button"
            onClick={onDelete}>
            <DeleteIcon />
          </button>
          <DoneOutlineIcon className='fa-check' />
        </div>
      </div>
    )
  }
}