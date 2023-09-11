// ProductList.tsx

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import EmptyListComponent from '../../components/EmptyList';
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
  const [loading, setLoading] = useState(true);

  const category = route?.params?.category || '';
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // condition applied to fetch product list from an API here and update the state.
      let allProducts = category
        ? await fetchCategoryProducts(category)
        : await fetchAllProducts();
      setData(allProducts.products);
    } catch (error) {
      console.log('error while fetching products', error);
    } finally {
      setLoading(false);
    }
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
  if (loading) {
    return (
      <View style={styles.container}>
        <Header backPress title={'Product List'} cartPress />
        <ActivityIndicator
          color={'black'}
          size={'small'}
          style={{marginTop: responsiveHeight(40), alignSelf: 'center'}}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header backPress title={'Product List'} cartPress />
      <FlatList
        contentContainerStyle={styles.FlStyles}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListEmptyComponent={EmptyListComponent}
      />
    </View>
  );
};

export default ProductList;
