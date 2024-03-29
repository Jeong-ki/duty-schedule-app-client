import React from 'react';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  onPress: () => void;
};

export const DeleteIcon: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable testID="basket-delete-icon" onPress={onPress}>
      <MaterialCommunityIcons
        color={'darkslateblue'}
        disabled
        name="trash-can-outline"
        size={32}
      />
    </Pressable>
  );
};
