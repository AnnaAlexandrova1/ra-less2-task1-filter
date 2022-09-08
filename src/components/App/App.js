import { Component } from 'react';

import RenderList from '../RenderList/renderList';
import FilterPanel from '../FilterPanel/filterPanel';
import elementsArray from '../elementsArray'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data: elementsArray,
      filter: 'all',
    }
  }
  
  filterPost = (items, filter) => {
    switch(filter) {
      case 'websites':
        return items.filter(item => item.category == 'Websites')
      case 'flayers': 
        return items.filter(item => item.category == 'Flayers')
      case 'businesscards':
        return items.filter(item => item.category == 'Business Cards')
      default: 
        return items;
    }
  }

  onFilterSelect = (filter)=> {
    this.setState({filter})
  }
  
 render(){
  const {filter, data} = this.state;
  const visibleData = this.filterPost(data, filter);

  return (
    <div className="App">
      <header className="app-header">Домашнее задание "Портфолио с фильтрами"</header>
      <FilterPanel filter={filter} onFilterSelect={this.onFilterSelect}/>
      <RenderList data={visibleData}/>
    </div>
  );
 }
}

export default App;
