import './renderList.css'
import DrowItem from '../DrowItem/drowItem';
import { Component } from 'react';

class RenderList extends Component{
    constructor({elementsArray}){
        super()
        this.elementsArray = elementsArray;
    }
    // делит на 3 подмассива данные
    drowColums(){
        const array = [[], [], []];
        for(let i = 0; i < 3; i++){
            const num = Math.ceil(this.elementsArray.length/3)
            array[i] = this.elementsArray.slice(i*num, (i*num + num))
        }
        return array;
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
    })*/

    return (
        <div className="container">
          {drowList}
        </div>
    )
    }


}

export default RenderList;