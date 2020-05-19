import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native';
import ContatoInput from '../components/ContatoInput';
import Medidas from '../medidas/Medidas';



const NovoContatoTela = (props) => {


    const adicContato = (contato, telefone) => {
        console.log(contato)
        console.log(telefone)
        
        props.navigation.navigate('Inicio')

    }


  return (
      <View style={styles.container}>
        <ContatoInput onAdicionarContato={adicContato} />
      </View>
  )
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

export default NovoContatoTela;