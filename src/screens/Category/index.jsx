import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { styles } from './styles';
import CategoryItems from '../../components/category-Item';
import { CATEGORIES } from '../../constants/data/categorias';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../../store/actions/categories.actions';

const Categorys = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state)=> state.categories.data)
  const onSelected = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("ProductsByCategory", {
      categoryId: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderItems = ({ item }) => {
    return (
      <CategoryItems item={item} onSelected={onSelected} />
    );
  };

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categorys;
