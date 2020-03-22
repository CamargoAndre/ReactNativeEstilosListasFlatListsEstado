import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';



export default function App() {
  const [contato, setContato] =useState('');
  const [telefone, setTelefone] = useState('');

  const[contatos, setContatos] = useState([]);

  const[contadorContato, setContadorContato] = useState(1);

  const capturaContato = (contato) =>{setContato(contato);}
  const capturaTelefone = (telefone) =>{setTelefone(telefone);}

  const adicionarContato = () =>{
    setContatos ((contatos) =>{
      console.log(contatos);
      setContadorContato(contadorContato + 1);
      return [...contatos, {key:contadorContato.toString(), cont:contato, tel:telefone}];
    }); 
  }



  return (
    <View style={styles.container} >
      <View><Text style={styles.titulo}>Cadastrar Contatos</Text></View>
      <View style={styles.cadastroContato}>
        <TextInput 
          placeholder="Nome" 
          style={styles.cadastroImputText} 
          onChangeText={capturaContato}
          value={contato} 
           />
        <TextInput 
          placeholder="Telefone" 
          style={styles.cadastroImputText} 
          onChangeText={capturaTelefone}
          value={telefone}
          />
        <Button 
          title="Adicionar"
          onPress={adicionarContato}
        />

      </View>
      <View>
        <View><Text style={styles.titulo}>Lista de Contatos</Text></View>
        <FlatList
          data = {contatos}
          renderItem = {contato => 
            <View style={styles.itemNaLista}>
              <Text>{'Cod:        ' +contato.item.key}</Text>
              <Text>{'Nome:       ' +contato.item.cont}</Text>
              <Text>{'Telefone:   ' + contato.item.tel}</Text>
            </View>}
        >
        </FlatList>
      {/*
        <ScrollView>
          
        {
          contatos.map((contato) => 
          <View key={contato.key} style={styles.itemNaLista}>
            <Text>{'Cod:      ' +  contato.key} </Text>
            <Text>{'Nome:     ' + contato.cont} </Text>
            <Text>{'Telefone: ' + contato.tel}</Text>
          </View> )
        }
      </ScrollView>
      */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
  },
  
  titulo: {
    fontSize: 30,
    marginBottom:20
  },

  cadastroContato: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    marginBottom: 20,
  },

  cadastroImputText: {
    fontSize:20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom:5,
    padding: 1

  },
  itemNaLista: {
    padding: 12,
    flexDirection: 'column',
    backgroundColor: '#F3F781',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
    }


});
