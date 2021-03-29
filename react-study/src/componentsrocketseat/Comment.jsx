import React from 'react'
export default class Comment extends React.Component{
    render(){
        return(
            <div>
              {this.props.text}
            </div>
        )
    }
}