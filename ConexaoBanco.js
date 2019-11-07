const MongoClient = require('mongodb').MongoClient;

let conexao = null;

export function conecta () {
    if(conexao===null) {
        MongoClient.connect('mongodb://localhost:27017/gerenciaprojetos', { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            conexao = db;
            return conexao;
        })
    } else {
        return conexao;
    }
}



