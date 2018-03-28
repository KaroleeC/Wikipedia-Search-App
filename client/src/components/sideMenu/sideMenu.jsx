import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import routes from '../routes.jsx';

//after break make the border round
class SideMenu extends React.Component{
  constructor(props) {
    super(props)

  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <ul>
            <li> <Link to='/Main'> Main Page </Link> </li>
            <li> <Link to='/Content'> Contents </Link> </li>
            <li> <Link to='/Featured'> Featured Content </Link> </li>
          </ul>
        <Route path='/Main' component={<div>Main path </div>}/>
        <Route path='/Content' component={<div>content path </div>}/>
        <Route path='/Featured' component={<div>Featured path </div>}/>
        </div>
        </ BrowserRouter >
      </div>
    )
  }
  
}
export default SideMenu;