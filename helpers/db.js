import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db")


export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) =>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone NUM NOT NULL, imagemUri TEXT NOT NULL);',
            [],
            () => {resolve()},
            (_, err) => {reject(err)}
            );
        });  
    });
    return promise;
}