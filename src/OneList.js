import "./css/watchlist-stock.css"
import React from 'react';
// import pen from './images/pen';

class OneList extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            redirectTo : false,
            redirectBack : false,
            correctionData : []
        }
    }


    render(){
    return(
        <div className="line">
            <div className="text_line left_side"> {this.props.stockname}</div>
            <div className="text_line"> {this.props.stockvalue}</div>
            <div className="text_line">{this.props.stocknumber}</div>
            <div className={`text_line ${this.props.stockdelta > 0 ? "pos_value" : "neg_value" }`} >  {this.props.stockdelta}%</div>
            <div href="#"  onClick={ () => { this.props.removeItemList(this.props.i) } }className="button_remove_stock w-button">-</div>
        </div>
    )}
}

export default OneList;