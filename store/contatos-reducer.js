
import { ADD_CONTATO, DEL_CONTATO, ALT_CONTATO } from "./contatos-actions";
import Contato from '../modelo/Contato';

const estadoInicial = {

    contatos: []

}


export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO:
            let id;
            if(estado.contatos === null || estado.contatos.length === 0 ){

                id = 10
                

            }else{
                let maior = 0;
                for(let i = 0 ; i < estado.contatos.length; i++){
                    if(estado.contatos[i].id > maior){
                        maior = estado.contatos[i].id;
                    }
                }

                id = maior + 2
                //let cont = estado.contatos[estado.contatos.length - 1]
                //id = id + 2//cont.id + 2
                
            }

            const c = new Contato (id, action.dadosContato.nomeContato, action.dadosContato.telefoneContato, action.dadosContato.imagem)
            console.log(JSON.stringify(c))
            return {

                contatos: estado.contatos.concat(c)
            }
        
        case DEL_CONTATO:
            const key = action.dadosContato.idContato;
            const filter = estado.contatos.filter(contato => contato.id !== key)
            
            return {
                contatos: filter
            }
        case ALT_CONTATO:

            const keyAlt = action.dadosContato.idContato;
            const filterAlt = estado.contatos.filter(contato => contato.id !== keyAlt)
            const cAlt = new Contato (action.dadosContato.idContato, action.dadosContato.nomeContato, action.dadosContato.telefoneContato, action.dadosContato.imagem)

            return {
                contatos: filterAlt.concat(cAlt)
            }
        default:
            console.log('aqui' + JSON.stringify(action))
            return estado
    }

}