import React, { Component } from "react";
import FlipMove from "react-flip-move";

/* Here we are creating a WatchItems component that takes the values our past us prop
   * which is our state value from earlie.
   * And we're trying to print it and make it into something that we can show up on screen
    * */
class WatchItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                   key={item.key}> {item.text} </li>
    }

    /* Explain */
    delete(key){
        console.log("Key is:" + key);
        this.props.delete(key);
    }

    /* watchEntries variable gets a copy of our props
    * listItems variable takes every item in this particular Entries which is an array
     * and uses the map function to iterate through every item
     * and create a list element where each items value is the key and the text value*/
    render(){
        var watchEntries = this.props.entries;
        var listItems = watchEntries.map(this.createTasks);

        return (
          <ul className = "theList">
              <FlipMove duration={250} easing="ease-out">
              {listItems}
              </FlipMove>
          </ul>
        );
    }
}

export default WatchItems;