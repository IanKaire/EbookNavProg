import React from 'react';
import {Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabIcon = ({onPress, name, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} style={style} />
    </Pressable>
  );
};

export default TabIcon;
