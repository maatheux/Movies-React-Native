import 'react-native-gesture-handler'; //doc fala que esse deve ser o 1 import
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true} />
            <Routes />
        </NavigationContainer>
    );
}

export default App; // para que os componentes apareçam na tela é necessário que exporte a função

/*
import React from 'react';
import { View, Text } from 'react-native'; // passamos os componentes dentro das chaves

function App() {
  return (
      <View style={{ marginTop: 100, marginLeft: 5 }}>
          <Text style={{ color: '#ff0000', fontSize: 30 }}>Hello World!</Text>
           criamos um component text, somente dentro de text conseguimos escrever algo
      </View> // criamos o componente view
  ); // dentro do return teremos um jsx, que é basicamente a nossa tela que iremos montar
}
export default App; // para que os componentes apareçam na tela é necessário que exporte a função
*/
