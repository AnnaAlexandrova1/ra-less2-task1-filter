import './drowItem.css'
import { Component} from 'react'

class DrowItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { img, category } = this.props;

        return (
            <img className="item" id={category} src={img} alt="item"/>    
        )
    }
}

export default DrowItem;