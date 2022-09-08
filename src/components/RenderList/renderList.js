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

/*class RenderList extends Component{
    constructor({elementsArray}){
        super()
        this.elementsArray = elementsArray;
    }
    
   
    
  render(){
    const parts = this.drowColums()
    //console.log(parts

    let drowList = parts.map(item => {
        const columns = item.map(i => {
            const { img, category } = item;
            return (
                <DrowItem img={img} category={category} />
            ) 
        })
    })

    /* this.elementsArray.map(item => {
        const { img, category } = item;
        return (
            <DrowItem img={img} category={category} />
        ) 
    })

    return (
        <div className="container">
          {drowList}
        </div>
    )
    }


}*/

export default RenderList;