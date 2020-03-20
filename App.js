import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <View><Text style={styles.titulo}>Cadastrar Contatos</Text></View>
      <View style={styles.cadastroContato}>
        <TextInput style={styles.cadastroImputText} placeholder="Nome" />
        <TextInput style={styles.cadastroImputText} placeholder="Telefone" />
        <Button 
          title="Adicionar"
        />

      </View>
      <View>
        <View><Text style={styles.titulo}>Lista de Contatos</Text></View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50,
    alignItems: 'center'
  },
  
  titulo: {
    fontSize: 30,
    marginBottom:20
  },

  cadastroContato: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  cadastroImputText: {
    fontSize:20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom:5,
    padding: 1

  }


});
