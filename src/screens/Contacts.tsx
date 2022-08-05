import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/AppTheme';

export const Contacts = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>
      {!authState.isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};
