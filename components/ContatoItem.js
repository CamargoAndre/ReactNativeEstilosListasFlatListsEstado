import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ContatoItem = (props) => {

    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>{'Cod:        ' + props.keys}</Text>
                <Text>{'Nome:       ' + props.contato}</Text>
                <Text>{'Telefone:   ' + props.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
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

export default ContatoItem;

