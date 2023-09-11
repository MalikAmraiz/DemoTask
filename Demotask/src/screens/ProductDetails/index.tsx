import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import FloatingButton from '../../components/FloatingButton';
import Header from '../../components/Header';
import {fetchProductDetails} from '../../services';
import {addToCart} from '../../store/cartSlice';
import RootStackParamList from '../../types';
import {Product} from '../../types/interfaces';
import {styles} from './styles';

// Define the navigation params
type ProductDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type ProductDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetails'
>;

interface ProductDetailsProps {
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {productId} = route.params;
  const intitailState: Product = {
    id: 1,
    title: 'abc',
    description: 'abc',
    price: 1,
    discountPercentage: 1,
    rating: 1,
    stock: 1,
    brand: 'abc',
    category: 'abc',
    thumbnail: 'abc',
    images: [],
  };
  const [data, setData] = useState<Product>(intitailState);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      // fetch product data from an API here and update the state.
      let detail = await fetchProductDetails(productId);
      setData(detail);
    } catch (error) {
      console.log('error while fetching product details', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        image: data.thumbnail,
        quantity: 1,
      }),
    );
    navigation.navigate('Cart');
  };
  if (loading) {
    return (
      <View style={styles.container}>
        <Header backPress title={'Product Details'} cartPress />
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
      <Header backPress title={'Product Details'} cartPress />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Image source={{uri: data.thumbnail}} style={styles.thumbnail} />
        <View style={styles.productInfo}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <Text style={styles.price}>
            ${data.price.toFixed(2)}{' '}
            <Text style={styles.discount}>
              (Save {data.discountPercentage}%)
            </Text>
          </Text>
          <Text style={styles.rating}>Rating: {data.rating}</Text>
          <Text style={styles.rating}>In Stock: {data.stock}</Text>
          <Text style={styles.rating}>Brand: {data.brand}</Text>
          <Text style={styles.rating}>Category: {data.category}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imagesListView}>
          {data.images.map((image, index) => (
            <View style={styles.imageWrapper}>
              <Image
                key={index}
                source={{uri: image}}
                style={styles.productImage}
              />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <FloatingButton onPress={handleAddToCart} />
    </View>
  );
};

export default ProductDetails;
