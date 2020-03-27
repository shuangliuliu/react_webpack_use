import React, { Component } from 'react'
export default class CanvasUse extends Component {
  constructor() {
    super(...arguments)
  }
  componentDidMount() {
    // canvas使用
    let canvas = document.getElementById("mycanvas")
    let ctx = canvas.getContext('2d')
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 300);
    ctx.stroke();
  }
  render() {
    return (
      <div>
        <div>
          {/* 画板和画纸默认宽高为300*150 */}
          {/* <canvas id='mycanvas' style={{ border: '1px solid red' }}></canvas><br></br> */}
          {/*  设置canva属性的宽高相当于是设置画板和画布的大小，此时画板和画布都是300*300   */}
          {/* <canvas id='mycanvas' width='300' height='300' style={{ border: '1px solid red' }}></canvas> */}
          {/*
            style样式设置的宽高仅仅是画板的宽高，此时画纸宽高是400*400，画纸宽高是300*150，
            画纸为了迎合画板尺寸，画纸会连同图像拉伸，当下情况会在高度方向拉伸
          */}
          <canvas id='mycanvas' style={{ width: '300px', height: '300px', border: '1px solid red' }}></canvas>
        </div>
      </div>
    )
  }
}