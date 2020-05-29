import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector, useDispatch } from 'react-redux';

import ContatoItem from '../components/ContatoItem';
import Medidas from '../medidas/Medidas';
import BotaoCabecalho from '../components/BotaoCabecalho';

import * as contatosActions from '../store/contatos-actions';


const TelaInicio = (props) => {

  const dispatch = useDispatch()
  
  const contatos = useSelector(estado => estado.contatos.contatos )

  const removerContato = (keyASerRemovida) => {
      
    dispatch(contatosActions.delContato(keyASerRemovida))
        //setContatos(contatos => {
        //const filter = contatos.filter(contato => contato.key !== keyASerRemovida);
       // return filter; 
      //});
    };

    const contatoSelecionado = (keyContato) => {

      props.keyContatoSelecionado(keyContato);
      props.alteraTela(contatos, contadorContato);

    }

        
    return(
        <View style={styles.container}>
            <View>
                <FlatList
                data = {contatos}
                keyExtractor={contato => contato.id}
                renderItem = {contato => (
                    <ContatoItem 
                      keys={contato.item.id} 
                      contato={contato.item.nome} 
                      telefone ={contato.item.telefone}
                      onDelete={removerContato}
                      contSelecionado={() => props.navigation.navigate('Contato', {key: contato.item.id})}
                    />
                )}
                />
            </View>
        </View>
    );
    
}

TelaInicio.navigationOptions = dadosNav => {
  return{
    headerTitle: 'Lista Contatos',
    headerRight: () => (
      <HeaderButtons 
        HeaderButtonComponent={BotaoCabecalho}
      >
        <Item 
          title="Adicionar"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {dadosNav.navigation.navigate('NovoContato')}}
        />
      </HeaderButtons>
    )
  }

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


export default TelaInicio;
