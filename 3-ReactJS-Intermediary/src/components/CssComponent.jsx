import React from 'react'
export default class CssComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color: 'blue'
        }
        this.colorState = this.colorState.bind(this)
    }
    colorState(){
        let newColor = this.state.color === 'blue' ? 'black' : 'blue';
        this.setState({
            color: newColor
        })
    }

    render(){

        //Css Inline
        const divStyle = {
            color: this.state.color,
            background: 'white',
            width: '20rem',
            height: '5rem',
            display: 'flex',
            fontSize: '2rem',
            justifyContent: 'center',
            alignItems: 'center'
        }
        const div = <div style={divStyle} >Penetrei aqui</div>
        const button = <button onClick={this.colorState}>Trocar para preto</button>
        const button2 = <button onClick={this.colorState}>Trocar para azul</button>

        return (
            <div>
                {div}
                {this.state.color === 'blue' && button}
                {this.state.color === 'black' &&  button2}
            </div>
        )
    }
}