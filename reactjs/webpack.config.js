const path = require('path');
module.exports = {
    mode:'prodution',
    //onde o webpack vai pegar todos os arquivos pra montar toda a sua arvore
    entry: './src/index.js',
    output: {
        //dist - pasta onde estará arquivo final do projeto
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
}