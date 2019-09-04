import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount(){
    this.props.onFetchUsers()
  }
  render() {
    const { users, loading, error } = this.props
    return (
      <div className="App">
        <Header users={users} loading={loading}/>
        <Content users={users} loading={loading} error={error}/>
        <Footer loading={loading}/> 
      </div>
    );
  }
}

export default App;
