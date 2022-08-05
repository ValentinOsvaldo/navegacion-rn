import React from 'react';
import {View, Text} from 'react-native';
import {styles, colors} from '../theme/AppTheme';

import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        <TouchableIcon iconName="rocket-outline" color={colors.primary} />
        <TouchableIcon iconName="airplane-outline" color={colors.primary} />
        <TouchableIcon iconName="bonfire-outline" color={colors.primary} />
        <TouchableIcon iconName="calculator-outline" color={colors.primary} />
        <TouchableIcon
          iconName="chatbubble-ellipses-outline"
          color={colors.primary}
        />
        <TouchableIcon iconName="images-outline" color={colors.primary} />
        <TouchableIcon iconName="leaf-outline" color={colors.primary} />
      </Text>
    </View>
  );
};
