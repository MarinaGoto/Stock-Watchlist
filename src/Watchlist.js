import React, { Component } from "react";
import WatchItems from "./WatchItems";
import "./Watchlist.css";

class Watchlist extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };

            /* prevState argument gives me a value for state object just before this particular moment in time has happened
            * and with the prevState I'm accessing the same copy of the values
            * and using the concat method on the array, which is the way of returning a whole new array that's supposed to modify an existing one
            * with the newly entered item*/

            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(newItem)
                };
            });
        }
      /*Once a value has been submitted we will clear it out*/
      this._inputElement.value = "";

      console.log(this.state.items);

      e.preventDefault();
    }

    /*The value of deleteItem comes from WatchItems component.
    * Filter method is removing any item that are not matching the key that we currently have  */
    deleteItem(key){
        console.log("Key in deleteItem:" + key);
        console.log("Items at delete:" + this.state.items);
        var filteredItems = this.state.items.filter(function(item){
           return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <div className = "WatchlistMain">
                <div className= "header">
                    {/* when the form is ever submitted the add item method somewhere will get called */}
                    <form onSubmit = {this.addItem}>
                        {/*Here the value of input element is going to be stored in local to this Component variable */}
                        <input ref ={(a) => this._inputElement = a}
                                   placeholder = "enter stock">
                        </input>
                        <button type = "submit">add</button>
                    </form>
                </div>
                <WatchItems entries = {this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}

export default Watchlist;