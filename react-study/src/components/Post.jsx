import React from 'react';
import Comment from './Comment'
export default class Post extends React.Component{
    //Sera executado toda vez que um novo Post for instanciado
    //Precisamo repassar as propriedades que vem do Post para a classe pai do React.Component
    //que fará as tratativas dessas propriedades
    constructor(props){
        super(props);

        //Estado do post - onde todas as variaveis que usaremos para o post ficaram gravadas dentro deste estado
        this.state ={
            comments:[
                {text:'Bom post!'}
            ]
        }
    }
    //responsavel por retornar o conteudo html deste component
    render(){
        return(
            <div>
                 <h2>{this.props.title}</h2>
                 {this.state.comments.map((comment, index)=>{
                     return <Comment key={index} text={comment.text} />
                 })}
            </div>
        )
    }
}