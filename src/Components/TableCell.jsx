import React, { Component } from 'react'

export default class TableCell extends Component {
    constructor(){
        super();
        this.state = {color:'white'};
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(){
        const newColor = document.getElementById('colors').value;
        this.setState({color:newColor})
    }
    
    render() {
        return (
            <div className='tableCell' 
                style={{background:this.state.color}}
                onClick={this.changeColor}
            />
        )
    }
}
