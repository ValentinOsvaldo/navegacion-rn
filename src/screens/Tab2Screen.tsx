import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

export const Tab2Screen = () => {

  useEffect(() => {
    console.log('Screen 2')
  }, [])

  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
};
