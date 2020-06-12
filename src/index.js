import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Components/Map'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from "history";
import ScrollArea from 'react-scrollbar'


class Application extends React.Component {
    
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        
    }
    
    render() {
        // var geoData;
        return (
          // <div>
          //   {/* <Map/> */}
          //   <div id="nav">
          //     <Navbar/>
          //   </div>
          //   <div id="map">
          //     <Map/>
          //   </div>
          //   {/* <Map/> */}
          //   {/* <div ref={el => this.mapContainer = el} className='mapContainer' /> */}
          <div >
              <Navbar/>
              {/* <div className="map"> */}
              <Router history={createBrowserHistory()}>
                <Route exact path="/" component={Map}/>
                {/* <Route path="/info" component={<ScrollArea>{Card}</ScrollArea>}/> */}
                <Route path="/info" component={Card}/>
              </Router>
              {/* <Map/> */}
              {/* </div> */}
          </div>
        )
    }
}
  
ReactDOM.render(<Application />, document.getElementById('app'));