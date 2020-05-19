import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import Medidas from './medidas/Medidas';

import TelaInicio from './telas/TelaInicio';
import Contato from './telas/Contato';
import ContatoNavigator from './navegacao/ContatoNavigator';

export default function App() {


  return (  
   
    <ContatoNavigator />
    

    
  );
}


