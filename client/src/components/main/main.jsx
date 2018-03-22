import React from 'react';
import axios from 'axios';

//after break make the border round
class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      pageDate: ""
    }

  }
  
componentDidMount() {

}


  render() {
    return (
      <div>
       {this.props.data}
      </div>
    )
  }
  
}
export default Main;