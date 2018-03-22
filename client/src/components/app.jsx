import React from 'react';
import axios from 'axios';
import Main from './main/main.jsx'
import './app.css';
//after break make the border round
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state= {
      query: "",
      data: "Query data"
    }
    this.submitSearch = this.submitSearch.bind(this);

  }
  changeHandler(e) {
    console.log(e.target.value)
    
  }

  submitSearch() {
    //what happens when the form is submited
    console.log(this.query.value)
    axios.get('/api/search', {query: this.query.value})
    .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data
        })
    })
    .catch((err) => {
      console.log('Submit Search error:', err)
    })

  }

  render() {
    return (
      <div>
        <div className="container">
          <p> Wkiki Search </p>
          <br/>
            <input type="text" ref={(input) => { this.query = input }}  />
            <br/>
            <input type="submit" value="Search"  onClick={ this.submitSearch }/>
          <p> Not sure what to search for? </p>
         <button> Random </button>
       </div>
       <Main data={this.state.data} />
      </div>
      
    )
  }
  
}
export default App;