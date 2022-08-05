import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pag2Screen = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras', 
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={ styles.title }>Pag2Screen</Text>

      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pag3Screen')}
      />
    </View>
  );
};
