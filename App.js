import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
import Medidas from './medidas/Medidas';


export default function App() {

  const[contatos, setContatos] = useState([]);

  const[contadorContato, setContadorContato] = useState(10);


  const adicionarContato = (contato, telefone) =>{
    setContatos ((contatos) =>{
      console.log(contatos);
      setContadorContato(contadorContato + 2);
      return [...contatos, {key:contadorContato.toString(), cont:contato, tel:telefone}];
    }); 
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      const filter = contatos.filter(contato => contato.key !== keyASerRemovida);
      
      return filter;//contatos.filter(contato => {
        //console.log (contato.key + ' ' + keyASerRemovida);
        //contato.key != keyASerRemovida
      
    });
  };

  return (
    <View style={styles.container} >
      <View><Text style={styles.titulo}>Cadastrar Contatos</Text></View>
        <ContatoInput onAdicionarContato ={adicionarContato}/>
      <View>
        <View><Text style={styles.titulo}>Lista de Contatos</Text></View>
        <FlatList
          data = {contatos}
          renderItem = {contato => (
            <ContatoItem 
              keys={contato.item.key} 
              contato={contato.item.cont} 
              telefone ={contato.item.tel}
              onDelete={removerContato}
            />)}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:Medidas.fifty,
  },
  
  titulo: {
    fontSize: Medidas.thirty,
    marginBottom:Medidas.twenty
  }
});
