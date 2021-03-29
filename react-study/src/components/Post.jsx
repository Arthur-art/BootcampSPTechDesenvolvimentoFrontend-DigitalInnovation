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
               
            ],
            //referenciar o input para sabermos o texto do novo comentario
            newCommentText:''
        }
        //informando o react que quando handleSubmit for utilizado, estara sendo referenciado a classe do Post
        //referenciando a variavel this em seu escopo com o metdo bind()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    //function para previnir o carregamento da pagina no forms
    handleSubmit(e){
        //Alterar o estado da aplicacao quando o formulario é enviado
        //alterando o estado da aplicacao baseado no novo comentario
        this.setState({
            comments:[
                ...this.state.comments,
                //Acessando a propriedade newCommentsText
                {text: this.state.newCommentText}
                
            ]
        });
        //Limpando o input do comentario
        this.setState({newCommentText: ''})
        e.preventDefault();
    }

    handleTextChange(e){
        //Alterar o estado da aplicacao quando acontecer uma alteracao no input
        this.setState({newCommentText: e.target.value})
    }
    //responsavel por retornar o conteudo html deste component
    render(){
        return(
            <div>
                 <h2>{this.props.title}</h2>
                 <form onSubmit={this.handleSubmit}>
                     {/*onChange - propriedade que sera disparada toda vez que houver uma alteração no input
                     */}
                     <input value={this.state.newCommentText} onChange={this.handleTextChange} />
                     <button type="submit">Salvar</button>
                 </form>
                 {this.state.comments.map((comment, index)=>{
                     return <Comment key={index} text={comment.text} />
                 })}
            </div>
        )
    }
}