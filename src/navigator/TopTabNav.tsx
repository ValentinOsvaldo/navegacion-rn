import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {Contacts} from '../screens/Contacts';
import {Albums} from '../screens/Albums';
import { colors } from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNav = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowIcon: true,
        tabBarStyle: {
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox';
              break;
            case 'Contacts':
              iconName = 'people';
              break;
            case 'Albums':
              iconName = 'albums';
              break;
          }

          return (
            <Text>
              <Icon name={iconName} color={color} size={16} />
            </Text>
          )
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      style={{
        paddingTop: top,
      }}>
      <Tab.Screen
        name="Chat"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="Contacts"
        options={{title: 'Contacts'}}
        component={Contacts}
      />
      <Tab.Screen
        name="Albums"
        options={{title: 'Albums'}}
        component={Albums}
      />
    </Tab.Navigator>
  );
};
