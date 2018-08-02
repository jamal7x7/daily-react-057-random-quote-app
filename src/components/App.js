import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Random Quote App </h1>
  </header>
)

const Main = (props) => (
  <div className='main'>

    

  </div>
)

const Menu = () => (
  <div className='menu'>
    

     

  </div>
)

class RandomQuoteApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
  

  }

  componentDidMount() {
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
  

  }


      render () {
    return (
      <div className='App-container'>

        <Menu />
        <Main 
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <RandomQuoteApp />

  </div>
)

export default App

