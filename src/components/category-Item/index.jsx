import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const CategoryItems = ({ item, onSelected }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onSelected(item)} style={{...styles.containerTouchable, backgroundColor: item.color }}>
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItems;
