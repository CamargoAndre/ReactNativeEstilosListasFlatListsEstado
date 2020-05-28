import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/Cores';
import Medidas from '../medidas/Medidas';

const ContatoItem = (props) => {

    const excluirContato = () =>{

        Alert.alert(

            'Excluir Contato',
            'Deseja realmente Excluir esse Contato',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "OK", 
                    onPress: () => props.onDelete(props.keys)
                }
            ],

            { cancelable: false }
        )
    } 

    return(
        <TouchableOpacity onLongPress={excluirContato} onPress={props.contSelecionado.bind(this, props.keys)}>
            {/*<View style={styles.itemNaLista}> */}
            <Cartao estilos={styles.itemNaLista}>
                <Text>{'Cod:        ' + props.keys}</Text>
                <Text>{'Nome:       ' + props.contato}</Text>
                <Text>{'Telefone:   ' + props.telefone}</Text>
            </Cartao>
            {/*</View>*/}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: Cores.corCartao,
        marginBottom: Medidas.eight
    }

});

export default ContatoItem;

