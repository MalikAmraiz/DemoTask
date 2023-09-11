// ProductList.tsx

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import {fetchAllProducts, fetchCategoryProducts} from '../../services';
import RootStackParamList from '../../types';
import {Product} from '../../types/interfaces';
import {styles} from './styles';
type ProductListNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductList'
>;

// Create a type for the route prop
type ScreenPropsRouteProp = RouteProp<RootStackParamList, 'ProductList'>;
type ProductListProps = {
  navigation: ProductListNavigationProp;
  route: ScreenPropsRouteProp;
};
const ProductList: React.FC<ProductListProps> = ({route, navigation}) => {
  const [data, setData] = useState<Product[]>([]);
  const category = route?.params?.category || '';
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // condition applied to fetch product list from an API here and update the state.
    let allProducts = category
      ? await fetchCategoryProducts(category)
      : await fetchAllProducts();
    setData(allProducts.products);
  };
  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => {
        navigation.navigate('ProductDetails', {productId: item.id});
      }}>
      <Image style={styles.productImage} source={{uri: item.thumbnail}} />
      <Text>{item.title}</Text>
      <Text>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header backPress title={'Product List'} cartPress />
      <FlatList
        contentContainerStyle={styles.FlStyles}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;
