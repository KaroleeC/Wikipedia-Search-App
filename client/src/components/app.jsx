import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="container">
        In the appp
        <form onChange>
          <input type="text"/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  
}
export default App;