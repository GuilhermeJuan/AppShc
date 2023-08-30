import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar as telas que você criou
import TelaLogin from './componentes/TelaLogin';
import TelaHome from './componentes/TelaHome';
import Detalhes from './componentes/Detalhes';
import TelaContato from './componentes/TelaContato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        {/* Tela de Login */}
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ headerShown: false }} />

        {/* Navegação Geral */}
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="TelaContato" component={TelaContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
