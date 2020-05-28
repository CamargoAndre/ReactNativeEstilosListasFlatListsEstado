import { ADD_CONTATO, DEL_CONTATO } from "./contatos-actions";
import Contato from '../modelo/Contato';

const estadoInicial = {

    contatos: []

}




export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO:
            let id;
            if(estado.contatos === null || estado.contatos.length === 0 ){

                id =10;

            }else{

                let cont = estado.contatos[estado.contatos.length - 1]
                id = cont.id + 2 
            }

            const c = new Contato (id, action.dadosContato.nomeContato, action.dadosContato.telefoneContato)
            return {

                contatos: estado.contatos.concat(c)
            }
        
        case DEL_CONTATO:
            const key = action.dadosContato.idContato;
            const filter = estado.contatos.filter(contato => contato.id !== key)
            
            return {
                contatos: filter
            }

        default:
            return estado
    }

}