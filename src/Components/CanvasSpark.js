import React from 'react';

export default class CanvasSpark extends React.Component {
    
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.style = {
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: -999
        }
    }

    componentDidMount() {
        this.draw();
    }

    calculateWidth = () => {
        let left = (this.props.width * 0.5) / 2;
        return left;
    }

    draw = () => {
        let context = this.canvas.current;
        context.width = this.props.width;
        context.height = this.props.height;
        context = this.canvas.current.getContext("2d");
        // Draw a square particle on the canvas
        context.fillStyle = "white";
        context.fillRect(this.calculateWidth(), 300, 10, 10);
        // Draw a circle particle on the canvas
        context.beginPath();
        context.fillStyle = "white";
        // After setting the fill style, draw an arc on the canvas
        context.arc(50, 20, 10, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();
    }

    render() {

        return (
            <canvas style={this.style} ref={this.canvas} width={"100%"} height={"100%"} id="canvas-spark">
                Please use a modern browser that supports the HTML5 canvas
            </canvas>
        );
    }
}