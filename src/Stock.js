
import "./css/watchlist-stock.css"
import React from 'react';
import OneList from "./OneList";
import WatchListComp from './WatchListComp';


class Stock extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            redirectTo : false,
            redirectBack : false,
            correctionData : [],
            watchList: [],
            watchListCounter: 0,
            watchSelector: 0,
            counterSelector: [],
            counter: 1
        }
        this.incrementCounter= this.incrementCounter.bind(this);
         this.incrementWatchCounter= this.incrementWatchCounter.bind(this);

        this.decrementCounter= this.decrementCounter.bind(this);
        this.removeItemList= this.removeItemList.bind(this);
        this.addWatch= this.addWatch.bind(this);
        this.changefocus= this.changefocus.bind(this);
    }

    addWatch() {


           let correctionDataForWatchList = this.state.watchList
           let correctionData = [];

           correctionDataForWatchList.push(correctionData)
           this.setState({correctionDataForWatchList})
           this.incrementWatchCounter();

    }

    InitialList = () => {
        let initialListItems = []

        initialListItems.push(
            <div className="line_column_name">
                    <div className="text_line column_name left_side">Symbol</div>
                    <div className="text_line column_name">Last</div>
                    <div className="text_line column_name">T/O</div>
                    <div className="text_line column_name">+%</div>
            </div>
            )

        return initialListItems || null
    }

    ListUi = () => {
        let ListUiItems = [];
        console.log(this.state.watchSelector, 'watchSelector')
        // if (this.state.watchSelector) {
        for(let i = 0; i <    this.state.counterSelector[this.state.watchSelector] ; i++) {
            ListUiItems.push(

                this.state.watchList[this.state.watchSelector][i]
            )
        }

        return ListUiItems || null
    }

    incrementCounter(){
        let counterSelector = this.state.counterSelector
        console.log(counterSelector, 'CURRENT COUNTER')
        let valuetoadd = counterSelector[this.state.watchSelector]+1;
        console.log(valuetoadd, 'CURRENT valuetoadd')

        console.log(valuetoadd, 'CURRENT valuetoadd')
            this.setState({counterSelector})
        console.log(counterSelector, 'CURRENT COUNTER')

        let a = counterSelector.slice(); //creates the clone of the state
        a[this.state.watchSelector] = a[this.state.watchSelector] + 1
        this.setState({counterSelector: a});
        }



    incrementWatchCounter(){
        let counter = this.state.counterSelector.length;
        this.setState({watchSelector : counter})
        this.state.counterSelector.push(counter)

    }



    decrementCounter(i){
        let counterSelector = this.state.counterSelector

        let a = counterSelector.slice(); //creates the clone of the state
        a[this.state.watchSelector] = a[this.state.watchSelector] -1
        this.setState({counterSelector: a});

    }



    removeItemList = (i) => {
        let newCorrectionData = this.state.watchList[this.state.watchSelector].slice()
        newCorrectionData.splice(i, 1);

        this.decrementCounter(i);
        let correctionDataToChange = this.state.watchList[this.state.watchSelector];
        //Studet data
        this.setState({
            correctionDataToChange : newCorrectionData
        })
    }

    addStock = () => {
        if (this.state.watchList.length > 0 )
        {
        let i = this.state.watchList[this.state.watchSelector].length



        // correctionData = WatchList[i];
        console.log(this.state.watchList[this.state.watchSelector],"overhere")

        this.state.watchList[this.state.watchSelector].push(      <OneList
            stockname = {"QWE"}
            stockvalue = {35}
            stocknumber = {353}
            stockdelta = {0.55}
            removeItemList = {this.removeItemList}
            i = {i}   />)

        this.incrementCounter()
        } else {
            alert('Please create a watch list first :)')
        }
    };

    addNegStock = () => {
        let i = this.state.watchList[this.state.watchSelector].length
        console.log(this.removeItemList, 'REMOVE')
        this.state.watchList[this.state.watchSelector].push(      <OneList
            stockname = {"QWE"}
            stockvalue = {35}
            stocknumber = {353}
            stockdelta = {-0.55}
            removeItemList = {this.removeItemList}
            i = {i}

        />)

        this.incrementCounter()
    };



    changefocus(i){
        console.log(i, "change focus")
        this.setState({watchSelector : i})
    }


    removeWatch = (i) => {
        let newCorrectionData = this.state.watchList.slice()
        newCorrectionData.splice(this.state.watchSelector, 1);

        this.setState({
            watchList : newCorrectionData
        })
    }

    render(){
    const watchlistItems = this.state.watchList.map((currElement, index) =>
        <div>
        <WatchListComp
                number = {index}
                changeFocus = {this.changefocus}
                removeWatch = {this.removeWatch}
            />

        </div>
    );

        return(
        <div className="body">
         <div className="watch_main">
          <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar_main w-nav">
           <div className="container w-container">
            <a href="#" className="brand w-nav-brand">
                <div className="logo_infront"></div>
            </a>
        </div>
    </div>
        <div className="active_list">
         <div className="navbar_active_list w-clearfix">
          <div className="list_title"><strong className="bold-text">turnover OSEBX</strong></div>
           <div className="form_active_list">
             <div className="form_block_stock w-form">
               <div id="email-form" name="email-form" data-name="Email Form" className="form_stock">

        <input  type="text" className="text_field_stock w-input" maxLength="256" name="Add-stock" data-name="Add stock" placeholder="Add stock" id="Add-stock-2" required=""></input>
        <input  onClick = {this.addStock} type="submit" value="+" data-wait="Please wait..." className="button_add_stock w-button"></input>
        </div>
        </div>
        </div><a href="#" className="button_remove_active_list w-button"></a></div>

        <div className="body_list">

        {this.InitialList()}
        {this.ListUi()}
        </div>
    </div>
    <div className="avalible_list w-clearfix">
        <div className="list_line">
        {watchlistItems}
        </div>
        <div className="form_avalible_list">
        <div className="form_block_list w-form">
        <div id="email-form" name="email-form" data-name="Email Form" className="form_list"><input
                            type="text" className="text_field_list w-input" maxLength="256" name="Add-Watchlist"
                            data-name="Add Watchlist" placeholder="Add watchlist" id="Add-Watchlist"
                            required=""></input>
                            <input onClick={this.addWatch} type="submit" value="+" data-wait="Please wait..."
    className="button_add_list w-button"></input>
                        </div>
                    </div>
                </div>
            </div>
    </div>
        </div>
   )
  }
}
            export default Stock;