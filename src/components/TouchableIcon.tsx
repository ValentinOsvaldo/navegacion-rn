import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
  size?: number;
  color?: string;
}

export const TouchableIcon = ({iconName, size = 80, color}: Props) => {
  const {changeIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeIcon(iconName)}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};
