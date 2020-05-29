import React, { useState } from 'react';

import { View, StyleSheet, Text, Button, FlatList, TextInput} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Cartao from '../components/Cartao';
import ContatoInput from '../components/ContatoInput'
import * as contatosActions from '../store/contatos-actions';


const Contatos = (props) => {

    const dispatch = useDispatch()

    const contatos = useSelector(estado => estado.contatos.contatos )

    const [key, setKey] = useState(props.navigation.getParam('key'))
    const[contato, setContato] = useState(contatos.filter(contato => contato.id === key));
    const[altera, setAltera] = useState(false)
    

    const alterarOContato = (nome, telefone) => {

        setContato([{id: key, nome:nome, telefone:telefone}]);

        dispatch(contatosActions.altContato(key, nome, telefone))



        //setContatos(contatos => {const filter = contatos.filter(contato => contato.key !== keyContato);
         //   return filter;
        //});
              
        //setContatos((contatos) => { 
         //   return [...contatos, {key:keyContato, cont:conts, tel:telefone}]
       // });

        //{setAltera(false)}

        props.navigation.goBack();

    }


    let alteraContato = <View/>;
    
    if(altera){

        alteraContato =
             <View style={estilos.cadastroContato}>
                <ContatoInput onAdicionarContato={alterarOContato} />
            </View>
    }

    return(
        <View style={estilos.container}>
                <FlatList
                    data = {contato}
                    renderItem = {cont => ( 
                        <Cartao estilos={estilos.itemNaLista}>
                            <Text style={estilos.texto}>Nome: {cont.item.nome} </Text>
                            <Text style={estilos.texto}> Telefone: {cont.item.telefone} </Text>
                        </Cartao>
                    )}/>
            <View style={estilos.botoes}>
                <View style={estilos.botao}> 
                    <Button 
                        title = 'Alterar'
                        onPress = {() =>{setAltera(true)}}
                    />
                </View>
                <View style={estilos.botao}>
                    <Button 
                        title='Voltar'
                        onPress ={() => {props.navigation.navigate('Inicio')}}
                    />
                </View> 
            </View>
            <View style={estilos.alterarContato}>
                    {alteraContato}
                        
            </View>
         </View>
    );
};




const estilos = StyleSheet.create({
    container: {
        padding: 5,
    },
    alterarContato:{
        padding: 10,
        marginTop: 10
    },

    botoes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    botao: {
        width: 100
    },
    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: '#4F4F4F',
        marginBottom: 8,
        alignItems: 'center'
    },
    texto: {
        fontSize: 28,
        marginBottom: 15,
        color: 'white'
        
    },
    cadastroContato: {
        flexDirection: 'column',
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    cadastroInputText: {
        fontSize:20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        padding: 1
    
      }
})

export default Contatos;
