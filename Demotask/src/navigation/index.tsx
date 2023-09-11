// MainNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/ProductList'; // Import your ProductList component
import ProductDetails from '../screens/ProductDetails'; // Import your ProductDetails component
import Cart from '../screens/Cart'; // Import your CartScreen component
import Categories from '../screens/Categories';
import RootStackParamList from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
