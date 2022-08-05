import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Pag1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pag1Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pag2Screen')}
      />

      {/* <Button
        title='Ir persona'
        onPress={() => navigation.navigate('PersonaScreen')}
      />
      */}

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.boton,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Osvaldo',
            })
          }>
          <Text style={styles.botonTexto}>Osvaldo</Text>
          <Text style={styles.botonTexto}>
            <Icon name="man-outline" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Vanessa',
            })
          }>
          <Text style={styles.botonTexto}>Vanessa</Text>
          <Text style={styles.botonTexto}>
            <Icon name="woman-outline" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
