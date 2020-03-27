import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import Icon from './assets/code.png'
import './App.css'
export default class App extends Component {
  constructor() {
    super(...arguments)
    this.canvas = React.createRef()
    this.state = {
      imageData: ''
    }
  }
  handleClick() {
    let me = this
    let width = this.canvas.current.offsetWidth
    let height = this.canvas.current.offsetHeight
    let scale = window.devicePixelRatio
    let canvas = document.createElement('canvas')
    canvas.width = width * scale
    canvas.height = height * scale
    let opt = {
      useCORS: true,
      scale: 2
    }
    html2canvas(document.getElementById('canvas_box'), opt).then(function (canvas) {
      document.getElementById('image_box').appendChild(canvas)
      let imageData = canvas.toDataURL('image/png')
      me.setState({
        imageData: imageData
      })
    })
  }
  render() {
    return (
      <div className='app'>
        13161930340
        <div ref={this.canvas} id='canvas_box' className='image_box'>
          <div>
            <p> this is use html2canvas</p>
            <img src={Icon} className='img' crossOrigin='anonymous' />
            <button onClick={this.handleClick.bind(this)}>生成图片</button>
          </div>
        </div>
        <div id='image_box' className='canvas_box'>
          <img src={this.state.imageData} crossOrigin='anonymous' className='img_canvas' /><br></br>
        </div>
      </div>
    )
  }
}