import {View, Text, Image, Button, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './component/Header';
import {Product} from './component/Product';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenContainer} from 'react-native-screens';
import ProductWrapper from './component/ProductWrapper';
import UserList from './component/UserList';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
