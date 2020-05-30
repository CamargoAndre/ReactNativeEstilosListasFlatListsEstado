import * as FileSystem from 'expo-file-system';

export const ADD_CONTATO = 'ADD_CONTATO';
export const DEL_CONTATO = 'DEL_CONTATO';
export const ALT_CONTATO = 'ALT_CONTATO';



export const addContato = (nomeContato , telefoneContato, imagem) => {

    return async dispatch => {
        
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })

            dispatch({type: ADD_CONTATO, dadosContato: { nomeContato: nomeContato, telefoneContato: telefoneContato,
                 imagem: novoPath  } })

        } catch(err){
            console.log(err);
            throw err;
        }
    };       
}

export const delContato = (idContato) => {

    return {
        type: DEL_CONTATO, dadosContato: {idContato: idContato}
    }
} 

export const altContato = (idContato, nomeContato, telefoneContato, imagemContato) => {

    return {
        type: ALT_CONTATO, dadosContato: {idContato: idContato, nomeContato: nomeContato, telefoneContato: telefoneContato, imagem: imagemContato}
    }
}

