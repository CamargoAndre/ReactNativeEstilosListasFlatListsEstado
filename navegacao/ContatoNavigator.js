import { createStackNavigator } from "react-navigation-stack";
import Contato from '../telas/Contato';
import TelaInicio from '../telas/TelaInicio';
import NovoContatoTela from '../telas/NovoContatoTela';
import Cores from '../cores/Cores'
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";


const ContatoNavigator = createStackNavigator({

    Inicio: TelaInicio,
    Contato: Contato,
    NovoContato: NovoContatoTela
},{
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Cores.corHeader : ''
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Cores.corHeader 
    }
});

export default createAppContainer(ContatoNavigator);