import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Text style={styles.name}>{item.nombre}</Text>
      <Text style={styles.price}>Precio: ${item.precioMayorista}</Text>
      <Text style={styles.price}>Precio minorista: ${item.precioMinorista}</Text>
      <Text style={styles.stock}>Stock: {item.stock} disponibles</Text>
      {/* Agrega más información del producto si es necesario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    marginVertical: 5,
  },
  stock: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default ProductDetailsScreen;
