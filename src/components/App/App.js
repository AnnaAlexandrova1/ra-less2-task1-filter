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
      filter: 'All',
    }
  }

  onFilterSelect = (filter)=> {
    this.setState({filter})
  }
  
 render(){
  const {filter, data} = this.state;

  return (
    <div className="App">
      <header className="app-header">Домашнее задание "Портфолио с фильтрами"</header>
      <FilterPanel filter={filter} onFilterSelect={this.onFilterSelect}/>
      <RenderList data={data}/>
    </div>
  );
 }
}

export default App;
