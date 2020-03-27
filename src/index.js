import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'
import './index.scss'
class Index extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className='index'>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))