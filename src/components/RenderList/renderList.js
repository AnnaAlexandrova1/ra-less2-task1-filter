import './renderList.css'
import DrowItem from '../DrowItem/drowItem';
import { Component } from 'react';

class RenderList extends Component{
    constructor(props){
        super(props)
    }

    // делит на 3 подмассива данные
    calcColums(){
        const {data} = this.props;
        const array = [[], [], []];
        for(let i = 0; i < 3; i++){
            const num = Math.ceil(data.length/3)
            array[i] = data.slice(i*num, (i*num + num))
        }
        return array;
    }

    drowColumns(i){
        const data = this.calcColums();
        const array = data[i]
        console.log(data)
        const column = array.map(item => {
            const { img, category } = item;
            return (
                <DrowItem img={img} category={category} />
            )
        })
         return column;
    }

    render(){
      return(
        <div className='container'>
         <div className='column'>{this.drowColumns(0)}</div>
         <div className='column'>{this.drowColumns(1)}</div>
         <div className='column'>{this.drowColumns(2)}</div>
        </div>
      )  
    }
}

export default RenderList;