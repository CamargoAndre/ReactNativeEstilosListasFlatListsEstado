import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import Medidas from './medidas/Medidas';

import TelaInicio from './telas/TelaInicio';
import Contato from './telas/Contato';

export default function App() {

  const[contatos, setContatos] = useState([]);
  const[keyContato, setKeyContato] = useState('');
  const[tela, setTela] = useState(1);

  const[contador, setContador] = useState(10);


  const keySelecionado = (keyContato) => {

    setKeyContato(keyContato);
  };

  const telaSelecionada = (contatos, contador) => {
    setContatos(contatos)
    setContador(contador)
    if(tela === 1){
      setTela(2);
    }else if(tela === 2) {
      setTela(1);
    }
  };


  let conteudo;
  
  if(tela === 1){
    conteudo = <TelaInicio 
                keyContatoSelecionado={keySelecionado} 
                alteraTela={telaSelecionada} 
                contatosGeral={contatos} 
                cont={contador}/>;
  }
  else if(tela === 2) {

    conteudo = <Contato 
                  editCont={keyContato} 
                  editContatos={contatos} 
                  voltar={telaSelecionada} 
                  cont={contador} />
  }

  return (  
    <View style={styles.container} >

      {conteudo}

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:Medidas.fifty,
  }
  
});
