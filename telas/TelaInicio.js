import React, {useState} from 'react';

import {StyleSheet, Text, View, FlatList, Platform} from 'react-native';

import ContatoItem from '../components/ContatoItem';
import ContatoInput from '../components/ContatoInput';

import Medidas from '../medidas/Medidas';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';


const TelaInicio = (props) => {

    const[contatos, setContatos] = useState([]);

    const[contadorContato, setContadorContato] = useState(10);

    const[contato, setContato] = useState([]);
  
    const adicionarContato = (contato, telefone) =>{
      setContatos ((contatos) =>{
        setContadorContato(contadorContato + 2);
        return [...contatos, {key:contadorContato.toString(), cont:contato, tel:telefone}];
      }); 
    };
  
    const removerContato = (keyASerRemovida) => {
      
        setContatos(contatos => {
        const filter = contatos.filter(contato => contato.key !== keyASerRemovida);
        
        return filter;
        
      });
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
                renderItem = {contato => (
                    <ContatoItem 
                    keys={contato.item.key} 
                    contato={contato.item.cont} 
                    telefone ={contato.item.tel}
                    onDelete={removerContato}
                    contSelecionado={contatoSelecionado}
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
