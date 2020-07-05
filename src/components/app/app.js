import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React', important: true, liked: true, id: 1 },
        { label: 'Going to learn Vue', important: false, liked: false, id: 2 },
        { label: 'Going to learn Node', important: false, liked: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      const newArr = [newItem, ...data];
      return {
        data: newArr
      }
    });
  }



  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, liked: !old.liked };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }
  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }


  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {

      return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1
    })
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.liked)
    }
    if (filter == 'current') {
      return items.filter(item => !(item.liked))
    }
    else {
      return items
    }
  }

  onUpdateSearch(term) {
    this.setState({ term })
  }

  onFilterSelect(filter) {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state

    const liked = data.filter(item => item.liked).length
    const allPosts = data.length

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)
    return (
      <div className="app">
        <PostAddForm
          onAdd={this.addItem} />
        <AppHeader
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
          />
          <PostStatusFilter filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />

      </div>
    )
  }
}