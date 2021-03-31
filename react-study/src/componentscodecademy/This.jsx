import React from 'react'

export default class This extends React.Component{
    get name(){
        return 'This - Arthur';
    }

    render(){
        
        let name = 'Tesla';

        return (
            <div>
                <h1>{this.name}</h1>
            </div>
        )
    }
}