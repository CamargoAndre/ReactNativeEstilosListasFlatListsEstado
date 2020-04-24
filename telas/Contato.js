import React, { useState } from 'react';

import { View, StyleSheet, Text} from 'react-native';

import Cartao from '../components/Cartao';

// import { Container } from './styles';

const Contatos = (props) => {


    const [contato, setContato] = useState(props.contato);

    console.log(contato);

    return(
        <View >
            <Cartao > 
                <Text> 123 </Text>
            </Cartao>
         </View>
    );
};


const styles = StyleSheet.create({})

export default Contatos;
