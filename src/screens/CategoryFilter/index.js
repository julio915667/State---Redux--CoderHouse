import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

import { products } from '../../constants/data/productos';
import ProductsItem from '../../components/product-item';
import { CATEGORIES } from '../../constants/data/categorias';

const ProductsByCategoryScreen = ({ route }) => {
  const { categoryId } = route.params;

  const filteredProducts = products.filter((product) => product.categoryId === categoryId);

  const getCategoryName = (categoryId) => {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    return category ? category.name : '';
  };

  const renderItems = ({ item }) => {
    const categoryName = getCategoryName(item.categoryId);
    return (
      <ProductsItem item={item} categoryName={categoryName} />
    );
  };

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView>
      <FlatList
        data={filteredProducts}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default ProductsByCategoryScreen;
