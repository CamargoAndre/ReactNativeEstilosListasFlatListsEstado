import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import Medidas from './medidas/Medidas';

import TelaInicio from './telas/TelaInicio';
import Contato from './telas/Contato';

export default function App() {

  const[contato, setContato] = useState([]);
  const[tela, setTela] = useState('');

  const contatoSelecionado = (contato) => {

    setContato(contato);
    setTela(2);

  };

  let conteudo = <TelaInicio contsSelecionado={contatoSelecionado}/>

  if(tela) {

    conteudo = <Contato />
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
