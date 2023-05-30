import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native';
import { styles } from './styles';
const ProductsItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
<TouchableOpacity onPress={() => onSelected(item)} style={{...styles.containerTouchable}}>
        <View>
     
        <Text style={styles.text}>{item.nombre}</Text>
        </View>
        <View>
            <Image
                source={{ uri: item.imagen }}
                style={{ width: 200, height: 200 }}
                />
        </View>
            <View>
                <Text style={{fontWeight:'bold', fontSize: 20}}>{item.precioMayorista}$</Text>
                <Text style={{fontWeight: "900", fontSize: 20}}>{item.precioMinorista}$</Text>
            </View>
            <View>
                <Text>Stock: {item.stock} disponibles</Text>
            </View>
      </TouchableOpacity>


    </View>
  )
}
export default ProductsItem