import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';


const ContatoInput = (props) => {
    const [contato, setContato] =useState('');
    const [telefone, setTelefone] = useState('');

    const capturaContato = (contato) =>{setContato(contato);}
    const capturaTelefone = (telefone) =>{setTelefone(telefone);}

    return(
        <View style={styles.cadastroContato}>
            <TextInput 
                placeholder="Nome" 
                style={styles.cadastroInputText} 
                onChangeText={capturaContato}
                value={contato} 
            />
            <TextInput 
                placeholder="Telefone" 
                style={styles.cadastroInputText} 
                onChangeText={capturaTelefone}
                value={telefone}
            />
            <Button 
                title="Adicionar"
                onPress={() => props.onAdicionarContato(contato, telefone)}
            />

        </View>
    );


}


const styles = StyleSheet.create({

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
        marginBottom:5,
        padding: 1
    
      }
});

export default ContatoInput;