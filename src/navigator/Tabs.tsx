import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
// import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/AppTheme';
import {Text} from 'react-native';
import {TopTabNav} from './TopTabNav';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home';
              break;
            case 'TopTabNav':
              iconName = 'person-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }

          return (
            <Text>
              <Icon name={iconName} size={16} color={color} />
            </Text>
          );
        },
      })}
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabNav"
        options={{title: 'TopTabNav'}}
        component={TopTabNav}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
