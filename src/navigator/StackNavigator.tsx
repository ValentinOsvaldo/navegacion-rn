import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Pag1Screen} from '../screens/Pag1Screen';
import {Pag2Screen} from '../screens/Pag2Screen';
import {Pag3Screen} from '../screens/Pag3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Pag1Screen: undefined;
  Pag2Screen: undefined;
  Pag3Screen: undefined;
  PersonaScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName=''
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pag1Screen"
        options={{title: 'Pag 1'}}
        component={Pag1Screen}
      />
      <Stack.Screen
        name="Pag2Screen"
        options={{title: 'Pag 2'}}
        component={Pag2Screen}
      />
      <Stack.Screen
        name="Pag3Screen"
        options={{title: 'Pag 3'}}
        component={Pag3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
