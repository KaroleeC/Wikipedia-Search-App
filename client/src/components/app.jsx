import React from 'react';
import './app.css';
//after break make the border round
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      query: ""
    }
    this.submitSearch = this.submitSearch.bind(this);

  }
  changeHandler(e) {
    console.log(e.target.value)
    
  }

  submitSearch() {
    //what happens when the form is submited
    console.log(this.query.value)
    
  }

  render() {
    return (
      <div className="container">
        <p> Wkiki Search </p>
        <br/>
          <input type="text" ref={(input) => { this.query = input }}  />
          <br/>
          <input type="submit" value="Search"  onClick={ this.submitSearch }/>
        <p> Not sure what to search for? </p>
         <button> Random </button>
      </div>
    )
  }
  
}
export default App;